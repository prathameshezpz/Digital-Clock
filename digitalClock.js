showTime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hr > 12) {
    hr = hr - 12;
  }
  if (hr == 0) {
    hr = 12;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let time = hr + ":" + min + ":" + sec;
  document.getElementById("showtime").innerText = time;
  document.getElementById("showtime").textContent = time;
  setInterval(showTime, 1000);
};
showTime();
