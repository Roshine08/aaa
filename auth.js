document.addEventListener("DOMContentLoaded", () => {
  window.AuthI18n?.init();

  const DIGITS = 8;
  const PERIOD = 30;

  const $ = (id) => document.getElementById(id);

  function setStatus(type, msg){
    const el = $("status");
    if (!el) return;
    el.textContent = msg || "";
    el.classList.toggle("ok", type === "ok");
    el.classList.toggle("err", type === "err");
  }

  function getKeyFromURL(){
    const u = new URL(location.href);
    const paramKey = u.searchParams.get("key");
    if (paramKey && /^[0-9a-fA-F]+$/.test(paramKey)) return paramKey;

    const parts = u.pathname.split("/").filter(Boolean);
    if (parts.length){
      const last = parts[parts.length - 1];
      if (/^[0-9a-fA-F]+$/.test(last)) return last;
    }
    return null;
  }

  function hexToBytes(s){
    s = (s ?? "").trim().replace(/^0x/i,"").replace(/[^0-9a-f]/ig,"");
    if (!s) throw new Error("ERR_EMPTY_KEY");
    if (s.length % 2) throw new Error("ERR_INVALID_KEY");
    // Guardrails: adjust if your business allows longer keys
    if (s.length < 16 || s.length > 128) throw new Error("ERR_INVALID_KEY");
    return Uint8Array.from(s.match(/../g).map(x => parseInt(x,16)));
  }

  function counterBytes(c){
    const b = new Uint8Array(8);
    let x = BigInt(c);
    for (let i = 7; i >= 0; i--){
      b[i] = Number(x & 0xffn);
      x >>= 8n;
    }
    return b;
  }

  async function hmacSha1(key,msg){
    const k = await crypto.subtle.importKey("raw", key, {name:"HMAC", hash:"SHA-1"}, false, ["sign"]);
    return new Uint8Array(await crypto.subtle.sign("HMAC",k,msg));
  }

  function truncate(mac){
    const o = mac[mac.length - 1] & 0x0f;
    return (((mac[o]   & 0x7f) << 24) |
            ((mac[o+1] & 0xff) << 16) |
            ((mac[o+2] & 0xff) << 8)  |
            ( mac[o+3] & 0xff)) >>> 0;
  }

  function fmt(n){
    // Safer formatting via BigInt (future-proof if DIGITS changes)
    const mod = 10n ** BigInt(DIGITS);
    const raw = (BigInt(n) % mod).toString().padStart(DIGITS, "0");
    return raw.slice(0,4) + " " + raw.slice(4);
  }

  let lastCtr = null;
  async function gen(){
    try{
      const key = hexToBytes($("secret").value);
      const ctr = Math.floor(Date.now()/1000 / PERIOD);

      if (ctr === lastCtr && $("code").textContent !== "--------") return;
      lastCtr = ctr;

      const mac = await hmacSha1(key, counterBytes(ctr));
      $("code").textContent = fmt(truncate(mac));
      setStatus("", "");
    }catch(e){
      lastCtr = null;
      $("code").textContent = "--------";
      const t = window.AuthI18n?.t ?? ((x)=>x);
      if (e.message === "ERR_EMPTY_KEY") setStatus("err", t("enterKeyError"));
      else if (e.message === "ERR_INVALID_KEY") setStatus("err", t("invalidKey"));
      else setStatus("err", e.message || "Error");
    }
  }

  function tick(){
    const s = Math.floor(Date.now()/1000);
    const rem = PERIOD - (s % PERIOD);
    $("remain").textContent = `${rem}s`;
    $("bar").style.width    = ((PERIOD - rem) / PERIOD * 100) + "%";
  }

  // Aligned ticker (better battery + less CPU than 150ms interval)
  let timer = null;
  function stopTicker(){
    if (timer) clearTimeout(timer);
    timer = null;
  }
  function startTicker(){
    stopTicker();
    const loop = () => {
      if (document.hidden) return; // guard: visibility handler will restart
      tick();
      gen();
      const now = Date.now();
      const next = 1000 - (now % 1000) + 5;
      timer = setTimeout(loop, next);
    };
    loop();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopTicker();
    else startTicker();
  });

  // Debounced input to avoid crypto on every keystroke
  let typingTimer = null;
  $("secret").addEventListener("input", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      lastCtr = null;
      gen();
    }, 150);
  });

  $("copy").addEventListener("click", async () => {
    const v = $("code").textContent;
    if (v.includes("-")) return;
    const t = window.AuthI18n?.t ?? ((x)=>x);
    try{
      await navigator.clipboard.writeText(v.replace(/\s/g,""));
      setStatus("ok", t("copied"));
    }catch{
      setStatus("err", t("copyBlocked"));
    }
  });

  $("clear").addEventListener("click", () => {
    $("secret").value = "";
    $("code").textContent = "--------";
    lastCtr = null;
    setStatus("", "");
  });

  // Keep your behavior: auto-read key from URL/path if present
  const urlKey = getKeyFromURL();
  if (urlKey) $("secret").value = urlKey;

  // Language change should refresh UI state/error messages
  window.addEventListener("langchange", () => {
    // keep existing key/code; just recompute/refresh labels
    lastCtr = null;
    gen();
  });

  tick();
  gen();
  startTicker();
});
