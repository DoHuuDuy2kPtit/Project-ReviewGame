// const gameName = document.querySelector(".game-name").textContent;
// const games = [];
// const commentList = document.querySelector(".comment-list");
// const commentCount = document.querySelector("h3.comments-title");

document.addEventListener("DOMContentLoaded", async () => {
  const gameName = document.querySelector(".game-name").textContent;
  const games = [];
  const commentList = document.querySelector(".comment-list");
  const commentCount = document.querySelector("h3.comments-title");

  const db = firebase.firestore();
  let userRef = db.collection("Users");
  let gameRef = db.collection("Games");
  let commentRef = db.collection("Comments");

  await gameRef
    .where("name", "==", gameName)
    .get()
    .then((querySnap) => querySnap.forEach((doc) => games.push(doc.data())));
  console.log(games);

  renderComment(games[0].feedback);
  renderCount(games[0]);

  const btn = document.querySelector("button.btn-comment");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const commentArea = document.getElementById("exampleFormControlTextarea1");
    const comment = commentArea.value;
    const author = currentUser.username;
    const rate = slider.value / 10;
    const newFeedback = new Comment(author, comment, rate);
    games[0].feedback.push(newFeedback);
    gameRef.doc(gameName).update({
      feedback: firebase.firestore.FieldValue.arrayUnion(
        Object.assign({}, newFeedback)
      ),
    });
    commentRef.add(Object.assign({}, newFeedback));
    commentArea.value = "";
    console.log(comment);
    renderComment(games[0].feedback);
    renderCount(games[0]);
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
});
