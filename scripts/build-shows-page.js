const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    tickets: "BUY TICKETS",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    tickets: "BUY TICKETS",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    tickets: "BUY TICKETS",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    tickets: "BUY TICKETS",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Mostcow Center",
    location: "San Francisco, CA",
    tickets: "BUY TICKETS",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    tickets: "BUY TICKETS",
  },
];

let showsEl = document.querySelector(".shows");

let showsListEl = document.createElement("ul");
showsListEl.classList.add("shows__list");

showsEl.appendChild(showsListEl);
// =========
// ==========
// =========
const generateList = () => {
  const labels = ["DATE", "VENUE", "LOCATION", "TICKETS"];
  const classNames = [
    "shows__date",
    "shows__venue",
    "shows__location",
    "shows__tickets",
  ];

  for (let i = 0; i < shows.length; i++) {
    let activeshow = shows[i];

    let listItemEl = document.createElement("li");
    listItemEl.classList.add("shows__showcard");

    for (let ii = 0; ii < labels.length; ii++) {
      let labelEl = document.createElement("div");
      labelEl.innerText = labels[ii];

      let valueEl = document.createElement("span");
      valueEl.classList.add(classNames[ii]);
      valueEl.innerText = activeshow[Object.keys(activeshow)[ii]];

      listItemEl.appendChild(labelEl);
      listItemEl.appendChild(valueEl);
    }

    showsListEl.appendChild(listItemEl);
  }
};

generateList();
