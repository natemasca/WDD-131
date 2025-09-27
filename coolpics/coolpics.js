const menuButton = document.querySelector(".button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize () {
    const menu = document.querySelector(".menu")
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", toggleMenu);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
    
    if (clickedElement.tagName === "IMG") {
        const src = clickedElement.getAttribute("src");
        const alt = clickedElement.getAttribute("alt");
    

	// get the src attribute from that element and 'split' it on the "-"
        const base = src.split("-")[0];
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        const newImg = `${base}-full.jpeg`;
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImg, alt));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
        const closeBtn = document.querySelector(".close-viewer");
        closeBtn.addEventListener("click", closeViewer);
    }
}



function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
