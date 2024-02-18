// const dietLinks = {
//     Vegetarian: 'https://www.google.com',
//     Meat: 'https://www.google.com',
//     Vegan: 'https://www.healthline.com/nutrition/vegan-bodybuilding-diet#the-diet',
// }

// function diet () {
//     const dietDropdown = document.getElementById('diet');
//     const hyperlink = document.getElementById('dietLink');

//     const selected = dietDropdown.value;
//     hyperlink.textContent = `Here's a good diet for what you selected`;
//     hyperlink.setAttribute('href', dietLinks[selected])
// }
const absDiv = document.getElementById("abs");
const legsDiv = document.getElementById("legs");
const armsDiv = document.getElementById("arms");
const chestDiv = document.getElementById("chest");

const values = [];
let previewLi = [];
previewLi.push(
  "r1l1",
  "r1l2",
  "r1l3",
  "r1l4",
  "r2l1",
  "r2l2",
  "r2l3",
  "r2l4",
  "r3l1",
  "r3l2",
  "r3l3",
);
let day = 0;
if (!localStorage.getItem("day")) {
      localStorage.setItem("day", 0)
  }  else {
      day = localStorage.getItem("day")
  }

const url =
  "https://dffc-2607-fb90-dd8a-321-b400-282b-e4c9-54fc.ngrok-free.app/";

function groupChange() {
  const groupDropdown = document.getElementById("group");

  const selected = groupDropdown.value;
  groupDropdown.disabled = true;

  absDiv.style.display = "none";
  legsDiv.style.display = "none";
  armsDiv.style.display = "none";
  chestDiv.style.display = "none";

  if (selected === "Abs") {
    absDiv.style.display = "block";
    legsDiv.style.display = "none";
    armsDiv.style.display = "none";
    chestDiv.style.display = "none";
  } else if (selected === "Legs") {
    legsDiv.style.display = "block";
    absDiv.style.display = "none";
    armsDiv.style.display = "none";
    chestDiv.style.display = "none";
  } else if (selected === "Arms") {
    armsDiv.style.display = "block";
    absDiv.style.display = "none";
    legsDiv.style.display = "none";
    chestDiv.style.display = "none";
  } else if (selected === "Chest") {
    chestDiv.style.display = "block";
    absDiv.style.display = "none";
    legsDiv.style.display = "none";
    armsDiv.style.display = "none";
  }
}

function absSubmit() {
  event.preventDefault();
  absDiv.style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("toph4").style.display = "none";
  const data = new FormData(document.getElementById("abs"));
  absDiv.disabled = true;
  for (const pair of data.entries()) values.push(pair[1]);
  fetch(
    url +
      `abs?sideplanks=${values[0]}&legraises=${values[1]}&crunches=${values[2]}&day=${day}`,
  )
    .then((response) => response.json())
    .then((data) => {
      for (const key of Object.keys(data)) {
        document.getElementById(`r${Number(key) + 1}l1`).textContent =
          data[key][0] + " second side plank";
        document.getElementById(`r${Number(key) + 1}l2`).textContent =
          data[key][1] + " leg raises";
        document.getElementById(`r${Number(key) + 1}l3`).textContent =
          data[key][2] + " crunches";
        if (typeof data[key][3] !== "undefined") {
          document.getElementById(`r${Number(key) + 1}l4`).textContent =
            data[key][3] + " seconds of rest";
        }
      }
    });
}

function legsSubmit() {
  event.preventDefault();
  document.getElementById("toph4").style.display = "none";
  document.getElementById("start").style.display = "block";
  legsDiv.style.display = "none";
  const data = new FormData(document.getElementById("legs"));
  for (const pair of data.entries()) values.push(pair[1]);
  fetch(
    url +
      `legs?pistol=${values[0]}&calfraise=${values[1]}&lunge=${values[2]}&day=${day}`,
  )
    .then((response) => response.json())
    .then((data) => {
      for (const key of Object.keys(data)) {
        document.getElementById(`r${Number(key) + 1}l1`).textContent =
          data[key][0] + " pistol squats";
        document.getElementById(`r${Number(key) + 1}l2`).textContent =
          data[key][1] + " calf raises";
        document.getElementById(`r${Number(key) + 1}l3`).textContent =
          data[key][2] + " lunges";
        if (typeof data[key][3] !== "undefined") {
          document.getElementById(`r${Number(key) + 1}l4`).textContent =
            data[key][3] + " seconds of rest";
        }
      }
    });
}

function armsSubmit() {
  event.preventDefault();
  document.getElementById("toph4").style.display = "none";
  document.getElementById("start").style.display = "block";
  armsDiv.style.display = "none";
  const data = new FormData(document.getElementById("arms"));
  for (const pair of data.entries()) values.push(pair[1]);
  fetch(
    url +
      `arms?holds=${values[0]}&diamondpushups=${values[1]}&pull=${values[2]}&day=${day}`,
  )
    .then((response) => response.json())
    .then((data) => {
      for (const key of Object.keys(data)) {
        document.getElementById(`r${Number(key) + 1}l1`).textContent =
          data[key][0] + " fingertip holds";
        document.getElementById(`r${Number(key) + 1}l2`).textContent =
          data[key][1] + " diamond push-ups";
        document.getElementById(`r${Number(key) + 1}l3`).textContent =
          data[key][2] + " pull-ups";
        if (typeof data[key][3] !== "undefined") {
          document.getElementById(`r${Number(key) + 1}l4`).textContent =
            data[key][3] + " seconds of rest";
        }
      }
    });
}

function chestSubmit() {
  event.preventDefault();
  document.getElementById("toph4").style.display = "none";
  document.getElementById("start").style.display = "block";
  chestDiv.style.display = "none";
  const data = new FormData(document.getElementById("chest"));
  for (const pair of data.entries()) values.push(pair[1]);
  fetch(
    url +
      `chest?widepush=${values[0]}&incline=${values[1]}&declinepushups=${values[2]}&day=${day}`,
  )
    .then((response) => response.json())
    .then((data) => {
      for (const key of Object.keys(data)) {
        document.getElementById(`r${Number(key) + 1}l1`).textContent =
          data[key][0] + " wide grip push-ups";
        document.getElementById(`r${Number(key) + 1}l2`).textContent =
          data[key][1] + " incline push-ups";
        document.getElementById(`r${Number(key) + 1}l3`).textContent =
          data[key][3] + " decline push-ups";
        if (typeof data[key][3] !== "undefined") {
          document.getElementById(`r${Number(key) + 1}l4`).textContent =
            data[key][4] + " seconds of rest";
        }
      }
    });
}

function rangeChange() {
  if (event.target.id.startsWith("sideplank")) {
    document.getElementById(event.target.id + "Label").textContent =
      event.target.value + " secs";
  } else {
    document.getElementById(event.target.id + "Label").textContent =
      event.target.value;
  }
}

function dayChange () {
    let label = document.getElementById('dayLabel')
    label.textContent = event.target.value
    localStorage.setItem("day", event.target.value)
}