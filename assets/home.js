const LANG_KEY = "roshine_lang";
    const LINKS = {
      sheet: "https://docs.google.com/spreadsheets/d/1s9sxHj3EVNLUlRb3li9XV8QKBxr2jI0cr12tTgvnB3s/edit?gid=327074105#gid=327074105",
      discord: "https://discord.gg/35GGuJwjVu",
      email: "mailto:roshine_store@roshine.love",
      auth: "/auth/"
    };

    const i18n = {
      en: {
        metaTitle:"Roshine Account Store",
        metaDesc:"Premium Overwatch accounts with secure delivery.",
        nav: { home:"Home", services:"Services", warranty:"Warranty", faq:"FAQ", contact:"Contact" },
        auth:"Authenticator",
        heroKicker:"⚡ Trusted since 2021",
        heroTitle:"ROSHINE",
        heroSubbrand:"Overwatch Account Store",
        heroIntro:"Since 2021, Roshine Account Store has delivered curated Overwatch accounts with a streamlined purchase flow and long-term support. Five years in operation, built for consistency, clarity, and buyer confidence.",
        ctaExplore:"View Stock & Purchase",
        servicesKicker:"✨ SERVICES",
        servicesTitle:"Listings & Ordering",
        servicesDesc:"Browse the live inventory in Google Sheet, then order via Discord by sending the account ID or a screenshot.",
        servicesList:[
          "📄 Open the listings and filter by price, rank, or skins.",
          "🧾 Copy the account ID (or screenshot the row you want).",
          "💬 Join Discord and send the ID/screenshot to confirm availability and total.",
          "✅ After payment, receive login info and the security handover package."
        ],
        btnListings:"View stock (Google Sheet)",
        btnDiscord:"Order via Discord",

        warrantyKicker:"🛡️ WARRANTY",
        warrantyTitle:"Warranty & Security",
        warrantyDesc:"Clear scope, transparent process, long-term protection.",
        warrantyCards:[
          { icon:"🛡️", badge:"PRIMARY", badgeType:"primary", title:"Lifetime Security Warranty",
            desc:"If the account is reclaimed, hacked, or permanently lost due to previous owner issues, we provide a full replacement (equal value) or full compensation." },
          { icon:"📂", badge:"PROOF", badgeType:"primary", title:"Verified Ownership Handover",
            desc:"You receive the security handover package (as applicable): original email access, Battle.net/Steam, authenticator transfer support, account ID, and available recovery details." },
          { icon:"⚡", badge:"FAST", badgeType:"primary", title:"Fast Delivery",
            desc:"Most accounts are delivered within 5 minutes after confirmed payment (rare high-tier accounts may require extra preparation)." },
          { icon:"♾️", badge:"FREE", badgeType:"primary", title:"Unlimited Free Unlock Support (OW2)",
            desc:"If unlock-related issues occur on eligible Overwatch 2 accounts, we provide unlimited assistance." },
          { icon:"🔄", badge:"PAID", badgeType:"paid", title:"Region Update Service",
            desc:"Optional paid service. Region changes are handled only when supported by platform policy." },
          { icon:"🚫", badge:"PAID", badgeType:"paid", title:"Unban Appeal Assistance",
            desc:"Optional paid service. We help prepare and submit an appeal; approval is not guaranteed and depends on official review." }
        ],

        faqKicker:"❓ FAQ",
        faqTitle:"Frequently Asked Questions",
        faqDesc:"Quick answers to the questions that most buyers ask before ordering.",
        faq1:"How often is the list updated? — The Google Sheet is the source of truth, and sold accounts are marked quickly.",
        faq2:"Payment methods? — Credit card, PayPal, crypto, and selected gift cards. Confirm availability and fees on Discord.",
        faq3:"How fast is delivery? — Most orders are delivered within 5 minutes after payment. Rare top-tier accounts may require additional preparation time.",
        faq4:"Are the accounts safe? — All accounts come from real players, not mass-produced scripts or studios. Each has normal usage history with no restrictions.",
        faq5:"Authenticator? — A private tool for Battle.net Authenticator. Use the Authenticator, paste your Private Key from the account info you received, then copy the code into the Battle.net app to verify.",
        btnStock:"View stock",
        btnOrder:"Order via Discord",

        contactKicker:"💬 CONTACT",
        contactTitle:"Reach us",
        contactDesc:"For the fastest response, message us on Discord with the account ID (or a screenshot). You can also email us anytime.",
        btnContact:"Discord",
        btnEmail:"Email",
        footerNav: { home:"Home", services:"Services", contact:"Contact", privacy:"Privacy", terms:"Terms" },

        footer1:"© 2021–2026 Roshine Account Store.",
        footer2:"All rights reserved — your reliable account supplier."
      },

      fr: {
        metaTitle:"Roshine Account Store",
        metaDesc:"Comptes Overwatch premium avec livraison sécurisée.",
        nav: { home:"Accueil", services:"Services", warranty:"Garantie", faq:"FAQ", contact:"Contact" },
        auth:"Authenticator",
        heroKicker:"⚡ Fiable depuis 2021",
        heroTitle:"ROSHINE",
        heroSubbrand:"Boutique de comptes Overwatch",
        heroIntro:"Depuis 2021, Roshine Account Store propose des comptes Overwatch sélectionnés, avec un processus d’achat simple et un support durable. Cinq ans d’activité, axés sur la clarté, la stabilité et la confiance.",
        ctaExplore:"Voir le stock & acheter",
        servicesKicker:"✨ SERVICES",
        servicesTitle:"Liste & Commande",
        servicesDesc:"Consultez l’inventaire en temps réel sur Google Sheet, puis commandez via Discord en envoyant l’ID ou une capture.",
        servicesList:[
          "📄 Ouvrez la liste et filtrez (prix, rang, skins).",
          "🧾 Copiez l’ID du compte (ou capturez la ligne).",
          "💬 Rejoignez Discord et envoyez l’ID/la capture pour confirmer.",
          "✅ Après paiement, recevez les accès et le pack de sécurité."
        ],
        btnListings:"Voir le stock (Google Sheet)",
        btnDiscord:"Commander via Discord",

        warrantyKicker:"🛡️ GARANTIE",
        warrantyTitle:"Garantie & Sécurité",
        warrantyDesc:"Périmètre clair, processus transparent, protection durable.",
        warrantyCards:[
          { icon:"🛡️", badge:"PRIORITÉ", badgeType:"primary", title:"Garantie sécurité à vie",
            desc:"En cas de récupération par l’ancien propriétaire, piratage ou perte permanente liée au précédent propriétaire : remplacement équivalent ou remboursement complet." },
          { icon:"📂", badge:"PREUVE", badgeType:"primary", title:"Transfert vérifié",
            desc:"Pack de sécurité (si applicable) : accès e-mail d’origine, Battle.net/Steam, assistance Authenticator, ID du compte et infos de récupération disponibles." },
          { icon:"⚡", badge:"RAPIDE", badgeType:"primary", title:"Livraison rapide",
            desc:"La plupart des comptes sont livrés sous 5 minutes après confirmation du paiement (comptes premium : préparation possible)." },
          { icon:"♾️", badge:"GRATUIT", badgeType:"primary", title:"Support unlock illimité (OW2)",
            desc:"Pour les comptes Overwatch 2 éligibles : assistance illimitée en cas de problème de déverrouillage." },
          { icon:"🔄", badge:"PAYANT", badgeType:"paid", title:"Changement de région",
            desc:"Service payant optionnel. Uniquement si la politique de la plateforme le permet." },
          { icon:"🚫", badge:"PAYANT", badgeType:"paid", title:"Assistance appel de bannissement",
            desc:"Service payant optionnel. Aide à la soumission d’appel, sans garantie d’acceptation (décision officielle)." }
        ],

        faqKicker:"❓ FAQ",
        faqTitle:"Questions fréquentes",
        faqDesc:"Réponses rapides avant de passer commande.",
        faq1:"Mise à jour de la liste ? — Google Sheet fait foi, et les comptes vendus sont marqués rapidement.",
        faq2:"Paiement ? — Carte, PayPal, crypto et certaines cartes cadeaux. Disponibilité/frais à confirmer sur Discord.",
        faq3:"Délai de livraison ? — La plupart des commandes sont livrées sous 5 minutes après paiement. Les comptes haut de gamme peuvent nécessiter un délai supplémentaire.",
        faq4:"Les comptes sont-ils sûrs ? — Tous les comptes proviennent de vrais joueurs, pas de scripts ou productions de masse. Historique normal, sans restriction.",
        faq5:"Authenticator ? — Outil privé pour Battle.net Authenticator. Utilisez la page Authenticator, collez votre Private Key, puis copiez le code dans l’app Battle.net pour valider.",
        btnStock:"Voir le stock",
        btnOrder:"Commander via Discord",

        contactKicker:"💬 CONTACT",
        contactTitle:"Nous contacter",
        contactDesc:"Le plus rapide : Discord (envoyez l’ID ou une capture). Sinon, vous pouvez aussi nous écrire par e-mail.",
        btnContact:"Discord",
        btnEmail:"Email",
        footerNav: { home:"Accueil", services:"Services", contact:"Contact", privacy:"Confidentialité", terms:"Conditions" },

        footer1:"© 2021–2026 Roshine Account Store.",
        footer2:"Tous droits réservés — votre fournisseur fiable."
      },

      de: {
        metaTitle:"Roshine Account Store",
        metaDesc:"Premium-Overwatch-Konten mit sicherer Übergabe.",
        nav: { home:"Home", services:"Services", warranty:"Garantie", faq:"FAQ", contact:"Kontakt" },
        auth:"Authenticator",
        heroKicker:"⚡ Vertrauenswürdig seit 2021",
        heroTitle:"ROSHINE",
        heroSubbrand:"Overwatch Account Store",
        heroIntro:"Seit 2021 liefert Roshine Account Store kuratierte Overwatch-Accounts mit einem klaren Kaufprozess und langfristigem Support. Fünf Jahre Betrieb – für Beständigkeit, Transparenz und Vertrauen.",
        ctaExplore:"Bestand ansehen & kaufen",
        servicesKicker:"✨ SERVICES",
        servicesTitle:"Listings & Bestellung",
        servicesDesc:"Inventar live im Google Sheet ansehen und dann per Discord bestellen (ID oder Screenshot senden).",
        servicesList:[
          "📄 Listings öffnen und nach Preis, Rang oder Skins filtern.",
          "🧾 Account-ID kopieren (oder Zeile screenshotten).",
          "💬 Discord beitreten und ID/Screenshot zur Bestätigung senden.",
          "✅ Nach Zahlung: Login-Daten und Sicherheits-Übergabepaket erhalten."
        ],
        btnListings:"Bestand ansehen (Google Sheet)",
        btnDiscord:"Über Discord bestellen",

        warrantyKicker:"🛡️ GARANTIE",
        warrantyTitle:"Garantie & Sicherheit",
        warrantyDesc:"Klare Regeln, transparenter Ablauf, langfristiger Schutz.",
        warrantyCards:[
          { icon:"🛡️", badge:"TOP", badgeType:"primary", title:"Lebenslange Sicherheitsgarantie",
            desc:"Bei Rückforderung, Hack oder dauerhaftem Verlust durch Vorbesitzer-Themen: gleichwertiger Ersatz oder volle Rückerstattung." },
          { icon:"📂", badge:"NACHWEIS", badgeType:"primary", title:"Verifizierte Übergabe",
            desc:"Sicherheits-Paket (falls zutreffend): Original-E-Mail, Battle.net/Steam, Authenticator-Unterstützung, Account-ID und verfügbare Recovery-Daten." },
          { icon:"⚡", badge:"SCHNELL", badgeType:"primary", title:"Schnelle Lieferung",
            desc:"Meist innerhalb von 5 Minuten nach Zahlungsbestätigung (seltene High-Tier-Accounts können mehr Zeit brauchen)." },
          { icon:"♾️", badge:"KOSTENLOS", badgeType:"primary", title:"Unbegrenzter Unlock-Support (OW2)",
            desc:"Für berechtigte Overwatch-2-Accounts: unbegrenzte Hilfe bei Unlock-Problemen." },
          { icon:"🔄", badge:"PAID", badgeType:"paid", title:"Regionsänderung",
            desc:"Optionaler Paid-Service. Nur wenn es die Plattform-Richtlinien zulassen." },
          { icon:"🚫", badge:"PAID", badgeType:"paid", title:"Unban-Einspruch Hilfe",
            desc:"Optionaler Paid-Service. Wir helfen beim Einreichen – keine Erfolgsgarantie (offizielle Entscheidung)." }
        ],

        faqKicker:"❓ FAQ",
        faqTitle:"Häufige Fragen",
        faqDesc:"Kurzantworten für den schnellen Kaufentscheid.",
        faq1:"Wie oft wird aktualisiert? — Google Sheet ist maßgeblich, verkaufte Accounts werden schnell markiert.",
        faq2:"Zahlung? — Karte, PayPal, Krypto und ausgewählte Geschenkkarten. Verfügbarkeit/Gebühren auf Discord bestätigen.",
        faq3:"Wie schnell erfolgt die Lieferung? — Die meisten Bestellungen werden innerhalb von 5 Minuten nach Zahlung geliefert. Seltene High-Tier-Accounts können etwas mehr Zeit benötigen.",
        faq4:"Sind die Accounts sicher? — Alle Accounts stammen von echten Spielern, nicht aus Script- oder Massenproduktion. Normale Nutzungshistorie, keine Einschränkungen.",
        faq5:"Authenticator? — Privates Tool für Battle.net Authenticator. Öffne die Authenticator-Seite, füge den Private Key ein und kopiere den Code in die Battle.net App zur Verifizierung.",
        btnStock:"Bestand ansehen",
        btnOrder:"Über Discord bestellen",

        contactKicker:"💬 KONTAKT",
        contactTitle:"Kontakt",
        contactDesc:"Am schnellsten über Discord (ID oder Screenshot senden). Alternativ per E-Mail erreichbar.",
        btnContact:"Discord",
        btnEmail:"Email",
        footerNav: { home:"Home", services:"Services", contact:"Kontakt", privacy:"Datenschutz", terms:"AGB" },

        footer1:"© 2021–2026 Roshine Account Store.",
        footer2:"Alle Rechte vorbehalten — dein zuverlässiger Anbieter."
      },

      ar: {
        metaTitle:"Roshine Account Store",
        metaDesc:"حسابات أوفرواتش مميزة مع تسليم آمن.",
        nav: { home:"الرئيسية", services:"الخدمات", warranty:"الضمان", faq:"الأسئلة", contact:"تواصل" },
        auth:"Authenticator",
        heroKicker:"⚡ موثوق منذ 2021",
        heroTitle:"ROSHINE",
        heroSubbrand:"متجر حسابات Overwatch",
        heroIntro:"منذ 2021 يقدّم Roshine Account Store حسابات Overwatch مختارة بعناية مع خطوات شراء واضحة ودعم طويل المدى. خمس سنوات تشغيل مبنية على الثبات والوضوح والثقة.",
        ctaExplore:"عرض المخزون والشراء",
        servicesKicker:"✨ الخدمات",
        servicesTitle:"القائمة والطلب",
        servicesDesc:"تصفّح المخزون المباشر في Google Sheet ثم اطلب عبر Discord بإرسال ID أو لقطة شاشة.",
        servicesList:[
          "📄 افتح القائمة وفلتر حسب السعر/الرتبة/الهيئات.",
          "🧾 انسخ ID الحساب (أو التقط لقطة للصف).",
          "💬 انضم إلى Discord وأرسل ID/اللقطة للتأكيد.",
          "✅ بعد الدفع: استلام بيانات الدخول وحزمة التسليم الأمني."
        ],
        btnListings:"عرض المخزون (Google Sheet)",
        btnDiscord:"اطلب عبر Discord",

        warrantyKicker:"🛡️ الضمان",
        warrantyTitle:"الضمان والأمان",
        warrantyDesc:"نطاق واضح، عملية شفافة، حماية طويلة المدى.",
        warrantyCards:[
          { icon:"🛡️", badge:"أساسي", badgeType:"primary", title:"ضمان أمني مدى الحياة",
            desc:"في حال الاسترجاع من المالك السابق أو الاختراق أو الفقدان الدائم بسبب مشاكل المالك السابق: استبدال بقيمة مماثلة أو تعويض كامل." },
          { icon:"📂", badge:"إثبات", badgeType:"primary", title:"تسليم موثّق",
            desc:"حزمة أمان (حسب توفرها): وصول البريد الأصلي، Battle.net / Steam، دعم نقل Authenticator، رقم الحساب ومعلومات الاسترداد المتاحة." },
          { icon:"⚡", badge:"سريع", badgeType:"primary", title:"تسليم سريع",
            desc:"يتم تسليم معظم الطلبات خلال 5 دقائق بعد تأكيد الدفع (قد تتطلب الحسابات المميزة وقتاً إضافياً)." },
          { icon:"♾️", badge:"مجاني", badgeType:"primary", title:"دعم Unlock مجاني غير محدود (OW2)",
            desc:"للحسابات المؤهلة في Overwatch 2: مساعدة غير محدودة في مشاكل الفتح." },
          { icon:"🔄", badge:"مدفوع", badgeType:"paid", title:"خدمة تغيير المنطقة",
            desc:"خدمة مدفوعة اختيارياً. يتم التنفيذ فقط وفق سياسة المنصة." },
          { icon:"🚫", badge:"مدفوع", badgeType:"paid", title:"مساعدة استئناف الحظر",
            desc:"خدمة مدفوعة اختيارياً. نساعد في إعداد وتقديم الاستئناف دون ضمان القبول (قرار رسمي)." }
        ],

        faqKicker:"❓ الأسئلة",
        faqTitle:"الأسئلة الشائعة",
        faqDesc:"إجابات سريعة قبل الطلب.",
        faq1:"كم يتم التحديث؟ — Google Sheet هو المرجع ويتم تمييز الحسابات المباعة بسرعة.",
        faq2:"طرق الدفع؟ — بطاقة، PayPal، عملات رقمية وبعض بطاقات الهدايا. التأكيد على Discord.",
        faq3:"ما سرعة التسليم؟ — يتم تسليم معظم الطلبات خلال 5 دقائق بعد الدفع. قد تتطلب الحسابات المميزة وقتًا إضافيًا للتحضير.",
        faq4:"هل الحسابات آمنة؟ — جميع الحسابات من لاعبين حقيقيين، وليست ناتجة عن سكربتات أو إنتاج جماعي. سجل استخدام طبيعي بدون قيود.",
        faq5:"Authenticator؟ — أداة خاصة لـ Battle.net Authenticator. استخدم صفحة Authenticator، ألصق Private Key ثم انسخ الرمز إلى تطبيق Battle.net للتحقق.",
        btnStock:"عرض المخزون",
        btnOrder:"اطلب عبر Discord",

        contactKicker:"💬 تواصل",
        contactTitle:"تواصل معنا",
        contactDesc:"للرد الأسرع: Discord (أرسل ID أو لقطة). ويمكنك أيضًا مراسلتنا عبر البريد الإلكتروني.",
        btnContact:"Discord",
        btnEmail:"Email",
        footerNav: { home:"الرئيسية", services:"الخدمات", contact:"تواصل", privacy:"الخصوصية", terms:"الشروط" },

        footer1:"© 2021–2026 Roshine Account Store.",
        footer2:"جميع الحقوق محفوظة — المورّد الموثوق للحسابات."
      },

      zh: {
        metaTitle:"Roshine 账号商店",
        metaDesc:"高质量守望先锋账号，安全交付。",
        nav: { home:"主页", services:"服务", warranty:"质保", faq:"FAQ", contact:"联系" },
        auth:"Authenticator",
        heroKicker:"⚡ 自 2021 年稳定运营",
        heroTitle:"ROSHINE",
        heroSubbrand:"守望先锋账号商店",
        heroIntro:"Roshine Account Store 自 2021 年起持续提供精选 Overwatch 账号，流程清晰、交付稳定、支持长期售后。已稳定运行 5 年，专注于可靠性与买家信心。",
        ctaExplore:"查看库存并购买",
        servicesKicker:"✨ 服务",
        servicesTitle:"库存与下单",
        servicesDesc:"Google Sheet 实时展示库存；通过 Discord 发送账号 ID 或截图即可确认并购买。",
        servicesList:[
          "📄 打开列表，按价格/段位/皮肤筛选。",
          "🧾 复制账号 ID（或截图对应行）。",
          "💬 加入 Discord 发送 ID/截图，确认库存与总价。",
          "✅ 付款后交付登录信息与安全资料包。"
        ],
        btnListings:"查看库存（Google Sheet）",
        btnDiscord:"通过 Discord 下单",

        warrantyKicker:"🛡️ 质保",
        warrantyTitle:"质保与安全",
        warrantyDesc:"范围明确、流程透明、长期保障更可控。",
        warrantyCards:[
          { icon:"🛡️", badge:"核心", badgeType:"primary", title:"终身安全质保",
            desc:"若因原持有人找回/被盗/永久丢失等安全问题导致账号失效：提供等值替换或全额补偿。" },
          { icon:"📂", badge:"凭证", badgeType:"primary", title:"完整资料交接",
            desc:"安全资料包（按实际情况）：原邮箱权限、Battle.net / Steam、令牌转移协助、账号 ID 及可用恢复资料。" },
          { icon:"⚡", badge:"极速", badgeType:"primary", title:"极速交付",
            desc:"多数订单在确认付款后 5 分钟内完成交付（少数顶级账号可能需要额外整理时间）。" },
          { icon:"♾️", badge:"免费", badgeType:"primary", title:"OW2 免费解锁支持（不限次）",
            desc:"仅适用于守望先锋 2 账号：如出现解锁相关问题，提供不限次数协助。" },
          { icon:"🔄", badge:"付费", badgeType:"paid", title:"区服变更服务",
            desc:"可选付费服务。仅在平台政策允许范围内协助区服调整。" },
          { icon:"🚫", badge:"付费", badgeType:"paid", title:"解封申诉协助",
            desc:"可选付费服务。协助整理并提交申诉材料；最终结果以官方审核为准（不保证通过）。" }
        ],

        faqKicker:"❓ FAQ",
        faqTitle:"常见问题",
        faqDesc:"下单前最常问的几个点，直接看这里。",
        faq1:"列表多久更新？— 以 Google Sheet 为准，售出会尽快标记。",
        faq2:"支持什么支付方式？— 信用卡、PayPal、虚拟货币及部分礼品卡；可用性与手续费请 Discord 确认。",
        faq3:"多久交付？— 大部分订单在付款后 5 分钟内完成交付；少数顶级账号可能需要额外整理时间。",
        faq4:"账号是否安全？— 所有账号均来自真实玩家，并非脚本或工作室批量生产；均为正常使用记录，无任何限制。",
        faq5:"Authenticator 是什么？— 这是 Battle.net Authenticator 的私人工具。打开 Authenticator 页面，粘贴你收到的账号信息中的 Private Key，然后把验证码复制到 Battle.net App 完成验证。",
        btnStock:"查看库存",
        btnOrder:"Discord 下单",

        contactKicker:"💬 联系",
        contactTitle:"联系我们",
        contactDesc:"最快方式：Discord（发送账号 ID 或截图）。也可随时通过邮箱联系我们。",
        btnContact:"Discord",
        btnEmail:"Email",
        footerNav: { home:"主页", services:"服务", contact:"联系", privacy:"隐私", terms:"条款" },

        footer1:"© 2021–2026 Roshine Account Store。",
        footer2:"All rights reserved — your reliable account supplier."
      }
    };

    function detectLang(){
      const urlLang = new URLSearchParams(window.location.search).get("lang");
      if (urlLang && i18n[urlLang]) return urlLang;

      const saved = localStorage.getItem(LANG_KEY);
      if (saved && i18n[saved]) return saved;

      const nav = (navigator.language || "en").toLowerCase();
      if (nav.startsWith("zh")) return "zh";
      if (nav.startsWith("fr")) return "fr";
      if (nav.startsWith("de")) return "de";
      if (nav.startsWith("ar")) return "ar";
      return "en";
    }

    function setList(elId, items){
      const el = document.getElementById(elId);
      el.innerHTML = "";
      items.forEach(txt=>{
        const li = document.createElement("li");
        li.textContent = txt;
        el.appendChild(li);
      });
    }

    function setWarrantyCards(cards){
      const grid = document.getElementById("warrantyGrid");
      if (!grid) return;
      grid.innerHTML = "";

      cards.forEach(c=>{
        const card = document.createElement("div");
        card.className = "wcard";

        const top = document.createElement("div");
        top.className = "wtop";

        const titleWrap = document.createElement("div");
        titleWrap.className = "wtitle";

        const icon = document.createElement("span");
        icon.className = "wicon";
        icon.textContent = c.icon || "🛡️";

        const title = document.createElement("span");
        title.textContent = c.title || "";

        titleWrap.appendChild(icon);
        titleWrap.appendChild(title);

        const badge = document.createElement("span");
        badge.className = "wbadge" + (c.badgeType === "paid" ? " paid" : " primary");
        badge.textContent = c.badge || "";

        top.appendChild(titleWrap);
        top.appendChild(badge);

        const desc = document.createElement("p");
        desc.className = "wdesc";
        desc.textContent = c.desc || "";

        card.appendChild(top);
        card.appendChild(desc);
        grid.appendChild(card);
      });
    }

    function applyLang(lang){
      if (!i18n[lang]) lang = "en";
      const t = i18n[lang];

      document.documentElement.lang = lang;
      document.documentElement.dir  = (lang === "ar" ? "rtl" : "ltr");

      // SEO/meta
      if (t.metaTitle) document.title = t.metaTitle;
      const md = document.querySelector('meta[name="description"]');
      if (md && t.metaDesc) md.setAttribute("content", t.metaDesc);

      const sel = document.getElementById("langSelect");
      if (sel) sel.value = lang;

      document.getElementById("navHome").textContent = t.nav.home;
      document.getElementById("navServices").textContent = t.nav.services;
      document.getElementById("navWarranty").textContent = t.nav.warranty;
      document.getElementById("navFaq").textContent = t.nav.faq;
      document.getElementById("navContact").textContent = t.nav.contact;

      document.getElementById("authBtnText").textContent = t.auth;

      document.getElementById("heroKicker").textContent = t.heroKicker;
      document.getElementById("heroTitle").textContent = t.heroTitle;
      document.getElementById("heroSubbrand").textContent = t.heroSubbrand || "Overwatch Account Store";
      document.getElementById("heroIntro").textContent = t.heroIntro;
      document.getElementById("ctaExplore").textContent = t.ctaExplore;

      document.getElementById("servicesKicker").textContent = t.servicesKicker;
      document.getElementById("servicesTitle").textContent = t.servicesTitle;
      document.getElementById("servicesDesc").textContent = t.servicesDesc;
      setList("servicesList", t.servicesList);
      document.getElementById("btnListings").textContent = t.btnListings;
      document.getElementById("btnDiscord").textContent = t.btnDiscord;

      document.getElementById("warrantyKicker").textContent = t.warrantyKicker;
      document.getElementById("warrantyTitle").textContent = t.warrantyTitle;
      document.getElementById("warrantyDesc").textContent = t.warrantyDesc;
      setWarrantyCards(t.warrantyCards || []);

      document.getElementById("faqKicker").textContent = t.faqKicker;
      document.getElementById("faqTitle").textContent = t.faqTitle;
      document.getElementById("faqDesc").textContent = t.faqDesc;

      document.getElementById("faq1").textContent = t.faq1;
      document.getElementById("faq2").textContent = t.faq2;
      document.getElementById("faq3").textContent = t.faq3;
      document.getElementById("faq4").textContent = t.faq4;

      const faq5 = document.getElementById("faq5");
      faq5.textContent = "";
      if (lang === "en"){
        faq5.appendChild(document.createTextNode("Authenticator? — A private tool for Battle.net Authenticator. Use the "));
        const a = document.createElement("a");
        a.href = LINKS.auth;
        a.id = "faqAuthLink";
        a.style.fontWeight = "800";
        a.style.color = "rgba(231,239,255,.92)";
        a.style.borderBottom = "1px solid rgba(41,182,255,.28)";
        a.style.paddingBottom = "1px";
        a.textContent = "Authenticator";
        faq5.appendChild(a);
        faq5.appendChild(document.createTextNode(", paste your Private Key from the account info you received, then copy the code into the Battle.net app to verify."));
      } else {
        faq5.textContent = t.faq5;
      }

      document.getElementById("contactKicker").textContent = t.contactKicker;
      document.getElementById("contactTitle").textContent = t.contactTitle;
      document.getElementById("contactDesc").textContent = t.contactDesc;
      document.getElementById("btnContact").textContent = t.btnContact;
      document.getElementById("btnEmail").textContent = t.btnEmail;

      document.getElementById("footerLine1").textContent = t.footer1;
      document.getElementById("footerLine2").textContent = t.footer2;

      if (t.footerNav){
        document.getElementById("footHome").textContent = t.footerNav.home;
        document.getElementById("footServices").textContent = t.footerNav.services;
        document.getElementById("footContact").textContent = t.footerNav.contact;
        document.getElementById("footPrivacy").textContent = t.footerNav.privacy;
        document.getElementById("footTerms").textContent = t.footerNav.terms;
      }

      document.getElementById("btnListings").href = LINKS.sheet;
      document.getElementById("btnDiscord").href = LINKS.discord;
      document.getElementById("btnContact").href = LINKS.discord;
      document.getElementById("btnEmail").href = LINKS.email;
      document.getElementById("authBtn").href = LINKS.auth;
    }

    applyLang(detectLang());
    document.getElementById("langSelect").addEventListener("change", (e)=>{
      const lang = e.target.value;
      applyLang(lang);
      localStorage.setItem(LANG_KEY, lang);
    });
