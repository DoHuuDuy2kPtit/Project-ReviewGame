const listPosts = document.querySelector("section");
const games = [];
// renderMainPage(games);
// function renderMainPage(arr) {
//   let posts = arr.map((obj) => {
//     let ratingFeedback = obj.feedback.filter((obj) => obj.rate > 0);
//     let rating =
//       ratingFeedback.reduce((a, b) => a.rate + b.rate, 0) /
//       ratingFeedback.length;
//     return `<article class="rating__post-item">
//    <div class="inner">
//      <div class="post-review">
//        <a class="post-review__thumb" href ="${obj.link}">
//          <img
//            src="${obj.image}"
//            alt="game_1"
//          />
//        </a>
//        <div class="post-review__content">
//          <h2 class="post-review__content-title">
//            <a href="${obj.link}" target = "_self" class="post-review__content-link">
//              ${obj.title}
//            </a>
//          </h2>
//          <div class="post-review__content-meta">
//            <a href="${obj.link}" target = "_self" class="meta-type">
//              ${obj.type}
//            </a>
//            <span class="meta-date">${obj.date}</span>
//          </div>

//          <div class="post-review__content-entry">
//            ${obj.introduce}
//          </div>
//        </div>
//        <div class="post-review__rating-scores">
//          <div class="rating-scores p73">${rating}</div>
//        </div>
//      </div>
//      <hr />
//    </div>
//  </article>`;
//   });
//   listPosts.innerHTML = posts.join("");
// }
document.addEventListener("DOMContentLoaded", async function () {
  const db = firebase.firestore();
  let userRef = db.collection("Users");
  let gameRef = db.collection("Games");
  let commentRef = db.collection("Comments");
  await gameRef
    .get()
    .then((querySnap) => querySnap.forEach((doc) => games.push(doc.data())));
  console.log(games);

  let posts = games.map((obj) => {
    let ratingFeedback = obj.feedback.filter((obj) => obj.rate > 0);
    console.log(ratingFeedback);
    let ratingPoint = 0;
    for (let i = 0; i < ratingFeedback.length; i++) {
      ratingPoint += ratingFeedback[i].rate;
    }
    let rating = ratingPoint / ratingFeedback.length;
    // console.log(rating / ratingFeedback.length);
    return `<article class="rating__post-item">
     <div class="inner">
       <div class="post-review">
         <div class="post-review__thumb">
           <img
             width="286"
             height="160"
             src="${obj.image}"
             alt="game_1"
           />
         </div>
         <div class="post-review__content">
           <h2 class="post-review__content-title">
             <a href="${
               obj.link
             }" target = "_self" class="post-review__content-link">
               ${obj.title}
             </a>
           </h2>
           <div class="post-review__content-meta">
             <a href="${obj.link}" target = "_self" class="meta-type">
               ${obj.type}
             </a>
             <span class="meta-date">${obj.date}</span>
           </div>

           <div class="post-review__content-entry">
             ${obj.introduce}
           </div>
         </div>
         <div class="post-review__rating-scores">
           <div class="rating-scores p73">${rating.toFixed(1)}</div>
         </div>
       </div>
       <hr />
     </div>
   </article>`;
  });
  listPosts.innerHTML = posts.join("");
});
