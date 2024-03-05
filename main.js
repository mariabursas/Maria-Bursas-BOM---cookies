const form = document.querySelector("#languageForm");
const options = document.querySelectorAll('input[type="radio"]');
const cookieAdded = "selectedCookie";
document.cookie = `${cookieAdded}=ro-RO`;
let allCookies = document.cookie;
console.log(allCookies);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let selectedLanguage;
  options.forEach((radio) => {
    if (radio.checked) {
      selectedLanguage = radio.value;
    }
  });
  document.cookie = `${cookieAdded}=${selectedLanguage}`;
  allCookies = document.cookie;
  console.log(allCookies);
});
