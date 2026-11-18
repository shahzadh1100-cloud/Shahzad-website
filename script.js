(() => {
  const form = document.getElementById("contact-form");
  const langButton = document.querySelector(".lang-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const year = document.getElementById("year");
  const whatsappNumber = "966580617487";

  const translations = {
    brandSub:["حجرٌ يدوم. تفاصيلٌ تُلهم.","Stone that lasts. Details that inspire."],
    navServices:["خدماتنا","Services"], navAbout:["من نحن","About"], navProjects:["أعمالنا","Our Work"],
    navContact:["تواصل معنا","Contact"], navQuote:["اطلب عرض سعر","Request a Quote"],
    heroEyebrow:["حِرفية سعودية • تشطيبات راقية","Saudi craftsmanship • refined finishes"],
    heroTitle:["نصنع من الحجر<br>مساحاتٍ <em>تُحكى.</em>","We shape stone into<br><em>spaces to remember.</em>"],
    heroText:["حلول متكاملة للبلاط والرخام والسلالم والمسابح، مع تنفيذ محكم يليق بالمساحات السكنية والتجارية في السعودية.","Complete tile, marble, staircase and pool solutions, carefully finished for residential and commercial spaces across Saudi Arabia."],
    heroCta:["اكتشف خدماتنا","Explore Services"], heroLink:["تعرّف على أعمالنا","View Our Work"],
    heroNote:["من التصوّر إلى أدقّ التفاصيل","From the first idea to the finest detail"],
    introKicker:["عن شاهزاد","About Shahzad"], introTitle:["المساحة الجميلة تبدأ<br>من <em>اختيارٍ صحيح.</em>","A beautiful space begins<br>with <em>the right choice.</em>"],
    introText:["نحوّل المواد الطبيعية إلى تفاصيل تدوم معك. نقدم أعمال تركيب وتشطيب للبلاط والرخام والسلالم والمسابح مع حرص على التناسق وجودة التنفيذ في كل مرحلة.","We turn natural materials into details made to last. We install and finish tiles, marble, stairs and pools, with care for consistency and quality at every stage."],
    servicesEyebrow:["ما نقدّمه","What We Do"], servicesTitle:["تفاصيل تصنع <em>الفرق.</em>","Details that make <em>the difference.</em>"],
    servicesNote:["من الأرضية إلى حافة المسبح، لكل مشروع حلّ يناسبه.","From the floor to the pool edge, every project gets the right solution."],
    tileTitle:["تركيب البلاط","Tile Installation"], tileText:["تجهيز وتنفيذ البلاط للعقارات، الفلل، الحمامات، والمطابخ بتشطيبات مرتبة ومتناسقة.","Careful tile installation for homes, villas, bathrooms and kitchens, with clean and consistent finishes."],
    marbleTitle:["أعمال الرخام","Marble Works"], marbleText:["اختيار المواد المناسبة وتركيب الرخام الطبيعي والصناعي بدقة عالية للمساحات السكنية والتجارية.","Selection and precise installation of natural and engineered marble for residential and commercial spaces."],
    stairsTitle:["السلالم والدرج","Stairs"], stairsText:["تشطيب السلالم بلمسات فاخرة ومواد متينة، مع دقة في القياسات والزوايا والحواف.","Elegant, durable stair finishes with careful measurements, angles and edges."],
    poolTitle:["المسابح","Swimming Pools"], poolText:["تركيب وتبليط المسابح مع الخيارات المناسبة للماء وللمساحات الخارجية، مع تفاصيل أنيقة وقوية.","Pool tiling and installation using suitable materials for water and outdoor spaces."],
    quoteText:["الجودة ليست تفصيلاً إضافياً؛ إنها أساس كل مساحة نصنعها.","Quality is not an extra detail; it is the foundation of every space we create."],
    quoteBy:["شاهزاد · أعمال الحجر والتشطيب","Shahzad · Stone and Finishing"], workEyebrow:["نهتم بما لا يُرى كما نُتقن ما يُرى","We care about what is unseen as much as what is seen"],
    workTitle:["تنفيذٌ مدروس.<br><em>نتيجةٌ تدوم.</em>","Thoughtful craft.<br><em>Lasting results.</em>"],
    workText:["نبدأ بفهم احتياجك وطبيعة المساحة، ثم نساعدك في اختيار الخامات والتشطيبات المناسبة. هدفنا تسليم عمل مرتب، متناسق، ومهيّأ للاستخدام اليومي.","We begin by understanding your needs and space, then help select suitable materials and finishes. Our goal is a neat, consistent result ready for everyday use."],
    workLink:["لنتحدث عن مشروعك","Let's discuss your project"], workLabel:["حرفية في كل زاوية","Craft in every corner"],
    processEyebrow:["خطوات واضحة","A Clear Process"], processTitle:["من الفكرة إلى <em>الإنجاز.</em>","From idea to <em>completion.</em>"],
    step1Title:["نستمع","Listen"], step1Text:["نستكشف رؤيتك، احتياجك، وموقع المشروع بدقة.","We learn about your vision, needs and project location."],
    step2Title:["نخطّط","Plan"], step2Text:["نراجع الخامات والتفاصيل ونحدّد جدول التنفيذ.","We review materials and details, then plan the work."],
    step3Title:["ننّفذ","Build"], step3Text:["ننفذ التركيب والتشطيب بعناية ودقة عالية.","We install and finish with care and precision."],
    step4Title:["نسلّم","Deliver"], step4Text:["نراجع الإنجاز معك ونتأكد من جودة التفاصيل النهائية.","We review the completed work with you and check the final details."],
    contactEyebrow:["مشروعك يبدأ بمحادثة","Your project starts with a conversation"],
    contactTitle:["جاهز نبدأ<br><em>من فكرتك؟</em>","Ready to start<br><em>with your idea?</em>"],
    contactText:["أرسل تفاصيل مشروعك وسنساعدك في تحديد الخطوة التالية بشكل عملي وسريع.","Send your project details and we'll help you decide on the next practical step."],
    contactLocation:["نخدم المشاريع في المملكة العربية السعودية","Serving projects across the Kingdom of Saudi Arabia"],
    nameLabel:["الاسم","Name"], cityLabel:["المدينة","City"], serviceLabel:["الخدمة المطلوبة","Service needed"],
    detailsLabel:["تفاصيل المشروع","Project details"], selectOption:["اختر الخدمة","Choose a service"],
    otherOption:["أخرى / أكثر من خدمة","Other / Multiple services"], sendButton:["إرسال عبر واتساب","Send via WhatsApp"],
    formNote:["سيتم فتح واتساب لإرسال رسالتك. لا نشارك معلوماتك.","WhatsApp will open to send your message. We do not share your information."],
    footerLine:["أعمال البلاط والرخام والسلالم والمسابح · المملكة العربية السعودية","Tile, marble, stair and pool works · Kingdom of Saudi Arabia"]
  };

  function setLanguage(lang) {
    const english = lang === "en";
    document.documentElement.lang = english ? "en" : "ar";
    document.documentElement.dir = english ? "ltr" : "rtl";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const pair = translations[el.dataset.i18n];
      if (pair) el.innerHTML = pair[english ? 1 : 0];
    });
    document.querySelectorAll("[data-placeholder-ar]").forEach(el => {
      el.placeholder = el.getAttribute(english ? "data-placeholder-en" : "data-placeholder-ar") || "—";
    });
    if (langButton) {
      langButton.textContent = english ? "عربي" : "EN";
      langButton.setAttribute("aria-label", english ? "التبديل إلى العربية" : "Switch to English");
    }
    document.title = english ? "Shahzad | Tile, Marble & Pool Works" : "شاهزاد | أعمال البلاط والرخام والمسابح";
    document.body.dataset.language = lang;
  }

  let currentLanguage = "ar";
  if (langButton) langButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ar" ? "en" : "ar";
    setLanguage(currentLanguage);
  });

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  if (year) year.textContent = new Date().getFullYear();

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const selectedService = form.querySelector('[name="service"]');
      const serviceName = selectedService && selectedService.selectedIndex >= 0
        ? selectedService.options[selectedService.selectedIndex].text
        : "";
      const labels = currentLanguage === "en"
        ? {name:"Name",city:"City",service:"Service needed",details:"Project details"}
        : {name:"الاسم",city:"المدينة",service:"الخدمة المطلوبة",details:"تفاصيل المشروع"};
      const message = currentLanguage === "en"
        ? "Hello, I would like to ask about your services.\n\n" +
          labels.name + ": " + (data.get("name") || "") + "\n" +
          labels.city + ": " + (data.get("city") || "") + "\n" +
          labels.service + ": " + serviceName + "\n" +
          labels.details + ": " + (data.get("details") || "")
        : "السلام عليكم، أريد الاستفسار عن خدماتكم.\n\n" +
          labels.name + ": " + (data.get("name") || "") + "\n" +
          labels.city + ": " + (data.get("city") || "") + "\n" +
          labels.service + ": " + serviceName + "\n" +
          labels.details + ": " + (data.get("details") || "");
      window.location.href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
    });
  }
  setLanguage("ar");
})();