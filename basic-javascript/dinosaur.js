//
// MDN DOM scripting introduction example
//

//change link & link text
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// add a new paragraph
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

// append text to paragraph
const text = document.createTextNode(
  " - the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// move para to bottom
sect.appendChild(linkPara);

// add formatting via css
para.setAttribute("class", "highlight");