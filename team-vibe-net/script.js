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
        <div class="info">
          <strong>Imran Badesab</strong>
          <span>@Amity Bangluru</span>
        </div>
      </div>
      <div class="text">${format(text)}</div>
      <div class="small">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · ${new Date().toDateString()}</div>
      <div class="small">${Math.floor(Math.random() * 100)} Retweets • ${Math.floor(Math.random() * 500)} Likes</div>
    </div>
  `;

  tweets.insertAdjacentHTML("afterbegin", tweetHTML);
  input.value = "";
  count.textContent = "140 characters left";
}
