const menuHandler = () => {


    const menuToggleBtn = document.querySelector("#Menu-toggle");
    const respoNav = document.querySelector(".Respo-nav");
    const menuIcon = document.querySelector("#Menu-icon");


    menuToggleBtn.addEventListener("click", ()=>{
        respoNav.classList.toggle("Nav-open");
        if (respoNav.classList.contains("Nav-open")) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        }
        else{
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    })


}
menuHandler();