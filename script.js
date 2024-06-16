// ########################   From Bottom To Top Btn   #############################
const topButton = document.querySelector(".top");
window.onscroll = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    };
};
topButton.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// ##########################   Like Button   #####################################
const likeBtns = document.querySelectorAll(".client-response a:first-child");
for(let likeBtn of likeBtns){
    likeBtn.addEventListener("click", ()=>{
        likeBtn.innerHTML = "<a><i class='fa-solid fa-check'></i> Liked</a>"
    })
}
// ##########################   Open Client's Review   #############################
const openReviewBtn = document.querySelectorAll(".client-response a:last-child");
for(let reviewBtn of openReviewBtn){
    const tabButtons = reviewBtn.dataset.tab;
    const tabReview = document.getElementById(tabButtons);
    reviewBtn.addEventListener("click", ()=>{
        tabReview.classList.toggle("show");
    })
}
document.querySelector(".client-response a:last-child").click();
// ###########################   Subscribe   ############################
const subForm = document.querySelectorAll("#form");
for(let form of subForm){
    form.addEventListener("submit", e=>{
        e.preventDefault();
    })
}
// ##########################   Fixed Form   ############################
const fixedForm = document.querySelector(".fixed-form");
const showFixedForm = () => {
    fixedForm.style.display = "flex";
}
const closeBtn = document.querySelector(".wrapper span");
closeBtn.addEventListener("click", ()=>{
    fixedForm.style.display = "none";
})
window.onclick = e => {
    if(e.target == fixedForm){
        fixedForm.style.display = "none";
    }
}