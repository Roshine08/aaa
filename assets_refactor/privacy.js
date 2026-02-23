const LINKS = {
        privacy: "https://roshine.love/privacy",
        terms: "https://roshine.love/terms"
      };
  
      const i18n = {
        en: {
          nav: { home:"Home", services:"Services", warranty:"Warranty", faq:"FAQ", contact:"Contact" },
          auth:"Authenticator",
          brandSub:"Overwatch Account Store",
          footer1:"© 2021–2026 Roshine Account Store.",
          footer2:"All rights reserved — your reliable account supplier.",
          footerNav: { home:"Home", services:"Services", contact:"Contact", privacy:"Privacy", terms:"Terms" },
          page: {}
        },
        fr: {
          nav: { home:"Accueil", services:"Services", warranty:"Garantie", faq:"FAQ", contact:"Contact" },
          auth:"Authentificateur",
          brandSub:"Boutique de comptes Overwatch",
          footer1:"© 2021–2026 Roshine Account Store.",
          footer2:"Tous droits réservés — votre fournisseur de comptes fiable.",
          footerNav: { home:"Accueil", services:"Services", contact:"Contact", privacy:"Confidentialité", terms:"Conditions" },
          page: {}
        },
        de: {
          nav: { home:"Home", services:"Services", warranty:"Garantie", faq:"FAQ", contact:"Kontakt" },
          auth:"Authentifikator",
          brandSub:"Overwatch-Account-Shop",
          footer1:"© 2021–2026 Roshine Account Store.",
          footer2:"Alle Rechte vorbehalten — Ihr zuverlässiger Account‑Anbieter.",
          footerNav: { home:"Home", services:"Services", contact:"Kontakt", privacy:"Datenschutz", terms:"AGB" },
          page: {}
        },
        ar: {
          nav: { home:"الرئيسية", services:"الخدمات", warranty:"الضمان", faq:"الأسئلة", contact:"تواصل" },
          auth:"المصادِق",
          brandSub:"متجر حسابات أوفرواتش",
          footer1:"© 2021–2026 Roshine Account Store.",
          footer2:"جميع الحقوق محفوظة — مزود حسابات موثوق.",
          footerNav: { home:"الرئيسية", services:"الخدمات", contact:"تواصل", privacy:"الخصوصية", terms:"الشروط" },
          page: {}
        },
        zh: {
          nav: { home:"主页", services:"服务", warranty:"保障", faq:"常见问题", contact:"联系" },
          auth:"验证器",
          brandSub:"守望先锋账号商店",
          footer1:"© 2021–2026 Roshine Account Store.",
          footer2:"版权所有 — 你可信赖的账号供应商。",
          footerNav: { home:"主页", services:"服务", contact:"联系", privacy:"隐私", terms:"条款" },
          page: {}
        }
      };
  
      // page copy
      i18n.en.page = {
        kicker: "PRIVACY",
        title: "Privacy Policy",
        intro: "Explains what information we collect, how we use it, and the choices you have when using roshine.love.",
        effective: "LAST UPDATED • 2026-02-23",
        bodyHtml: ``
      };
      i18n.fr.page = {
        kicker: "CONFIDENTIALITÉ",
        title: "Politique de confidentialité",
        intro: "Explique quelles informations nous collectons, comment nous les utilisons et les choix dont vous disposez en utilisant roshine.love.",
        effective: "MISE À JOUR • 2026-02-23",
        bodyHtml: ``
      };
      i18n.de.page = {
        kicker: "DATENSCHUTZ",
        title: "Datenschutzerklärung",
        intro: "Erläutert, welche Informationen wir erfassen, wie wir sie verwenden und welche Wahlmöglichkeiten Sie bei der Nutzung von roshine.love haben.",
        effective: "AKTUALISIERT • 2026-02-23",
        bodyHtml: ``
      };
      i18n.ar.page = {
        kicker: "الخصوصية",
        title: "سياسة الخصوصية",
        intro: "يشرح ما البيانات التي نجمعها وكيف نستخدمها والخيارات المتاحة لك عند استخدام roshine.love.",
        effective: "آخر تحديث • 2026-02-23",
        bodyHtml: ``
      };
      i18n.zh.page = {
        kicker: "隐私",
        title: "隐私政策",
        intro: "说明我们收集哪些信息、如何使用这些信息，以及你在使用 roshine.love 时拥有的选择。",
        effective: "最近更新 • 2026-02-23",
        bodyHtml: ``
      };
  
      const PRIVACY_BODIES = {
        en: `<h2>1. Scope</h2>
          <p>This Privacy Policy explains how ROSHINE. ("Roshine", "we", "us") handles information when you visit <a href="https://roshine.love/">roshine.love</a>, communicate with us (Discord/email), and purchase digital services such as Overwatch accounts.</p>

          <h2>2. Information we collect</h2>
          <ul>
            <li><b>Contact & messages</b>: email/Discord handle and message content you send for ordering, delivery, verification, and support.</li>
            <li><b>Order data</b>: product identifier (account ID), timestamps, delivery status, support history, and dispute notes.</li>
            <li><b>Technical data</b>: IP address, user agent, and basic access logs for security, fraud prevention, and debugging.</li>
            <li><b>Payment</b>: payments are processed by third‑party providers; we do not intentionally store full card details.</li>
          </ul>

          <h2>3. How we use information</h2>
          <ul>
            <li>Fulfill orders and provide after‑sales support.</li>
            <li>Verify identity/ownership when handling disputes or security issues.</li>
            <li>Detect and prevent fraud, abuse, or unauthorized access.</li>
            <li>Maintain the reliability, performance, and security of our website.</li>
            <li>Comply with legal obligations where applicable.</li>
          </ul>

          <h2>4. Sharing & disclosures</h2>
          <p>We may share the minimum necessary information with service providers (hosting/CDN, analytics, payment processors) to operate the service. We do not sell personal information for third‑party advertising.</p>

          <h2>5. Cookies & local storage</h2>
          <p>We may use cookies/local storage for essential functions such as language preferences and basic security. You can control cookies via your browser settings, but some features may not work properly.</p>

          <h2>6. Data retention</h2>
          <p>We keep order and support records for a reasonable period to handle delivery confirmation, after‑sales support, and disputes. Security logs are typically kept for shorter periods and then deleted or anonymized.</p>

          <h2>7. Your rights</h2>
          <ul>
            <li>You can request access, correction, or deletion where legally permitted.</li>
            <li>You can object to certain processing or withdraw consent where applicable.</li>
          </ul>

          <h2>8. Third‑party links</h2>
          <p>Our site may link to third‑party services (Discord, Google Sheets, payment providers). Their privacy practices are governed by their own policies.</p>

          <h2>9. Children</h2>
          <p>Our services are not intended for children. If you believe a child has provided us personal information, contact us to request deletion.</p>

          <h2>10. Contact</h2>
          <p>For privacy requests, email <a href="mailto:roshine_store@roshine.love">roshine_store@roshine.love</a> or contact us via the <a href="/#contact">Contact</a> section.</p>

          <div class="note"><b>Note:</b> This policy is provided for general informational purposes and does not constitute legal advice.</div>`,
        fr: `<h2>1. Portée</h2>
          <p>La présente Politique de confidentialité explique comment ROSHINE. ("Roshine", "nous") traite les informations lorsque vous visitez <a href="https://roshine.love/">roshine.love</a>, communiquez avec nous (Discord/e‑mail) et achetez des services numériques tels que des comptes Overwatch.</p>

          <h2>2. Informations collectées</h2>
          <ul>
            <li><b>Contact & messages</b> : e‑mail/identifiant Discord et contenu des messages envoyés pour la commande, la livraison, la vérification et l’assistance.</li>
            <li><b>Données de commande</b> : identifiant du produit (ID de compte), horodatages, statut de livraison, historique d’assistance et notes de litige.</li>
            <li><b>Données techniques</b> : adresse IP, agent utilisateur et journaux d’accès de base à des fins de sécurité, de prévention de la fraude et de diagnostic.</li>
            <li><b>Paiement</b> : les paiements sont traités par des prestataires tiers ; nous ne stockons pas volontairement l’intégralité des données de carte.</li>
          </ul>

          <h2>3. Utilisation des informations</h2>
          <ul>
            <li>Exécuter les commandes et fournir le support après‑vente.</li>
            <li>Vérifier l’identité/la propriété lors de litiges ou d’incidents de sécurité.</li>
            <li>Détecter et prévenir la fraude, les abus ou les accès non autorisés.</li>
            <li>Maintenir la fiabilité, les performances et la sécurité de notre site.</li>
            <li>Respecter les obligations légales applicables.</li>
          </ul>

          <h2>4. Partage & divulgations</h2>
          <p>Nous pouvons partager le minimum nécessaire d’informations avec des prestataires (hébergement/CDN, analyses, processeurs de paiement) afin d’exploiter le service. Nous ne vendons pas d’informations personnelles à des fins publicitaires tierces.</p>

          <h2>5. Cookies & stockage local</h2>
          <p>Nous pouvons utiliser des cookies/du stockage local pour des fonctions essentielles telles que les préférences de langue et la sécurité de base. Vous pouvez gérer les cookies via votre navigateur, mais certaines fonctionnalités peuvent ne pas fonctionner correctement.</p>

          <h2>6. Conservation des données</h2>
          <p>Nous conservons les enregistrements de commande et d’assistance pendant une durée raisonnable afin de gérer la confirmation de livraison, l’après‑vente et les litiges. Les journaux de sécurité sont généralement conservés plus brièvement puis supprimés ou anonymisés.</p>

          <h2>7. Vos droits</h2>
          <ul>
            <li>Vous pouvez demander l’accès, la rectification ou la suppression lorsque la loi le permet.</li>
            <li>Vous pouvez vous opposer à certains traitements ou retirer votre consentement le cas échéant.</li>
          </ul>

          <h2>8. Liens tiers</h2>
          <p>Notre site peut contenir des liens vers des services tiers (Discord, Google Sheets, prestataires de paiement). Leurs pratiques sont régies par leurs propres politiques.</p>

          <h2>9. Mineurs</h2>
          <p>Nos services ne sont pas destinés aux mineurs. Si vous pensez qu’un mineur nous a fourni des informations personnelles, contactez‑nous pour demander la suppression.</p>

          <h2>10. Contact</h2>
          <p>Pour toute demande relative à la confidentialité, écrivez à <a href="mailto:roshine_store@roshine.love">roshine_store@roshine.love</a> ou contactez‑nous via la section <a href="/#contact">Contact</a>.</p>

          <div class="note"><b>Note :</b> Ce document est fourni à titre informatif général et ne constitue pas un conseil juridique.</div>`,
        de: `<h2>1. Geltungsbereich</h2>
          <p>Diese Datenschutzerklärung beschreibt, wie ROSHINE. ("Roshine", "wir") Informationen verarbeitet, wenn Sie <a href="https://roshine.love/">roshine.love</a> besuchen, mit uns (Discord/E‑Mail) kommunizieren und digitale Services wie Overwatch‑Accounts kaufen.</p>

          <h2>2. Welche Daten wir erheben</h2>
          <ul>
            <li><b>Kontakt & Nachrichten</b>: E‑Mail/Discord‑Handle und Nachrichteninhalte, die Sie für Bestellung, Lieferung, Verifizierung und Support senden.</li>
            <li><b>Bestelldaten</b>: Produktkennung (Account‑ID), Zeitstempel, Lieferstatus, Support‑Historie und Streitfall‑Notizen.</li>
            <li><b>Technische Daten</b>: IP‑Adresse, User‑Agent und grundlegende Zugriffslogs zur Sicherheit, Betrugsprävention und Fehleranalyse.</li>
            <li><b>Zahlung</b>: Zahlungen werden über Drittanbieter abgewickelt; wir speichern nicht absichtlich vollständige Kartendaten.</li>
          </ul>

          <h2>3. Wie wir Daten verwenden</h2>
          <ul>
            <li>Bestellungen erfüllen und After‑Sales‑Support leisten.</li>
            <li>Identität/Eigentum bei Streitfällen oder Sicherheitsvorfällen prüfen.</li>
            <li>Betrug, Missbrauch und unbefugten Zugriff erkennen und verhindern.</li>
            <li>Zuverlässigkeit, Performance und Sicherheit unserer Website gewährleisten.</li>
            <li>Ggf. gesetzlichen Pflichten nachkommen.</li>
          </ul>

          <h2>4. Weitergabe</h2>
          <p>Wir können die minimal erforderlichen Informationen mit Dienstleistern (Hosting/CDN, Analytik, Zahlungsabwickler) teilen, um den Service zu betreiben. Wir verkaufen keine personenbezogenen Daten für Werbung Dritter.</p>

          <h2>5. Cookies & Local Storage</h2>
          <p>Wir können Cookies/Local Storage für wesentliche Funktionen wie Sprachpräferenzen und Basissicherheit verwenden. Sie können Cookies in Ihrem Browser steuern, jedoch funktionieren einige Features dann ggf. nicht korrekt.</p>

          <h2>6. Aufbewahrung</h2>
          <p>Wir bewahren Bestell‑ und Supportdaten für einen angemessenen Zeitraum auf, um Lieferbestätigung, Support und Streitfälle zu bearbeiten. Sicherheitslogs werden typischerweise kürzer gespeichert und anschließend gelöscht oder anonymisiert.</p>

          <h2>7. Ihre Rechte</h2>
          <ul>
            <li>Sie können – sofern gesetzlich zulässig – Auskunft, Berichtigung oder Löschung verlangen.</li>
            <li>Sie können bestimmten Verarbeitungen widersprechen oder Einwilligungen widerrufen, sofern anwendbar.</li>
          </ul>

          <h2>8. Links zu Dritten</h2>
          <p>Unsere Website kann auf Dienste Dritter verlinken (Discord, Google Sheets, Zahlungsanbieter). Deren Datenschutzpraktiken richten sich nach deren eigenen Richtlinien.</p>

          <h2>9. Kinder</h2>
          <p>Unsere Services richten sich nicht an Kinder. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten übermittelt hat, kontaktieren Sie uns zur Löschung.</p>

          <h2>10. Kontakt</h2>
          <p>Für Datenschutzanfragen: <a href="mailto:roshine_store@roshine.love">roshine_store@roshine.love</a> oder über die Sektion <a href="/#contact">Kontakt</a>.</p>

          <div class="note"><b>Hinweis:</b> Diese Erklärung dient allgemeinen Informationszwecken und stellt keine Rechtsberatung dar.</div>`,
        ar: `<h2>1. النطاق</h2>
          <p>توضح سياسة الخصوصية هذه كيف تتعامل ROSHINE. ("Roshine" أو "نحن") مع المعلومات عند زيارتك <a href="https://roshine.love/">roshine.love</a>، والتواصل معنا (Discord/البريد الإلكتروني)، وشراء خدمات رقمية مثل حسابات Overwatch.</p>

          <h2>2. المعلومات التي نجمعها</h2>
          <ul>
            <li><b>معلومات الاتصال والرسائل</b>: البريد الإلكتروني/معرّف Discord ومحتوى الرسائل التي ترسلها للطلب والتسليم والتحقق والدعم.</li>
            <li><b>بيانات الطلب</b>: معرّف المنتج (ID الحساب)، الطوابع الزمنية، حالة التسليم، سجل الدعم، وملاحظات النزاعات.</li>
            <li><b>بيانات تقنية</b>: عنوان IP ووكيل المستخدم وسجلات وصول أساسية لأغراض الأمان ومنع الاحتيال واستكشاف الأخطاء.</li>
            <li><b>الدفع</b>: تتم معالجة المدفوعات عبر مزودي خدمات خارجيين؛ ولا نقوم عمداً بتخزين بيانات البطاقة كاملة.</li>
          </ul>

          <h2>3. كيف نستخدم المعلومات</h2>
          <ul>
            <li>تنفيذ الطلبات وتقديم دعم ما بعد البيع.</li>
            <li>التحقق من الهوية/الملكية عند التعامل مع النزاعات أو قضايا الأمان.</li>
            <li>كشف الاحتيال أو إساءة الاستخدام أو الوصول غير المصرح به ومنعه.</li>
            <li>الحفاظ على موثوقية وأداء وأمان موقعنا.</li>
            <li>الامتثال للالتزامات القانونية عند الاقتضاء.</li>
          </ul>

          <h2>4. المشاركة والإفصاح</h2>
          <p>قد نشارك الحد الأدنى اللازم من المعلومات مع مزودي الخدمة (الاستضافة/CDN، التحليلات، معالجي الدفع) لتشغيل الخدمة. نحن لا نبيع المعلومات الشخصية لأغراض إعلانات الطرف الثالث.</p>

          <h2>5. ملفات تعريف الارتباط والتخزين المحلي</h2>
          <p>قد نستخدم ملفات تعريف الارتباط/التخزين المحلي لوظائف أساسية مثل تفضيلات اللغة والأمان الأساسي. يمكنك التحكم بها عبر إعدادات المتصفح، لكن قد لا تعمل بعض الميزات بشكل صحيح.</p>

          <h2>6. الاحتفاظ بالبيانات</h2>
          <p>نحتفظ بسجلات الطلب والدعم لفترة معقولة لمعالجة تأكيد التسليم ودعم ما بعد البيع والنزاعات. عادةً ما تُحفظ سجلات الأمان لفترات أقصر ثم تُحذف أو تُجهّل.</p>

          <h2>7. حقوقك</h2>
          <ul>
            <li>يمكنك طلب الوصول أو التصحيح أو الحذف حيثما يسمح القانون.</li>
            <li>يمكنك الاعتراض على بعض المعالجات أو سحب الموافقة عند الاقتضاء.</li>
          </ul>

          <h2>8. روابط الجهات الخارجية</h2>
          <p>قد يحتوي موقعنا على روابط لخدمات خارجية (Discord، Google Sheets، مزودي الدفع). تخضع ممارساتهم لسياساتهم الخاصة.</p>

          <h2>9. الأطفال</h2>
          <p>خدماتنا غير مخصصة للأطفال. إذا كنت تعتقد أن طفلاً قد قدّم لنا معلومات شخصية، تواصل معنا لطلب الحذف.</p>

          <h2>10. التواصل</h2>
          <p>لطلبات الخصوصية، راسل <a href="mailto:roshine_store@roshine.love">roshine_store@roshine.love</a> أو تواصل عبر قسم <a href="/#contact">التواصل</a>.</p>

          <div class="note"><b>ملاحظة:</b> هذه السياسة لأغراض معلوماتية عامة ولا تُعد استشارة قانونية.</div>`,
        zh: `<h2>1. 适用范围</h2>
          <p>本隐私政策说明 ROSHINE.（“Roshine / 我们”）在你访问 <a href="https://roshine.love/">roshine.love</a>、通过 Discord/邮箱与我们沟通、以及购买守望先锋账号等数字服务时，如何收集与处理信息。</p>

          <h2>2. 我们收集哪些信息</h2>
          <ul>
            <li><b>联系信息与沟通内容</b>：你提供的邮箱/Discord 账号以及消息内容，用于下单、交付、验证与售后支持。</li>
            <li><b>订单信息</b>：商品标识（账号 ID）、时间戳、交付状态、售后记录、争议处理备注等。</li>
            <li><b>技术与日志信息</b>：IP、浏览器标识（UA）、访问日志等，用于安全防护、反欺诈与排障。</li>
            <li><b>支付信息</b>：由第三方支付平台处理；我们不会主动保存完整的银行卡号等敏感信息。</li>
          </ul>

          <h2>3. 我们如何使用信息</h2>
          <ul>
            <li>完成订单交付，并提供售后支持。</li>
            <li>在争议/安全事件中进行必要的身份或归属验证。</li>
            <li>防止欺诈、滥用与未授权访问，保障交易与账号安全。</li>
            <li>维护网站稳定性、安全性与性能。</li>
            <li>在适用情况下遵守法律义务。</li>
          </ul>

          <h2>4. 信息共享</h2>
          <p>为提供服务，我们可能与托管/CDN、统计分析、支付处理等第三方服务商共享“最小必要”信息。我们不会出售你的个人信息用于第三方广告营销。</p>

          <h2>5. Cookies 与本地存储</h2>
          <p>我们可能使用 Cookies/本地存储用于语言偏好与基础安全功能。你可在浏览器中管理 Cookies，但禁用后可能导致部分功能不可用。</p>

          <h2>6. 信息保存期限</h2>
          <p>我们会在合理期限内保留订单与售后记录，用于交付确认、售后支持与争议处理；安全日志通常保存更短周期，之后删除或匿名化。</p>

          <h2>7. 你的权利</h2>
          <ul>
            <li>在法律允许范围内，你可请求访问、更正或删除信息。</li>
            <li>在适用情况下，你可对特定处理提出异议或撤回同意。</li>
          </ul>

          <h2>8. 第三方链接</h2>
          <p>我们可能链接到第三方服务（Discord、Google 表格、支付平台等）。其隐私规则以其自身政策为准。</p>

          <h2>9. 未成年人</h2>
          <p>我们的服务不面向未成年人。如你认为未成年人向我们提供了个人信息，请联系删除。</p>

          <h2>10. 联系方式</h2>
          <p>隐私相关请求请邮件联系 <a href="mailto:roshine_store@roshine.love">roshine_store@roshine.love</a>，或通过 <a href="/#contact">联系页面</a> 与我们沟通。</p>

          <div class="note"><b>提示：</b>本页面内容仅供一般性信息参考，不构成法律意见。</div>`
      };
  
      const TERMS_BODIES = {
        en: `
          <h2>1. Refunds</h2>
          <p><b>Digital/virtual assets are non‑refundable</b> except:</p>
          <ul>
            <li><b>Incorrect credentials on first login</b> (wrong provided info prevents first login).</li>
            <li><b>Abnormal account status at delivery</b> that prevents normal use.</li>
          </ul>
          <h2>2. Delivery acceptance</h2>
          <ul>
            <li>After receiving the account, the buyer must verify and confirm the order within <b>30 minutes</b>.</li>
            <li>If special circumstances prevent timely verification, the buyer must notify us promptly; otherwise, it may be treated as accepted.</li>
          </ul>
          <h2>3. Disputes & liability</h2>
          <p>After delivery and buyer confirmation with no issues, <b>all subsequent account risks and responsibilities belong to the buyer</b>.</p>
          <h2>4. Account custody</h2>
          <ul>
            <li>After confirmation, the buyer must safeguard the account and bears loss risks (leaks, sharing, mishandling), <b>except</b> where the account is recovered by the previous owner.</li>
          </ul>
          <h2>5. Risk disclosure (Blizzard)</h2>
          <p>Account trading is <b>not officially supported by Blizzard</b>. There is a small chance of platform risk controls detecting unusual login environment (e.g., location/device/IP changes), which may cause an <b>account‑level restriction</b> (not an in‑game ban).</p>
          <ul>
            <li>To reduce risk: use the <b>same device + stable IP</b> for about <b>7 days</b> before changing account details.</li>
          </ul>
        `,
        fr: `
          <h2>1. Remboursements</h2>
          <p><b>Les biens numériques/virtuels ne sont pas remboursables</b> sauf :</p>
          <ul>
            <li><b>Identifiants incorrects lors de la première connexion</b> (les informations fournies sont erronées et empêchent la première connexion).</li>
            <li><b>Statut de compte anormal à la livraison</b> empêchant une utilisation normale.</li>
          </ul>
          <h2>2. Acceptation de la livraison</h2>
          <ul>
            <li>Après réception du compte, l’acheteur doit vérifier et confirmer la commande sous <b>30 minutes</b>.</li>
            <li>En cas de circonstances particulières empêchant une vérification à temps, l’acheteur doit nous prévenir rapidement ; sinon, la livraison peut être considérée comme acceptée.</li>
          </ul>
          <h2>3. Litiges & responsabilité</h2>
          <p>Après livraison et confirmation par l’acheteur sans problème, <b>tous les risques et responsabilités ultérieurs liés au compte incombent à l’acheteur</b>.</p>
          <h2>4. Garde du compte</h2>
          <ul>
            <li>Après confirmation, l’acheteur doit protéger le compte et assume les risques de perte (fuite, partage, mauvaise manipulation), <b>sauf</b> si le compte est récupéré par l’ancien propriétaire.</li>
          </ul>
          <h2>5. Information sur les risques (Blizzard)</h2>
          <p>Le commerce de comptes <b>n’est pas officiellement pris en charge par Blizzard</b>. Il existe une faible probabilité que des contrôles de risque détectent un environnement de connexion inhabituel (ex. changement de lieu/appareil/IP), ce qui peut entraîner une <b>restriction au niveau du compte</b> (et non un bannissement en jeu).</p>
          <ul>
            <li>Pour réduire le risque : utilisez le <b>même appareil + une IP stable</b> pendant environ <b>7 jours</b> avant de modifier les informations du compte.</li>
          </ul>
        `,
        de: `
          <h2>1. Rückerstattungen</h2>
          <p><b>Digitale/virtuelle Güter sind grundsätzlich nicht erstattungsfähig</b>, außer:</p>
          <ul>
            <li><b>Falsche Zugangsdaten beim ersten Login</b> (bereitgestellte Informationen sind falsch und verhindern den ersten Login).</li>
            <li><b>Abnormaler Kontostatus bei Lieferung</b>, der eine normale Nutzung verhindert.</li>
          </ul>
          <h2>2. Lieferabnahme</h2>
          <ul>
            <li>Nach Erhalt des Accounts muss der Käufer die Bestellung innerhalb von <b>30 Minuten</b> prüfen und bestätigen.</li>
            <li>Wenn besondere Umstände eine rechtzeitige Prüfung verhindern, muss der Käufer uns umgehend informieren; andernfalls kann dies als akzeptiert gelten.</li>
          </ul>
          <h2>3. Streitfälle & Haftung</h2>
          <p>Nach Lieferung und Bestätigung ohne Beanstandung liegen <b>alle späteren Risiken und Verantwortlichkeiten beim Käufer</b>.</p>
          <h2>4. Verwahrung des Accounts</h2>
          <ul>
            <li>Nach Bestätigung muss der Käufer den Account schützen und trägt Verlustrisiken (Leaks, Teilen, Fehlbedienung), <b>außer</b> wenn der Account vom Vorbesitzer zurückgeholt wird.</li>
          </ul>
          <h2>5. Risikohinweis (Blizzard)</h2>
          <p>Account‑Handel wird <b>von Blizzard nicht offiziell unterstützt</b>. Es besteht eine geringe Wahrscheinlichkeit, dass Risk‑Controls eine ungewöhnliche Login‑Umgebung erkennen (z. B. Standort/Gerät/IP‑Wechsel), was zu einer <b>kontoweiten Einschränkung</b> führen kann (kein In‑Game‑Ban).</p>
          <ul>
            <li>Risikominimierung: Nutzen Sie <b>das gleiche Gerät + eine stabile IP</b> für ca. <b>7 Tage</b>, bevor Sie Kontodaten ändern.</li>
          </ul>
        `,
        ar: `
          <h2>1. الاسترداد</h2>
          <p><b>الأصول الرقمية/الافتراضية غير قابلة للاسترداد</b> باستثناء:</p>
          <ul>
            <li><b>بيانات دخول غير صحيحة عند أول تسجيل دخول</b> (المعلومات المقدمة خاطئة وتمنع أول تسجيل دخول).</li>
            <li><b>حالة حساب غير طبيعية عند التسليم</b> تمنع الاستخدام الطبيعي.</li>
          </ul>
          <h2>2. قبول التسليم</h2>
          <ul>
            <li>بعد استلام الحساب، يجب على المشتري التحقق من الطلب وتأكيده خلال <b>30 دقيقة</b>.</li>
            <li>إذا منعت ظروف خاصة التحقق في الوقت المناسب، يجب على المشتري إخطارنا سريعاً؛ وإلا قد يُعتبر ذلك قبولاً.</li>
          </ul>
          <h2>3. النزاعات والمسؤولية</h2>
          <p>بعد التسليم وتأكيد المشتري دون مشاكل، <b>تقع جميع المخاطر والمسؤوليات اللاحقة على المشتري</b>.</p>
          <h2>4. حفظ الحساب</h2>
          <ul>
            <li>بعد التأكيد، يجب على المشتري حماية الحساب ويتحمل مخاطر الفقدان (تسريب، مشاركة، سوء استخدام)، <b>إلا</b> إذا تم استرداد الحساب من المالك السابق.</li>
          </ul>
          <h2>5. الإفصاح عن المخاطر (Blizzard)</h2>
          <p>تداول الحسابات <b>غير مدعوم رسمياً من Blizzard</b>. توجد احتمالية صغيرة أن تكتشف أنظمة التحكم بالمخاطر بيئة تسجيل دخول غير معتادة (مثل تغيير الموقع/الجهاز/IP)، ما قد يؤدي إلى <b>تقييد على مستوى الحساب</b> (وليس حظراً داخل اللعبة).</p>
          <ul>
            <li>لتقليل المخاطر: استخدم <b>نفس الجهاز + IP ثابت</b> لمدة حوالي <b>7 أيام</b> قبل تغيير بيانات الحساب.</li>
          </ul>
        `,
        zh: `
          <h2>1. 退款政策</h2>
          <p><b>虚拟资产原则上不接受退款</b>，仅以下情况除外：</p>
          <ul>
            <li><b>买家首次登录时账号信息有误</b>：因我们交付的信息错误导致无法完成首次登录。</li>
            <li><b>交付时账号状态异常无法正常使用</b>：交付时即存在影响正常使用的异常状态。</li>
          </ul>
          <h2>2. 交付验收</h2>
          <ul>
            <li>买家收到账号后，应在 <b>30 分钟</b>内完成验收并确认订单。</li>
            <li>如有特殊情况无法按时验收，请<b>及时告知并沟通</b>；否则可能视为已完成验收。</li>
          </ul>
          <h2>3. 争议处理与责任</h2>
          <p>账号在交付并由买家确认无异常后，<b>后续任何账号风险责任由买家承担</b>。</p>
          <h2>4. 账号归属与保管</h2>
          <ul>
            <li>买家确认账号无误后，应妥善保管账号并自行承担丢失风险（泄露、共享、误操作等），<b>除非</b>账号被前号主找回。</li>
          </ul>
          <h2>5. 风险提示（暴雪）</h2>
          <p>账号交易<b>不被暴雪官方支持</b>。存在极小概率触发平台风控（如异地/设备/IP 变化），导致<b>整个账号</b>被限制（非游戏内封禁）。</p>
          <ul>
            <li>降低风险建议：保持<b>同一设备 + 稳定 IP</b>使用约 <b>7 天</b>后，再逐步更改信息与安全设置。</li>
          </ul>
        `
      };
  
      function injectBodies(pageKey){
        for (const lang of Object.keys(i18n)){
          if (pageKey === "privacy") {
            i18n[lang].page.bodyHtml = (PRIVACY_BODIES[lang] || PRIVACY_BODIES.en);
          } else {
            i18n[lang].page.bodyHtml = (TERMS_BODIES[lang] || TERMS_BODIES.en);
          }
        }
      }
  
      function setText(id, value){ const el = document.getElementById(id); if (el) el.textContent = value; }
      function setHTML(id, value){ const el = document.getElementById(id); if (el) el.innerHTML = value; }
  
      function slugify(text){
        return String(text).toLowerCase()
          .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .slice(0, 80) || "section";
      }
  
      function buildTOC(){
        const root = document.getElementById("policyBody");
        const toc = document.getElementById("toc");
        if (!root || !toc) return;
  
        const headings = Array.from(root.querySelectorAll("h2, h3"));
        if (!headings.length){ toc.innerHTML = ""; return; }
  
        // Assign IDs if missing
        const used = new Set();
        headings.forEach(h=>{
          if (!h.id){
            let id = slugify(h.textContent);
            let base = id, i = 2;
            while (used.has(id) || document.getElementById(id)) { id = base + "-" + i++; }
            h.id = id;
          }
          used.add(h.id);
        });
  
        toc.innerHTML = headings.map(h=>{
          const cls = h.tagName === "H3" ? "sub" : "";
          return `<a href="#${h.id}" class="${cls}" data-id="${h.id}">${h.textContent}</a>`;
        }).join("");
  
        // Active section highlight on scroll
        const links = Array.from(toc.querySelectorAll("a[data-id]"));
        const map = new Map(links.map(a=>[a.getAttribute("data-id"), a]));
  
        const obs = new IntersectionObserver((entries)=>{
          entries.forEach(e=>{
            const id = e.target.id;
            const a = map.get(id);
            if (!a) return;
            if (e.isIntersecting){
              links.forEach(x=>x.classList.remove("active"));
              a.classList.add("active");
            }
          });
        }, { rootMargin: "-30% 0px -65% 0px", threshold: [0, 1] });
  
        headings.filter(h=>h.tagName==="H2").forEach(h=>obs.observe(h));
      }
  
  
      function applyLang(lang){
        if (!i18n[lang]) lang = "en";
        const t = i18n[lang];
  
        document.documentElement.lang = lang;
        document.documentElement.dir  = (lang === "ar" ? "rtl" : "ltr");

        const addLangParam = (url)=>{
          try{
            const u = new URL(url, window.location.origin);
            u.searchParams.set("lang", lang);
            return u.toString();
          }catch(_){
            // Fallback for relative URLs
            return (url.includes("?") ? (url + "&lang=" + encodeURIComponent(lang)) : (url + "?lang=" + encodeURIComponent(lang)));
          }
        };


        // SEO/meta
        if (t.page && t.page.title) document.title = (t.page.title + " — Roshine Account Store");
        const md = document.querySelector('meta[name="description"]');
        if (md && t.page && t.page.metaDesc) md.setAttribute("content", t.page.metaDesc);

  
        const sel = document.getElementById("langSelect");
        if (sel) sel.value = lang;
  
        setText("navHome", t.nav.home);
        setText("navServices", t.nav.services);
        setText("navWarranty", t.nav.warranty);
        setText("navFaq", t.nav.faq);
        setText("navContact", t.nav.contact);
  
        setText("authBtnText", t.auth);
  
        setText("footerLine1", t.footer1);
        setText("footerLine2", t.footer2);
  
        if (t.footerNav){
          setText("footHome", t.footerNav.home);
          setText("footServices", t.footerNav.services);
          setText("footContact", t.footerNav.contact);
          setText("footPrivacy", t.footerNav.privacy);
          setText("footTerms", t.footerNav.terms);
        }
  
        setText("pageKicker", t.page.kicker);
        setText("pageTitle", t.page.title);
        setText("pageIntro", t.page.intro);
        setText("effectiveDate", t.page.effective);
        setHTML("policyBody", t.page.bodyHtml);
        buildTOC();
  
        setText("tocTitle", (t.page.tocTitle || (lang==="zh"?"本页目录":"On this page")));
        setText("tocTop", (t.page.tocTop || (lang==="zh"?"返回顶部":"Back to top")));
  
        const cp = document.getElementById("chipPrivacy");
        const ct = document.getElementById("chipTerms");
        const fp = document.getElementById("footPrivacy");
        const ft = document.getElementById("footTerms");

        const privacyUrl = addLangParam(LINKS.privacy);
        const termsUrl   = addLangParam(LINKS.terms);

        if (cp) cp.href = privacyUrl;
        if (ct) ct.href = termsUrl;
        if (fp) fp.href = privacyUrl;
        if (ft) ft.href = termsUrl;

        const current = "privacy";
        if (current === "privacy" && cp) cp.classList.add("chipActive");
        if (current === "terms" && ct) ct.classList.add("chipActive");
      }
  
      injectBodies("privacy");
      const urlLang = new URLSearchParams(window.location.search).get("lang");
      const saved = (urlLang && i18n[urlLang] ? urlLang : (localStorage.getItem("roshine_lang") || "en"));
      applyLang(saved);
  
      const sel = document.getElementById("langSelect");
      if (sel){
        sel.addEventListener("change", (e)=>{
          const v = e.target.value;
          localStorage.setItem("roshine_lang", v);
          applyLang(v);
        });
      }
