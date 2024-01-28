//Part 1
//Step 1: Select and cache the <main> element in a variable named mainEl.
//modifying CSS, use querySelector
let mainEl = document.querySelector("main");
//Step 2: Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
/*Step 3: Set the content of mainEl to <h1>DOM Manipulation</h1>.*/
//mainEl.document.createElement("<h1>");
//.innertext returns text only, .innerHTML returns html transformations
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//mainEl = element.classList.add("flex-ctr");
mainEl.classList.add("flex-ctr");

//Part 2
//Added css

//Part 3
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%.
document.getElementById("top-menu").style.height = "100%";
//Set the background color of topMenuEl to the value stored
//in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-ctr");

//Part 4
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
//link needs to be a param to giv ethe function access to it
menuLinks.forEach(function (link) {
  //Create an <a> element.
  let linkEl = document.createElement("a");
  //On the new element, add an href attribute with its value set to the href property of the "link" object.
  linkEl.setAttribute("href", link.href);
  //Set the new element's content to the value of the text property of the "link" object.
  linkEl.textContent = link.text;
  //Append the new element to the topMenuEl element.
  topMenuEl.appendChild(linkEl);
});

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");
//Set the height subMenuEl element to be "100%".
document.getElementById("sub-menu").style.height = "100%";
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
//Set the CSS position property of subMenuEl to the value of absolute.
document.getElementById("sub-menu").style.position = "absolute";
//Set the CSS top property of subMenuEl to the value of 0.
document.getElementById("sub-menu").style.top = "0";
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = document.querySelectorAll("#top-menu a");
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function (event) {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();
  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (event.target.tagName === "subLinks") {
    //console.log("if statement ran");
    return;
  }
  //Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);

  // add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  topMenuLinks.forEach(function (Links) {
    if (Links == event.target) {
      //add
      Links.classList.add("active");
    }

    // Remove the 'active' class from each other <a> element
    topMenuLinks.forEach(function (Links) {
      if (Links !== event.target) {
        //remove
        Links.classList.remove("active");
      }
      //Part 5
      let subMenu = event.target.querySelector("sub-menu");
      //If the clicked <a> element's "link" object within menuLinks has a subLinks property
      if (subMenu) {
        if (event.target.classList.contains("active")) {
          // set the CSS top property of subMenuEl to 100%.
          subMenu.style.top = "100%";
        } else {
          //set the CSS top property of subMenuEl to 0.
          subMenu.style.top = "0%";
        }
      }

      //Attach a delegated 'click' event listener to subMenuEl.
      subMenuEl.addEventListener("click", function (event) {
        /*The first line of code of the event listener function should call the
 event object's preventDefault() method.*/
        event.preventDefault();
        //The second line of code within the function should immediately return if the element clicked was not an <a> element.
        if (subMenuEl.target === document.querySelector("a")) {
          return;
        }
        //Next, the event listener should set the CSS top property of subMenuEl to 0.
        document.getElementById("subMenuEl").style.top = "0";
        //Remove the active class from each <a> element in topMenuLinks.
        subMenuEl.classList.remove("active");
        //Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
        mainEl.innerHTML = "<h1>" + event.target.textContent + "</h1>";
      });
    });
  });
});
