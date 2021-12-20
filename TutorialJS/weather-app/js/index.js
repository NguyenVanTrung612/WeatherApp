const APP_ID = `3f37c355123b5ebde1625f24562d66b3`;

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("change", (event) => {
  // Test input when user write and submit enter
  //   console.log(["searchInput"], event);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&units=metric`
  ).then(async (result) => {
    const data = await result.json();
    console.log(["search input"], data);
  });
});
