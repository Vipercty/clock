let item=document.querySelectorAll(".container li");
let activelink=(elem)=>{
    item.forEach((link) => {
        link.classList.remove("active");
    })
    elem.classList.add("active");


}
item.forEach((link) => {
    link.addEventListener("click", (e)=>{
        activelink(e.target);
    })
})