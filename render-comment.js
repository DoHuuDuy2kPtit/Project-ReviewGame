const gameName = document.querySelector(".game-name").textContent;
const game = games.filter((obj) => obj.name === gameName);
const commentList = document.querySelector(".comment-list");
const commentCount = document.querySelector("h3.comments-title");
renderComment(game[0].feedback);
renderCount(game[0]);

const btn = document.querySelector(".btn-comment");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const commentArea = document.querySelector("textarea");
  const comment = commentArea.value;
  const author = "";
  const rate = 0;
  const feedback = new Comment(author, comment, rate);
  game[0].feedback.push(feedback);
  commentArea.value = "";
  console.log(feedback);
  renderComment(game[0].feedback);
  renderCount(game[0]);
});

function renderCount(obj) {
  commentCount.textContent = `${obj.feedback.length} ${
    obj.feedback.length <= 1 ? "comment" : "comments"
  } added`;
}
function renderComment(arr) {
  let commentArr = arr.map(
    (obj) => `<li class="account-comment">
    <div class="account-comment__avatar"></div>
    <div class="account-comment__aside">
      <div class="account-comment__meta">
        <div class="author">${obj.author}</div>
        <div class="date-comment">${obj.date}</div>
      </div>
      <div class="account-comment__content">
        <p>${obj.comment}</p>
      </div>
    </div>
  </li>`
  );
  commentList.innerHTML = commentArr.join("");
}
