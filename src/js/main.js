// lang and currency switch

const currencyLoc_1 = document.querySelector(".form-elem_1 select");
const currencyFlagLoc_1 = document.querySelector(".form-elem_1 .flag-box .flag");
const currencyLoc_2 = document.querySelector(".form-elem_2 select");
const currencyFlagLoc_2 = document.querySelector(".form-elem_2 .flag-box .flag");

if (currencyLoc_1) {
    currencyLoc_1.addEventListener("change", () => {
        country = currencyLoc_1.value
        currencyFlagLoc_1.src = `./img/${country}.svg`
        currencyFlagLoc_1.alt = country;
    })
}

if (currencyLoc_2) {
    currencyLoc_2.addEventListener("change", () => {
        country = currencyLoc_2.value.substr(0,2);
        currencyFlagLoc_2.src = `./img/${country}.svg`
        currencyFlagLoc_2.alt = country;
    })
}

// budget menu popup

const dotsLoc = document.querySelector(".title img");
const menuPopupLoc = document.querySelector(".menu-popup");

if (dotsLoc) {
    dotsLoc.addEventListener("click", () => {
        menuPopupLoc.classList.toggle("active");
    });
    
}

if (menuPopupLoc) {
    document.addEventListener("click", (e)=>{
        if (!e.target.closest(".menu-popup") && (!e.target.closest(".dots"))) {
            menuPopupLoc.classList.remove("active");
        }
    })
}

//  budget month activate

const monthLoc = document.querySelectorAll(".months div");

if (monthLoc) {
    monthLoc.forEach((elem)=>{
    
        elem.addEventListener("click", ()=>{
            monthLoc.forEach((elem)=>{
                elem.classList.remove("active");
            })
            elem.classList.add("active");
        })
    })
}

//  budget approving tooltip activate

const apprBtnLoc = document.querySelectorAll(".table-revenue .button")

apprBtnLoc.forEach((elem)=>{
    elem.addEventListener("mouseover", (e)=>{
        const apprBtnTooltipLoc = e.target.closest(".button").querySelector(".tooltip")
        apprBtnTooltipLoc.classList.add("active");
    });
    elem.addEventListener("mouseout", (e)=>{
        const apprBtnTooltipLoc = e.target.closest(".button").querySelector(".tooltip")
        apprBtnTooltipLoc.classList.remove("active");
    });
})
