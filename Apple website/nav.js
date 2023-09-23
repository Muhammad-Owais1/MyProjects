let hamBurger = document.getElementById("hamburger");
let pageLinks = document.getElementById("page-links");
let nav = document.querySelector("nav");

function navToggle() {
    if (pageLinks.style.display === ""){
        pageLinks.style.display = "flex"
        nav.style.height = "fit-content"
    }
    else{
        nav.style.height = "44px"
        pageLinks.style.display = "";
    }
}


hamBurger.addEventListener("click", navToggle);
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
let storeLink = document.getElementById("store-link");
let storeOption = document.getElementById("store-option");

let macLink = document.getElementById("mac-link");
let macOption = document.getElementById("mac-option");

let iphoneLink = document.getElementById("iphone-link");
let iphoneOption = document.getElementById("iphone-option");

let ipadLink = document.getElementById("ipad-link");
let ipadOption = document.getElementById("ipad-option");

let watchLink = document.getElementById("watch-link");
let watchOption = document.getElementById("watch-option");

let visionLink = document.getElementById("vision-link");
let visionOption = document.getElementById("vision-option");

let airpodLink = document.getElementById("airpod-link");
let airpodOption = document.getElementById("airpod-option");

let tvLink = document.getElementById("tv-link");
let tvOption = document.getElementById("tv-option");

let entertainmentLink = document.getElementById("entertainment-link");
let entertainmentOption = document.getElementById("entertainment-option");

let accessoriesLink = document.getElementById("accessories-link");
let accessoriesOption = document.getElementById("accessories-option");

let supportLink = document.getElementById("support-link");
let supportOption = document.getElementById("support-option");


function hideOptions() {
  storeOption.style.display = "";
  macOption.style.display = "";
  iphoneOption.style.display = "";
  ipadOption.style.display = "";
  watchOption.style.display = "";
  visionOption.style.display = "";
  airpodOption.style.display = "";
  tvOption.style.display = "";
  entertainmentOption.style.display = "";
  accessoriesOption.style.display = "";
  supportOption.style.display = "";

}

function storeLinkFlex() {
  if (storeOption.style.display === "flex") {
    storeOption.style.display = "";
  } else {
    hideOptions();
    storeOption.style.display = "flex";
  }
}

function macLinkFlex() {
  if (macOption.style.display === "flex") {
    macOption.style.display = "";
  } else {
    hideOptions();
    macOption.style.display = "flex";
  }
}

function iphoneLinkFlex() {
  if (iphoneOption.style.display === "flex") {
    iphoneOption.style.display = "";
  } else {
    hideOptions();
    iphoneOption.style.display = "flex";
  }
}

function ipadLinkFlex() {
  if (ipadOption.style.display === "flex") {
    ipadOption.style.display = "";
  } else {
    hideOptions();
    ipadOption.style.display = "flex";
  }
}

function watchLinkFlex() {
  if (watchOption.style.display === "flex") {
    watchOption.style.display = "";
  } else {
    hideOptions();
    watchOption.style.display = "flex";
  }
}

function visionLinkFlex() {
  if (visionOption.style.display === "flex") {
    visionOption.style.display = "";
  } else {
    hideOptions();
    visionOption.style.display = "flex";
  }
}

function airpodLinkFlex() {
  if (airpodOption.style.display === "flex") {
    airpodOption.style.display = "";
  } else {
    hideOptions();
    airpodOption.style.display = "flex";
  }
}

function tvLinkFlex() {
  if (tvOption.style.display === "flex") {
    tvOption.style.display = "";
  } else {
    hideOptions();
    tvOption.style.display = "flex";
  }
}

function entertainmentLinkFlex() {
  if (entertainmentOption.style.display === "flex") {
    entertainmentOption.style.display = "";
  } else {
    hideOptions();
    entertainmentOption.style.display = "flex";
  }
}

function accessoriesLinkFlex() {
  if (accessoriesOption.style.display === "flex") {
    accessoriesOption.style.display = "";
  } else {
    hideOptions();
    accessoriesOption.style.display = "flex";
  }
}

function supportLinkFlex() {
  if (supportOption.style.display === "flex") {
    supportOption.style.display = "";
  } else {
    hideOptions();
    supportOption.style.display = "flex";
  }
}

storeLink.addEventListener("mouseover", storeLinkFlex);
macLink.addEventListener("mouseover", macLinkFlex);
iphoneLink.addEventListener("mouseover", iphoneLinkFlex )
ipadLink.addEventListener("mouseover", ipadLinkFlex);
watchLink.addEventListener("mouseover", watchLinkFlex);
visionLink.addEventListener("mouseover", visionLinkFlex);
airpodLink.addEventListener("mouseover", airpodLinkFlex);
tvLink.addEventListener("mouseover", tvLinkFlex);
entertainmentLink.addEventListener("mouseover", entertainmentLinkFlex);
accessoriesLink.addEventListener("mouseover", accessoriesLinkFlex);
supportLink.addEventListener("mouseover", supportLinkFlex);

// To hide the options when the mouse leaves the area
document.addEventListener("mouseleave", hideOptions);





///////////////////////////////////////////




//////////////////////////////////////////
//////////////////////////////////////////
///////////////////////////////////////////
var i1 = 0;
var secOneTxt = 'MacBook Air 15"';
var speed1 = 50; 

function macBook() {
  if (i1 < secOneTxt.length) {
    document.getElementById("sec-one-txt").innerHTML += secOneTxt.charAt(i1);
    i1++;
    setTimeout(macBook, speed1);
  }
}
let secOne = document.getElementById("sec-one")
secOne.addEventListener("mouseover", macBook)







var i2 = 0;
var secTwoTxt = "iPhone Pro"
var speed2 = 50;

function iPhone() {
  if (i2 < secTwoTxt.length) {
    document.getElementById("sec-two-txt").innerHTML += secTwoTxt.charAt(i2);
    i2++;
    setTimeout(iPhone, speed2);
  }
}
let secTwo = document.getElementById("sec-two")
secTwo.addEventListener("mouseover", iPhone)