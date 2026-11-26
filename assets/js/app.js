
document.addEventListener("DOMContentLoaded", function () {

  console.log("RT/RW App initialized");

  const button = document.getElementById("testButton");
  const result = document.getElementById("testResult");

  button.addEventListener("click", function () {
    result.textContent = "JavaScript berhasil berjalan!";
  });

});
