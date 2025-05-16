// Selecting elements
const input = document.getElementById('postInput');
const charCount = document.getElementById('charCount');
const tweetList = document.getElementById('tweetList');

// Count characters on typing
input.addEventListener('input', () => {
  charCount.textContent = `${140 - input.value.length} characters left`;
});

// Format hashtags and mentions
function formatPostText(text) {
  return text
    .replace(/(@\w+)/g, '<span class="hashtag">$1</span>')
    .replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
}

// Post a tweet
function postTweet() {
  const content = input.value.trim();
  if (content === '') return;

  const tweet = document.createElement('div');
  tweet.className = 'tweet-container';
  tweet.innerHTML = `
    <div class="user-info">
      <img src="images/profile.png" alt="Profile" />
      <div>
        <h3>Best Heels</h3>
        <p>@WalkHappy</p>
      </div>
    </div>
    <div class="tweet-text">${formatPostText(content)}</div>
    <div class="tweet-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    <div class="tweet-stats">
      <div>${Math.floor(Math.random() * 100)} Retweets</div>
      <div>${Math.floor(Math.random() * 500)} Likes</div>
    </div>
  `;

  // Add the tweet to the top
  tweetList.prepend(tweet);
  input.value = '';
  charCount.textContent = '140 characters left';
}

