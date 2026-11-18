
(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const whatsappNumber = "966580617487";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = data.get("name") || "";
    const city = data.get("city") || "";
    const service = data.get("service") || "";
    const details = data.get("details") || "";

    const message =
      "السلام عليكم، أريد الاستفسار عن خدماتكم.\n\n" +
      "الاسم: " + name + "\n" +
      "المدينة: " + city + "\n" +
      "الخدمة المطلوبة: " + service + "\n" +
      "التفاصيل: " + details;

    const url =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(message);

    window.location.href = url;
  });
})();
      
