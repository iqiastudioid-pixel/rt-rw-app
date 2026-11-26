
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicationForm");
  const whatsapp = document.getElementById("whatsapp");
  const message = document.getElementById("formMessage");

  function normalizeWhatsApp(value) {
    let number = value.replace(/\D/g, "");

    if (number.startsWith("0")) {
      number = "62" + number.slice(1);
    } else if (number.startsWith("8")) {
      number = "62" + number;
    }

    return number;
  }

  whatsapp.addEventListener("blur", function () {
    if (whatsapp.value.trim() !== "") {
      whatsapp.value = normalizeWhatsApp(whatsapp.value);
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nik = document.getElementById("nik").value;
    const familyCard = document.getElementById("familyCard").value;
    const phone = normalizeWhatsApp(whatsapp.value);

    if (!/^\d{16}$/.test(nik)) {
      message.textContent = "NIK harus terdiri dari 16 digit.";
      message.className = "small text-center mt-3 text-danger";
      return;
    }

    if (!/^\d{16}$/.test(familyCard)) {
      message.textContent = "Nomor KK harus terdiri dari 16 digit.";
      message.className = "small text-center mt-3 text-danger";
      return;
    }

    if (!/^628\d{8,11}$/.test(phone)) {
      message.textContent = "Periksa kembali nomor WhatsApp.";
      message.className = "small text-center mt-3 text-danger";
      return;
    }

    message.textContent =
      "Validasi berhasil. Pengiriman belum diaktifkan.";
    message.className = "small text-center mt-3 text-success";
  });
});
