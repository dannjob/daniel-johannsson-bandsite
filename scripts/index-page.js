const commentsEl = document.querySelector(".comments");
const commentsListEl = document.createElement("ul");
commentsListEl.classList.add("comments__list");
commentsEl.appendChild(commentsListEl);

const commentsMax = 3;
const APIKEY = "ebb5bfc9-e452-4e64-b3db-b981d505d906";
const APIURL = `https://project-1-api.herokuapp.com/comments?api_key=${APIKEY}`;

function getComments(){
  axios
  .get(`${APIURL}&_sort=timestamp&_order=desc`)
  .then((response) => {
    const commentsData = response.data;
    commentsData.reverse();
    displayComment(commentsData);
  })
  .catch((error) => {
    console.error("ERROR:", error);
  });

}

getComments()


function displayComment(commentsData) {
  commentsListEl.innerHTML="";
  const commentsDisplay = commentsData.slice(0, commentsMax);

  for (let i = 0; i < commentsDisplay.length; i++) {
    const activeComment = commentsDisplay[i];

    const commentsItemEl = document.createElement("li");
    commentsItemEl.classList.add("comments__active");

    const commentorEl = document.createElement("div");
    commentorEl.classList.add("comments__active--commentor");

    const commentorMetaEl = document.createElement("div");
    commentorMetaEl.classList.add("comments__active--commentor-meta");

    const imgEl = document.createElement("ul");
    imgEl.classList.add("comments__active--img");
    imgEl.src = "";

    const nameEl = document.createElement("ul");
    nameEl.classList.add("comments__active--name");
    nameEl.innerText = activeComment.name;

    const dateEl = document.createElement("ul");
    dateEl.classList.add("comments__active--date");
    dateEl.innerText = formatDate(activeComment.timestamp);

    const commentEl = document.createElement("ul");
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










function addComment(){ 
  const formSubmit = document.querySelector(".comments__input");
  const nameSubmit = document.querySelector(".comments__name--input");
  const commentSubmit = document.querySelector(".comments__comment--input");

  formSubmit.addEventListener('submit', submit);

  function submit(event) {
    event.preventDefault();

    const commentPost = {
      name: nameSubmit.value,
      comment: commentSubmit.value,
      // likes: 0,
      // timestamp: Date.now,
    };

    axios
    .post(APIURL, commentPost)
    .then(response => {
      console.log("comment submitted", response.data)
      getComments();

    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
    nameSubmit.value = '';
    commentSubmit.value = '';
  }
}
addComment()



// commentsButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   const commentsNameInput = document.querySelector(".comments__name--input");
//   const commentsCommentInput = document.querySelector(".comments__comment--input");

//   if (commentsNameInput.value && commentsCommentInput.value) {
//     const newComment = {
//       name: commentsNameInput.value,
//       date: "Date.now()",
//       comment: commentsCommentInput.value,
//     };

//     // const currentDate = new Date();
//     // const formattedDate = currentDate.toLocaleDateString();
//     // comments[0].date = formattedDate;

//     // postComment(newComment)

//     // newComment.date = formattedDate;

//     // comments.unshift(newComment);

//     // displayComment();

//     commentsNameInput.value = "";
//     commentsCommentInput.value = "";
//   } else {
//     if (!commentsNameInput.value) {
//       commentsNameInput.style.border = "#D22D2D 1px solid";
//     } else {
//       commentsNameInput.style.border = "none";
//     }

//     if (!commentsCommentInput.value) {
//       commentsCommentInput.style.border = "#D22D2D 1px solid";
//     } else {
//       commentsCommentInput.style.border = "none";
//     }
//   }
// });

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
