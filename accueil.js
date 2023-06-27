const anchors = document.querySelectorAll(".seeMore");
anchors.forEach(elem => elem.addEventListener("click", smoothing));

function smoothing(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}