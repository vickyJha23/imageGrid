console.log("Har Har Mahadev");
const grid = document.querySelector(".grid");
const btnContainer = document.querySelector(".btn-container")
const activeBtn = btnContainer.querySelectorAll("button");
activeBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
          const noOfCol = parseInt(e.target.dataset.id);
          const activeBtn = document.querySelector(".active");
          activeBtn.className = "";
          e.target.className += "active";
          setColumn(noOfCol);
      })
})

function setColumn(noOfCol){
   grid.style.gridTemplateColumns = `repeat(${noOfCol}, 1fr)` 
}