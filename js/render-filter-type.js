let game_online = document.querySelectorAll(".game-online");

let pc_console = document.querySelectorAll(".pc-console");

let game_mobile = document.querySelectorAll(".game-mobile");

game_online.forEach((obj) =>
  obj.addEventListener("click", (e) => {
    e.preventDefault();
    let typeArr = games.filter((obj) => obj.type == "Game Online");
    let posts = typeArr.map((obj) => {
      let ratingFeedback = obj.feedback.filter((obj) => obj.rate > 0);
      let rating =
        ratingFeedback.reduce((a, b) => a.rate + b.rate, 0) /
        ratingFeedback.length;
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
           <a href="${obj.link}" target = "_self" class="post-review__content-link">
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
         <div class="rating-scores p73">${rating}</div>
       </div>
     </div>
     <hr />
   </div>
 </article>`;
    });
    listPosts.innerHTML = posts.join("");
  })
);

pc_console.forEach((obj) =>
  obj.addEventListener("click", (e) => {
    e.preventDefault();
    let typeArr = games.filter((obj) => obj.type == "PC/Console");
    let posts = typeArr.map((obj) => {
      let ratingFeedback = obj.feedback.filter((obj) => obj.rate > 0);
      let rating =
        ratingFeedback.reduce((a, b) => a.rate + b.rate, 0) /
        ratingFeedback.length;
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
           <a href="${obj.link}" target = "_self" class="post-review__content-link">
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
         <div class="rating-scores p73">${rating}</div>
       </div>
     </div>
     <hr />
   </div>
 </article>`;
    });
    listPosts.innerHTML = posts.join("");
  })
);

game_mobile.forEach((obj) =>
  obj.addEventListener("click", (e) => {
    e.preventDefault();
    let typeArr = games.filter((obj) => obj.type == "Game Mobile");
    let posts = typeArr.map((obj) => {
      let ratingFeedback = obj.feedback.filter((obj) => obj.rate > 0);
      let rating =
        ratingFeedback.reduce((a, b) => a.rate + b.rate, 0) /
        ratingFeedback.length;
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
           <a href="${obj.link}" target = "_self" class="post-review__content-link">
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
         <div class="rating-scores p73">${rating}</div>
       </div>
     </div>
     <hr />
   </div>
 </article>`;
    });
    listPosts.innerHTML = posts.join("");
  })
);
