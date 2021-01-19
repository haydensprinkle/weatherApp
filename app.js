let timezoneEl = document.querySelector(".timezone");
let iconEl = document.querySelector(".icon");
let degreeEl = document.querySelector(".temp-degree");
let descriptionEl = document.querySelector(".temp-description");

window.addEventListener("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const apiKey = "f066b7d9c3302e06523b896f42e1a5df";
      const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { timezone } = data;
          const { temp } = data.current;
          const { description } = data.current.weather[0];
          timezoneEl.innerHTML = timezone.replace(/[_-]/g, " ");
          degreeEl.innerHTML = Math.floor(temp);
          descriptionEl.innerHTML = description;
        });
    });
  }
});
