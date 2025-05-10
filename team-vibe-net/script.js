const input = document.getElementById("input");
const count = document.getElementById("count");
const tweets = document.getElementById("tweets");

input.addEventListener("input", () => {
  count.textContent = (140 - input.value.length) + " characters left";
});

function format(text) {
  return text.replace(/(@\w+|#\w+)/g, match => `<span class="highlight">${match}</span>`);
}

function postTweet() {
  const text = input.value.trim();
  if (text === "") return;

  const tweetHTML = `
    <div class="tweet">
      <div>
        <img src="Amity Logo.Png" alt="Profile">
