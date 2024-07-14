let btn = document.querySelectorAll(".btn");
let minusbtn = document.querySelectorAll(".minus");
let plusbtn = document.querySelectorAll(".plus");
let content = document.querySelectorAll(".question-texte");
let article = document.querySelectorAll(".questions");


// for (let i = 0; i < btn.length; i++) {
//    btn[i].addEventListener('click',()=>{
//         content[i].classList.toggle("open");
//         article[i].classList.toggle("open");
//    })
// }


article.forEach((element) => {
    // console.log(element);
    let btn = element.querySelector('.btn');
    // console.log(btn);
    btn.addEventListener('click',()=>{
        article.forEach((item)=>{
            if (item !== element) {
                item.classList.remove('open'); 
            }
        })
        element.classList.toggle('open');
    })
});