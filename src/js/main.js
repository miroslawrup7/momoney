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

// BUDGET
const budgetPageLoc = document.querySelector(".budget-page");

if (budgetPageLoc) {

    // budget menu popup
    const dotsLoc = document.querySelector(".title img");
    const menuPopupLoc = document.querySelector(".menu-popup");

    dotsLoc.addEventListener("click", () => {
        menuPopupLoc.classList.toggle("active");
    });

    document.addEventListener("click", (e)=>{
        if (!e.target.closest(".menu-popup") && (!e.target.closest(".dots"))) {
            menuPopupLoc.classList.remove("active");
        }
    })
    
    //  budget month activate
    const monthLoc = document.querySelectorAll(".months div");

    monthLoc.forEach((elem)=>{
        elem.addEventListener("click", ()=>{
            monthLoc.forEach((elem)=>{
                elem.classList.remove("active");
            })
            elem.classList.add("active");
        })
    })

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

    //  budget add new budget
    const rightContentCoverLoc = document.querySelector(".right-content-cover");
    
    const addNewBudgetLoc = document.querySelector(".add-new-budget");
    
    const newBudgetPopupLoc = document.querySelector(".new-budget-popup")
    const closeBudgetBtnLoc = document.querySelector(".new-budget-popup .close-btn")
    const cancelBudgetBtnLoc = document.querySelector(".new-budget-popup .cancel-btn")

    addNewBudgetLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.add("active");
        menuPopupLoc.classList.remove("active");
        newBudgetPopupLoc.classList.add("active");
    })

    closeBudgetBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        menuPopupLoc.classList.add("active");
        newBudgetPopupLoc.classList.remove("active");
    })
    
    cancelBudgetBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        menuPopupLoc.classList.add("active");
        newBudgetPopupLoc.classList.remove("active");
    })

    const addNewRevenueLoc = document.querySelector(".add-new-revenue");
    
    const newRevenuePopupLoc = document.querySelector(".new-revenue-popup")
    const closeRevenueBtnLoc = document.querySelector(".new-revenue-popup .close-btn")
    const cancelRevenueBtnLoc = document.querySelector(".new-revenue-popup .cancel-btn")

    addNewRevenueLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.add("active");
        newRevenuePopupLoc.classList.add("active");
    })

    closeRevenueBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newRevenuePopupLoc.classList.remove("active");
    })
    
    cancelRevenueBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newRevenuePopupLoc.classList.remove("active");
    })

    //  budget edit category

    const editCategoryBtnLoc = document.querySelector(".edit-cat-btn")
    const pencilesLoc1 = document.querySelectorAll(".table-expenses .cell:nth-child(1) img")
    const pencilesLoc2 = document.querySelectorAll(".table-expenses .cell:nth-child(2) img")
    const binsLoc = document.querySelectorAll(".table-expenses .row .bin")
    const yesNoButtonsLoc = document.querySelector(".table-expenses .yes-no-buttons")

    const noButtonsLoc = document.querySelector(".table-expenses .yes-no-buttons .cancel-add")
    const yesButtonsLoc = document.querySelector(".table-expenses .yes-no-buttons .btn.add")
    
    editCategoryBtnLoc.addEventListener("click", ()=>{
        pencilesLoc1.forEach((elem)=>{
            elem.classList.toggle("active");
        })
        pencilesLoc2.forEach((elem)=>{
            elem.classList.toggle("active");
        })
        binsLoc.forEach((elem)=>{
            elem.classList.toggle("active");
        })
        yesNoButtonsLoc.classList.toggle("active");
    })

    noButtonsLoc.addEventListener("click", ()=>{
        pencilesLoc1.forEach((elem)=>{
            elem.classList.remove("active");
        })
        pencilesLoc2.forEach((elem)=>{
            elem.classList.remove("active");
        })
        binsLoc.forEach((elem)=>{
            elem.classList.remove("active");
        })
        yesNoButtonsLoc.classList.remove("active");
    })

    yesButtonsLoc.addEventListener("click", ()=>{
        pencilesLoc1.forEach((elem)=>{
            elem.classList.remove("active");
        })
        pencilesLoc2.forEach((elem)=>{
            elem.classList.remove("active");
        })
        binsLoc.forEach((elem)=>{
            elem.classList.remove("active");
        })
        yesNoButtonsLoc.classList.remove("active");
    })
}