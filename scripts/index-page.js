


// const comments = [
//   {
//     name: "Connor Walton",
//     date: "02/17/2021",
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Emilie Beach",
//     date: "01/09/2021",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Miles Acosta",
//     date: "12/20/2020",
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

let commentsEl = document.querySelector(".comments");

let commentsListEl = document.createElement("ul");
commentsListEl.classList.add("comments__list");

commentsEl.appendChild(commentsListEl);

// ===========
// ===========
// ===========

const commentsMax = 3;

function displayComment(commentsData) {
  commentsListEl.innerHTML = "";

  const commentsDisplay = commentsData.slice(0, commentsMax);

  for (let i = 0; i < commentsDisplay.length; i++) {
    let activeComment = commentsDisplay[i];

    let commentsItemEl = document.createElement("li");
    commentsItemEl.classList.add("comments__active");

    let commentorEl = document.createElement("div");
    commentorEl.classList.add("comments__active--commentor");

    let commentorMetaEl = document.createElement("div");
    commentorMetaEl.classList.add("comments__active--commentor-meta");

    let imgEl = document.createElement("ul");
    imgEl.classList.add("comments__active--img");
    imgEl.src = "";

    let nameEl = document.createElement("ul");
    nameEl.classList.add("comments__active--name");
    nameEl.innerText = activeComment.name;

    let dateEl = document.createElement("ul");
    dateEl.classList.add("comments__active--date");
    dateEl.innerText = formatDate(activeComment.timestamp);

    let commentEl = document.createElement("ul");
    commentEl.classList.add("comments__active--comment");
    commentEl.innerText = activeComment.comment;

    commentsItemEl.appendChild(imgEl);

    commentsItemEl.appendChild(commentorEl);
    commentorEl.appendChild(commentorMetaEl);

    commentorMetaEl.appendChild(nameEl);
    commentorMetaEl.appendChild(dateEl);
    commentorEl.appendChild(commentEl);

    commentsListEl.appendChild(commentsItemEl);
  }
}
function formatDate(timestamp) {
    const dateStamp = new Date(timestamp);
    return dateStamp.toLocaleDateString();
    
}

axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=ebb5bfc9-e452-4e64-b3db-b981d505d906"
).then((response) => {
  console.log(response.data);
  const commentsData = response.data;
  displayComment(commentsData);
})

displayComment([]);





// ======
// =====
// =====

// ==========
// ==========
// ===========

const commentsButton = document.querySelector(".comments__button--press");
commentsButton.addEventListener("click", (event) => {
  event.preventDefault();

  let commentsNameInput = document.querySelector(".comments__name--input");
  const commentsCommentInput = document.querySelector(
    ".comments__comment--input"
  );

  if (commentsNameInput.value && commentsCommentInput.value) {
    const newComment = {
      name: commentsNameInput.value,
      date: "",
      comment: commentsCommentInput.value,
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    comments[0].date = formattedDate;

    newComment.date = formattedDate;

    comments.unshift(newComment);

    displayComment();

    commentsNameInput.value = "";
    commentsCommentInput.value = "";
  } else {
    if (!commentsNameInput.value) {
      commentsNameInput.style.border = "#D22D2D 1px solid";
    } else {
      commentsNameInput.style.border = "none";
    }

    if (!commentsCommentInput.value) {
      commentsCommentInput.style.border = "#D22D2D 1px solid";
    } else {
      commentsCommentInput.style.border = "none";
    }
  }
});

const commentsNameInput = document.querySelector(".comments__name--input");
commentsNameInput.addEventListener("focus", () => {
  commentsNameInput.style.border = "1px solid #323232";
});

const commentsCommentInput = document.querySelector(
  ".comments__comment--input"
);
commentsCommentInput.addEventListener("focus", () => {
  commentsCommentInput.style.border = "1px solid #323232";
});
