const time = document.querySelector(".time-span");
const day = document.querySelector(".day-span");
time.textContent = new Date().toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "UTC",
});
day.textContent = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
});
