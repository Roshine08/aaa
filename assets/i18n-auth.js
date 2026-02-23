(() => {
  const LANG_KEY = "locale-choice";

  const i18n = {
    en: {
      nav:{home:"Home",services:"Services",warranty:"Warranty",faq:"FAQ",contact:"Contact"},
      back:"Back",
      panelTitle:"Authenticator",
      secretLabel:"Please enter your Private Key",
      placeholder:"Private Key",
      copy:"Copy Code",
      clear:"Clear Key",
      copied:"Copied",
      copyBlocked:"Copy blocked",
      enterKeyError:"Enter your Private Key",
      invalidKey:"Invalid Private Key",
      footer:"© 2021–2026 Roshine Account Store. All rights reserved — your reliable account supplier."
    },
    fr: {
      nav:{home:"Accueil",services:"Services",warranty:"Garantie",faq:"FAQ",contact:"Contact"},
      back:"Retour",
      panelTitle:"Authenticator",
      secretLabel:"Veuillez entrer votre clé privée",
      placeholder:"Clé privée",
      copy:"Copier le code",
      clear:"Effacer",
      copied:"Copié",
      copyBlocked:"Copie bloquée",
      enterKeyError:"Entrez votre clé privée",
      invalidKey:"Clé privée invalide",
      footer:"© 2021–2026 Roshine Account Store. Tous droits réservés — votre fournisseur fiable."
    },
    de: {
      nav:{home:"Home",services:"Services",warranty:"Garantie",faq:"FAQ",contact:"Kontakt"},
      back:"Zurück",
      panelTitle:"Authenticator",
      secretLabel:"Bitte Private Key eingeben",
      placeholder:"Private Key",
      copy:"Code kopieren",
      clear:"Löschen",
      copied:"Kopiert",
      copyBlocked:"Kopieren blockiert",
      enterKeyError:"Bitte Private Key eingeben",
      invalidKey:"Ungültiger Private Key",
      footer:"© 2021–2026 Roshine Account Store. Alle Rechte vorbehalten — dein zuverlässiger Anbieter."
    },
    ar: {
      nav:{home:"الرئيسية",services:"الخدمات",warranty:"الضمان",faq:"الأسئلة",contact:"تواصل"},
      back:"رجوع",
      panelTitle:"Authenticator",
      secretLabel:"يرجى إدخال Private Key",
      placeholder:"Private Key",
      copy:"نسخ الرمز",
      clear:"مسح",
      copied:"تم النسخ",
      copyBlocked:"تم منع النسخ",
      enterKeyError:"أدخل Private Key",
      invalidKey:"Private Key غير صالح",
      footer:"© 2021–2026 Roshine Account Store. جميع الحقوق محفوظة — المورّد الموثوق للحسابات."
    },
    zh: {
      nav:{home:"主页",services:"服务",warranty:"质保",faq:"FAQ",contact:"联系"},
      back:"返回",
      panelTitle:"Authenticator",
      secretLabel:"请输入你的安全令 Private Key",
      placeholder:"Private Key",
      copy:"复制验证码",
      clear:"清空",
      copied:"已复制",
      copyBlocked:"浏览器禁止复制",
      enterKeyError:"请输入 Private Key",
      invalidKey:"无效的 Private Key",
      footer:"© 2021–2026 Roshine Account Store. All rights reserved — your reliable account supplier."
    }
  };

  let currentLang = "en";

  function detectLang(){
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && i18n[saved]) return saved;

    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("zh")) return "zh";
    if (nav.startsWith("fr")) return "fr";
    if (nav.startsWith("de")) return "de";
    if (nav.startsWith("ar")) return "ar";
    return "en";
  }

  function t(key){
    const pack = i18n[currentLang] || i18n.en;
    return pack[key] ?? i18n.en[key] ?? key;
  }

  function applyLang(lang){
    if (!i18n[lang]) lang = "en";
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir  = (lang === "ar" ? "rtl" : "ltr");

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;

    document.getElementById("navHome").textContent = i18n[lang].nav.home;
    document.getElementById("navServices").textContent = i18n[lang].nav.services;
    document.getElementById("navWarranty").textContent = i18n[lang].nav.warranty;
    document.getElementById("navFaq").textContent = i18n[lang].nav.faq;
    document.getElementById("navContact").textContent = i18n[lang].nav.contact;

    document.getElementById("backBtnText").textContent = i18n[lang].back;

    document.getElementById("panelTitleText").textContent = i18n[lang].panelTitle;
    document.getElementById("secretLabel").textContent = i18n[lang].secretLabel;

    const secret = document.getElementById("secret");
    if (secret) secret.placeholder = i18n[lang].placeholder;

    document.getElementById("copy").textContent = i18n[lang].copy;
    document.getElementById("clear").textContent = i18n[lang].clear;
    document.getElementById("footer").textContent = i18n[lang].footer;
  }

  function init(){
    applyLang(detectLang());
    document.getElementById("langSelect")?.addEventListener("change", e=>{
      const lang = e.target.value;
      applyLang(lang);
      localStorage.setItem(LANG_KEY, lang);
      window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
    });
  }

  window.AuthI18n = { init, t, applyLang, detectLang };
})();
