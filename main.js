const findBtn = document.querySelector(".find_button");
findBtn.addEventListener('click', ()=>{
    const rabbit =  document.querySelector(".rabbit");
    rabbit.scrollIntoView({behavior: "smooth", block: "center"});
});