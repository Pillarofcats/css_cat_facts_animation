//Target elements
const fact = document.querySelector(".fact");
const catFace1 = document.querySelector(".cat-face1");
const catFace2 = document.querySelector(".cat-face2");
const catFace3 = document.querySelector(".cat-face3");

//Get cat fact json from API and set response text to span element
const getFact = async () => {
  //Fetch fact
  const url = "https://cat-fact.herokuapp.com/facts/random";
  const response = await fetch(url);
  const resObj = await response.json();
  return resObj;
};

//Start after cat 2 animation (middle cat)
const initCat2Animate = () => {
  fact.textContent = "Did you know?";
  setTimeout(() => {
    getFact().then(obj => fact.textContent=obj.text).catch(() => fact.textContent ="...");
  }, 1200);
  //Remove cf2 animationend event listener
  catFace2.removeEventListener("animationend", initCat2Animate);
}
catFace2.addEventListener("animationend", initCat2Animate);

//Mouse over cat 2 event (middle cat)
const catf2 = (event) => {
  console.log("CAT2",event.target);
  console.log("class list", event.target.classList);
  //Fade out cat 2 (initial middle cat)
  let cf2 = event.target;
  //Cat 2 (initial middle cat) is initialized with cat-fade-in class, so we toggle it OFF
  cf2.classList.toggle("cat-fade-in");
  cf2.style.pointerEvents = "none";
  cf2.classList.toggle("cat-fade-out");
  cf2.style.opacity = 0;
  //Fade in cat 1 (left cat) and allow pointer events after animation completes
  let cat1Animate = () => {
    fact.textContent = "Did you know?";
    setTimeout(() => {
      getFact().then(obj => fact.textContent=obj.text).catch(() => fact.textContent ="...");
    }, 1200);
    catFace1.classList.toggle("cat-fade-in");
    catFace1.style.pointerEvents = "auto";
    catFace1.style.opacity = 1;
    //Remove cf2 animationend event listener
    cf2.removeEventListener("animationend", cat1Animate);
  }
  cf2.addEventListener("animationend", cat1Animate);
  //Remove current mouseover listener and add the next cats event listener
  cf2.removeEventListener("mouseenter", catf2);
  catFace1.addEventListener("mouseenter", catf1);
};
catFace2.addEventListener("mouseenter", catf2);

const catf1 = (event) => {
  console.log("CAT1", event.target);
  console.log("class list", event.target.classList);
  //Fade out cat 2 (initial middle cat)
  let cf1 = event.target;
  //Cat 2 (initial middle cat) is initialized with cat-fade-in class, so we toggle it OFF
  cf1.classList.toggle("cat-fade-in");
  cf1.style.pointerEvents = "none";
  cf1.classList.toggle("cat-fade-out");
  cf1.style.opacity = 0;
  //Fade in cat 1 (left cat) and allow pointer events after animation completes
  let cat3Animate = () => {
    fact.textContent = "Did you know?";
    setTimeout(() => {
      getFact().then(obj => fact.textContent=obj.text).catch(() => fact.textContent ="...");
    }, 1200);
    catFace3.classList.toggle("cat-fade-in");
    catFace3.style.pointerEvents = "auto";
    catFace3.style.opacity = 1;
    //Remove cf2 animationend event listener
    cf1.removeEventListener("animationend", cat3Animate);
  }
  cf1.addEventListener("animationend", cat3Animate);
  //Remove current mouseover listener and add the next cats event listener
  cf1.removeEventListener("mouseenter", catf1);
  catFace3.addEventListener("mouseenter", catf3);
};
catFace1.addEventListener("mouseenter", catf1);

const catf3 = (event) => {
  console.log("CAT3",event.target);
  console.log("class list", event.target.classList);
  //Fade out cat 2 (initial middle cat)
  let cf3 = event.target;
  //Cat 2 (initial middle cat) is initialized with cat-fade-in class, so we toggle it OFF
  cf3.classList.toggle("cat-fade-in");
  cf3.style.pointerEvents = "none";
  cf3.classList.toggle("cat-fade-out");
  cf3.style.opacity = 0;
  //Fade in cat 1 (left cat) and allow pointer events after animation completes
  let cat2Animate = () => {
    fact.textContent = "Did you know?";
    setTimeout(() => {
      getFact().then(obj => fact.textContent=obj.text).catch(() => fact.textContent ="...");
    }, 1200);
    catFace2.classList.toggle("cat-fade-in");
    catFace2.style.pointerEvents = "auto";
    //RESET TOGGLE FOR NEW CYCLE
    catFace2.classList.toggle("cat-fade-out");
    catFace1.classList.toggle("cat-fade-out");
    catFace3.classList.toggle("cat-fade-out");
    catFace2.style.opacity = 1;
    //Remove cf2 animationend event listener
    cf3.removeEventListener("animationend", cat2Animate);
  }
  cf3.addEventListener("animationend", cat2Animate);
  //Remove current mouseover listener and add the next cats event listener
  cf3.removeEventListener("mouseenter", catf3);
  catFace2.addEventListener("mouseenter", catf2);
};
catFace3.addEventListener("mouseenter", catf3);