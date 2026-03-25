const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeBtn && welcomeMessage) {
  welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent = "Welcome to the SCSU Computer Science Department mini site!";
  });
}