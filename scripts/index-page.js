const comments = [
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

let commentsEl = document.querySelector(".comments");

let commentsListEl = document.createElement("ul");
commentsListEl.classList.add("comment__list");

commentsEl.appendChild(commentsListEl);

// ===========
// ===========
// ===========

const generateList = () => {
  for (let i = 0; i < comments.length; i++) {
    let activeComment = comments[i];

    let commentsItemEl = document.createElement("li");
    commentsItemEl.classList.add("comments__active");

    let nameEl = document.createElement("span");
    nameEl.classList.add("comments__active--header", "comments__active--name");
    nameEl.innerText = activeComment.name;

    let dateEl = document.createElement("span");
    dateEl.classList.add("comments__active--header", "comments__active--date");
    dateEl.innerText = activeComment.date;

    let commentEl = document.createElement("span");
    commentEl.classList.add("comments__active--comment");
    commentEl.innerText = activeComment.comment;

    commentsItemEl.appendChild(nameEl);
    commentsItemEl.appendChild(dateEl);
    commentsItemEl.appendChild(commentEl);

    commentsListEl.appendChild(commentsItemEl);
  }
};

generateList();
