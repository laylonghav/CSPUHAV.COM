const home = document.getElementById("home");
const Courses = document.getElementById("Courses");
const Resources = document.getElementById("Resources");
const About = document.getElementById("About");
const Contact = document.getElementById("Contact");
const See_more = document.getElementById("See_more");

const h = document.getElementById("H");
const Cou = document.getElementById("Cou");
const Re = document.getElementById("R");
const Ab = document.getElementById("A");
const Con = document.getElementById("Con");
const Seemore = document.getElementById("Seemore");

const Mh = document.getElementById("1H");
const MCou = document.getElementById("1Cou");
const MRe = document.getElementById("1R");
const MAb = document.getElementById("1A");
const MCon = document.getElementById("1Con");
const MSeemore = document.getElementById("Seemore1");

var element = document.getElementById("Active");
var Melement = document.getElementById("1Active");
// element.classList.add("nav-pills");

See_more.style.display = "none";

Seemore.addEventListener("click", function () {
  if (Seemore == document.getElementById("Seemore")) {
    // alert("Hello");
    element.classList.remove("nav-pills");
    Melement.classList.remove("nav-pills");
    home.style.display = "none";
    Courses.style.display = "none";
    Resources.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "none";
    See_more.style.display = "block";
  }
});

h.addEventListener("click", function () {
  if (h == document.getElementById("H")) {
    home.style.display = "block";
    See_more.style.display = "none";
    Courses.style.display = "none";
    Resources.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
  } 
});

Mh.addEventListener("click", function () {
  if (h == document.getElementById("H")) {
    home.style.display = "block";
    See_more.style.display = "none";
    Courses.style.display = "none";
    Resources.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
    Melement.classList.add("nav-pills");
  }
});
Cou.addEventListener("click", function () {
  if (Cou == document.getElementById("Cou")) {
    Courses.style.display = "block";
    See_more.style.display = "none";
    home.style.display = "none";
    Resources.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
  }
});

MCou.addEventListener("click", function () {
  if (Cou == document.getElementById("Cou")) {
    Courses.style.display = "block";
    See_more.style.display = "none";
    home.style.display = "none";
    Resources.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
    Melement.classList.add("nav-pills");
  }
});

Re.addEventListener("click", function () {
  if (Re == document.getElementById("R")) {
    Resources.style.display = "block";
    See_more.style.display = "none";
    home.style.display = "none";
    Courses.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
  }
});

MRe.addEventListener("click", function () {
  if (Re == document.getElementById("R")) {
    Resources.style.display = "block";
    See_more.style.display = "none";
    home.style.display = "none";
    Courses.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
    Melement.classList.add("nav-pills");
  }
});

Ab.addEventListener("click", function () {
  if (Ab == document.getElementById("A")) {
    About.style.display = "block";
    See_more.style.display = "none";
    home.style.display = "none";
    Courses.style.display = "none";
    Resources.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
    Melement.classList.add("nav-pills");
  }
});

MAb.addEventListener("click", function () {
  if (Ab == document.getElementById("A")) {
    About.style.display = "block";
    See_more.style.display = "none";
    home.style.display = "none";
    Courses.style.display = "none";
    Resources.style.display = "none";
    Contact.style.display = "none";
    element.classList.add("nav-pills");
    Melement.classList.add("nav-pills");
  }
});

Con.addEventListener("click", function () {
  if (Con == document.getElementById("Con")) {
    Contact.style.display = "block";
    See_more.style.display = "none";
    See_more.style.display = "none";
    home.style.display = "none";
    Courses.style.display = "none";
    Resources.style.display = "none";
    About.style.display = "none";
    element.classList.add("nav-pills");
  }
});

MCon.addEventListener("click", function () {
  if (Con == document.getElementById("Con")) {
    Contact.style.display = "block";
    See_more.style.display = "none";
    See_more.style.display = "none";
    home.style.display = "none";
    Courses.style.display = "none";
    Resources.style.display = "none";
    About.style.display = "none";
    element.classList.add("nav-pills");
    Melement.classList.add("nav-pills");
  }
});
