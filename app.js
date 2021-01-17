window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }
});

let timezoneEl = document.querySelector(".timezone");
let iconEl = document.querySelector(".icon");
let degreeEl = document.querySelector(".temperature-degree");
let descriptionEl = document.querySelector(".temperature-description");
