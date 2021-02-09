const btn = document.querySelector(".addMission");
const input = document.querySelector("input");

btn.addEventListener("click", addMission)

function addMission(e){
  const notCompleted = document.querySelector(".notCompleted");
  const completed = document.querySelector(".completed");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if(input.value !==""){
    newLi.textContent = input.value;
    input.value = "";

    newLi.appendChild(checkBtn);
    notCompleted.appendChild(newLi)
    newLi.appendChild(deleteBtn)
  }

  checkBtn.addEventListener("click", function(){
    const parent = this.parentNode;
    parent.remove();
    completed.appendChild(parent);
    checkBtn.style.display = "none"
  });

  deleteBtn.addEventListener("click", function(){
    const parent = this.parentNode;
    parent.remove();
  });
}
