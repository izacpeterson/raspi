/** @format */

setInterval(() => {
  let timeDOM = document.querySelector("#time");
  let dateDOM = document.querySelector("#date");

  let now = new Date();
  let dayStr = "";
  let monthStr = "";
  let numAfter = "";
  switch (now.getDay()) {
    case 0:
      dayStr = "Sunday";
      break;
    case 1:
      dayStr = "Monday";
      break;
    case 2:
      dayStr = "Tuesday";
      break;
    case 3:
      dayStr = "Wednesday";
      break;
    case 4:
      dayStr = "Thursday";
      break;
    case 5:
      dayStr = "Friday";
      break;
    case 6:
      dayStr = "Saturday";
      break;
  }
  switch (now.getMonth()) {
    case 0:
      monthStr = "January";
      break;
    case 1:
      monthStr = "February";
      break;
    case 2:
      monthStr = "March";
      break;
    case 3:
      monthStr = "April";
      break;
    case 4:
      monthStr = "May";
      break;
    case 5:
      monthStr = "June";
      break;
    case 6:
      monthStr = "July";
      break;
    case 7:
      monthStr = "August";
      break;
    case 8:
      monthStr = "September";
      break;
    case 9:
      monthStr = "October";
      break;
    case 10:
      monthStr = "November";
      break;
    case 11:
      monthStr = "December";
      break;
  }
  switch (now.getDate()) {
    case (1, 21, 31):
      numAfter = "st";
      break;
    case (2, 22):
      numAfter = "nd";
      break;
    case (3, 23):
      numAfter = "rd";
      break;
    default:
      numAfter = "th";
      break;
  }
  timeDOM.innerHTML = `${now.toLocaleTimeString()}`;
  dateDOM.innerHTML = `${dayStr}, ${monthStr} ${now.getDate()}${numAfter}, ${now.getFullYear()}`;
}, 1000);
fetch("/api").then((rawdata) =>
  rawdata.json().then((data) => {
    console.log(data);
    document.getElementById(
      "sysInfo"
    ).innerHTML += `<li>Free Memory: ${data.freemem}</li>`;
    document.getElementById("sysInfo").innerHTML += `<li>OS: ${data.os}</li>`;
  })
);
