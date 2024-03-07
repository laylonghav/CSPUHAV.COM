const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
const off = document.getElementById("OFF");
const turn = document.getElementById("Turn");
const Icon_msg = document.getElementById("Icon_msg");
const liveToast = document.getElementById("liveToast");
// const Slide = document.getElementById("Slide");
var SElement = document.getElementById("Slide");

const SCourses = document.getElementById("Courses");
const SResources = document.getElementById("Resources");
const SAbout = document.getElementById("About");
const SContact = document.getElementById("Contact");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

off.addEventListener("click", function () {
  if (off == document.getElementById("OFF")) {
    Icon_msg.style.display = "none";
  }
});
turn.addEventListener("click", function () {
  if (turn == document.getElementById("Turn")) {
    Icon_msg.style.display = "block";
  }
});


off.addEventListener("click", function () {
  if (off == document.getElementById("OFF")) {
    SElement.classList.add("index");
  }
});
turn.addEventListener("click", function () {
  if (turn == document.getElementById("Turn")) {
    SElement.classList.remove("index");
  }
});


off.addEventListener("click", function () {
  if (off == document.getElementById("OFF")) {
    Shome.classList.add("index");
  }
});
turn.addEventListener("click", function () {
  if (turn == document.getElementById("Turn")) {
    Shome.classList.remove("index");
  }
});

off.addEventListener("click", function () {
  if (off == document.getElementById("OFF")) {
    SCourses.classList.add("index");
  }
});
turn.addEventListener("click", function () {
  if (turn == document.getElementById("Turn")) {
    SCourses.classList.remove("index");
  }
});

off.addEventListener("click", function () {
  if (off == document.getElementById("OFF")) {
    SResources.classList.add("index");
  }
});
turn.addEventListener("click", function () {
  if (turn == document.getElementById("Turn")) {
    SResources.classList.remove("index");
  }
});

off.addEventListener("click", function () {
  if (off == document.getElementById("OFF")) {
    SAbout.classList.add("index");
  }
});
turn.addEventListener("click", function () {
  if (turn == document.getElementById("Turn")) {
    SAbout.classList.remove("index");
  }
});

off.addEventListener("click", function () {
  if (off == document.getElementById("OFF")) {
    SContact.classList.add("index");
  }
});
turn.addEventListener("click", function () {
  if (turn == document.getElementById("Turn")) {
    SclassList.remove("index");
  }
});