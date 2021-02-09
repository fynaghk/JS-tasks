const btn = document.querySelector(".addMission");
const input = document.querySelector("input");

btn.addEventListener("click", addMission)

function addMission(e){
  const notCompleted = document.querySelector(".notCompleted");
  const completed = document.querySelector(".completed");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  const myDiv = document.createElement("div");
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if(input.value !==""){
    newLi.textContent = input.value;
    input.value = "";

    notCompleted.appendChild(newLi)
    myDiv.appendChild(checkBtn);
    myDiv.appendChild(deleteBtn);
    newLi.appendChild(myDiv);
  }

  checkBtn.addEventListener("click", ()=>{
    const parent = newLi;
    completed.appendChild(parent);
    checkBtn.style.display = "none"
  });

  deleteBtn.addEventListener("click", ()=>{
    const parent = newLi;
    parent.remove();
  });
}
