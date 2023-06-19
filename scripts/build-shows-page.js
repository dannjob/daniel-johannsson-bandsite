// const shows = [
//   {
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//     tickets: "BUY TICKETS",
//   },
//   {
//     date: "Tue Sept 21 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//     tickets: "BUY TICKETS",
//   },
//   {
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//     tickets: "BUY TICKETS",
//   },
//   {
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//     tickets: "BUY TICKETS",
//   },
//   {
//     date: "Sat Nov 06 2021",
//     venue: "Mostcow Center",
//     location: "San Francisco, CA",
//     tickets: "BUY TICKETS",
//   },
//   {
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Francisco, CA",
//     tickets: "BUY TICKETS",
//   },
// ];

const APIKEY = "ebb5bfc9-e452-4e64-b3db-b981d505d906";
const APIURL = `https://project-1-api.herokuapp.com/showdates?api_key=${APIKEY}`;

let showsEl = document.querySelector(".shows");

let showsListEl = document.createElement("ul");
showsListEl.classList.add("shows__list");

showsEl.appendChild(showsListEl);
// =========
// ==========
// =========
const generateList = () => {
  fetch(APIURL)
  .then((response) => response.json())
  .then((data) => {
  const labels = ["DATE", "VENUE", "LOCATION", "TICKETS"];
  const classNames = [
    "shows__date",
    "shows__venue",
    "shows__location",
    "shows__tickets",
  ];

    data.forEach((show) => {
  // for (let i = 0; i < shows.length; i++) 
  //   let activeshow = shows[i];

      let listItemEl = document.createElement("li");
      listItemEl.classList.add("shows__showcard");



      for (let i = 0; i < labels.length; i++) {
        let labelEl = document.createElement("div");
        labelEl.innerText = labels[i];

        let valueEl = document.createElement("span");
        valueEl.classList.add(classNames[i]);

        if (labels[i] === "DATE"){
          const showDate = new Date(show.date);
          valueEl.innerText = showDate.toDateString();
        } if (labels[i] === "VENUE"){
          valueEl.innerText = show.place;
        } if (labels[i] === "LOCATION"){
          valueEl.innerText = show.location;
        } if (labels[i] === "TICKETS"){
          valueEl.innerText = "BUY TICKETS";
        }
        listItemEl.appendChild(labelEl);
        listItemEl.appendChild(valueEl);
      
      }

      let ticketsButton = listItemEl.querySelector(".shows__tickets");
      ticketsButton.addEventListener("click", function () {
        listItemEl.style.backgroundColor = "#E1E1E1";
      });

      showsListEl.appendChild(listItemEl);
      });
    })
  .catch((error) => {
    console.error("ERROR", error)
  });
};

generateList();
