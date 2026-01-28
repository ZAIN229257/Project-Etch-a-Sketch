const sqoer = {x:4,y:5};
const container = document.querySelector(".grid");




function createGrid(){
  const total = sqoer.x * sqoer.y;
  container.innerHTML = "";
  const ul = document.createElement("ul");
   container.append(ul);
   ul.style.display = "grid";
   ul.style.gridTemplateColumns = `repeat(${sqoer.x}, 1fr)`;
   ul.style.gridTemplateRows = `repeat(${sqoer.y}, 1fr)`;
   ul.style.width = "400px";
   ul.style.height = "400px"; 

   ul.style.padding = "0";
   ul.style.margin = "0";


  for(let i = 0;i <total;i++){
    const li = document.createElement("li");
     li.classList.add("ssquare");
     ul.append(li);
     li.style.border = "1px solid #000";
   li.style.width = "100%";
   li.style.height = "100%";
   const coler = document.querySelectorAll(".ssquare");

   coler.forEach(coler => {
   coler.addEventListener("mouseover", e =>{
    e.target.style.backgroundColor = "black";
   });
   coler.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = "red"; 
    });
    });




  }
};

const button = document.querySelector(".bb");
button.addEventListener("click",()=>{
  sqoer.x += 1;
  sqoer.y += 1;
createGrid();
});
const buttond = document.querySelector(".dd");
buttond.addEventListener("click",()=>{
const X = parseInt(prompt("أدخل عدد الأعمدة"));
const Y = parseInt(prompt("أدخل عدد الصفوف"));

if(!isNaN(X) && !isNaN(Y)){
  sqoer.x = X; 
  sqoer.y = Y;
  
  createGrid(); 
}

});





















