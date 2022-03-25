var input = document.querySelector("#url");

input.addEventListener("keyup", (key) => {
  if (key.keyCode === 13) {
    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);
  }
});
document.querySelector("#initiate").addEventListener("click", () => {
  if (!input.value.trim().length) return;
  window.location.assign(`/prox/?url=${btoa(input.value)}`);
});
function redirect(url) {
  var input = document.getElementById("url");
  var form = document.getElementById("initiate");
  input.value = url;
  form.click();
}
function shareurl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (typeof urlParams.get("link") !== undefined) {
    redirect(urlParams.get("link"));
  }
}
shareurl();
