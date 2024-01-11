let whiteBtn = document.getElementById("circle");
let body = document.getElementById("body");
let navbar = document.getElementById("togglebtn");



navbar.addEventListener('click', ()=>{
    if(whiteBtn.style.left === "5px" || whiteBtn.style.left===""){
        whiteBtn.style.left = "55%"
        body.classList.toggle("dark");
        navbar.classList.toggle("navcolor");
    }
   else if(whiteBtn.style.left==="55%"){
    body.classList.toggle("dark");
    whiteBtn.style.left = "5px"
    navbar.classList.toggle("black");
}
});

// navbar.addEventListener('click', ()=>{
//     if(whiteBtn.style.left === "5px" || whiteBtn.style.left===""){
//         whiteBtn.style.left = "55%"
//         // body.classList.toggle("dark");
//         body.classList.toggle("darkImg");
//         navbar.classList.toggle("navcolor");
//     }
//    else if(whiteBtn.style.left==="55%"){
//     // body.classList.toggle("dark");
//     body.classList.toggle("darkImg");
//     whiteBtn.style.left = "5px"
//     navbar.classList.toggle("black");
// }
// });