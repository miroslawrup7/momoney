const getOffsetTop = (elem)=> {

	let distance = 0;

	if (elem.offsetParent) {
		do {
			distance += elem.offsetTop;
			elem = elem.offsetParent;
		} while (elem);
	}

	return distance < 0 ? 0 : distance;
};

const getOffsetLeft = (elem)=> {

	let distance = 0;

	if (elem.offsetParent) {
		do {
			distance += elem.offsetLeft;
			elem = elem.offsetParent;
		} while (elem);
	}

	return distance < 0 ? 0 : distance;
};

// lang and currency switch

const currencyLoc_1 = document.querySelector(".form-elem_1 select");
const currencyFlagLoc_1 = document.querySelector(".form-elem_1 .flag-box .flag");
const currencyLoc_2 = document.querySelector(".form-elem_2 select");
const currencyFlagLoc_2 = document.querySelector(".form-elem_2 .flag-box .flag");

if (currencyLoc_1) {
    currencyLoc_1.addEventListener("change", () => {
        country = currencyLoc_1.value;
        currencyFlagLoc_1.src = `./img/${country}.svg`;
        currencyFlagLoc_1.alt = country;
    })
}

if (currencyLoc_2) {
    currencyLoc_2.addEventListener("change", () => {
        country = currencyLoc_2.value.substr(0,2);
        currencyFlagLoc_2.src = `./img/${country}.svg`;
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
    const apprBtnLoc = document.querySelectorAll(".table-revenue .button");

    apprBtnLoc.forEach((elem)=>{
        elem.addEventListener("mouseover", (e)=>{
            const apprBtnTooltipLoc = e.target.closest(".button").querySelector(".tooltip");
            apprBtnTooltipLoc.classList.add("active");
        });
        elem.addEventListener("mouseout", (e)=>{
            const apprBtnTooltipLoc = e.target.closest(".button").querySelector(".tooltip");
            apprBtnTooltipLoc.classList.remove("active");
        });
    })

    // add new budget
    const rightContentCoverLoc = document.querySelector(".right-content-cover");
    
    const addNewBudgetLoc = document.querySelector(".add-new-budget");
    
    const newBudgetPopupLoc = document.querySelector(".new-budget-popup");
    const closeBudgetBtnLoc = document.querySelector(".new-budget-popup .close-btn");
    const cancelBudgetBtnLoc = document.querySelector(".new-budget-popup .cancel-btn");

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
    
    const newRevenuePopupLoc = document.querySelector(".new-revenue-popup");
    const closeRevenueBtnLoc = document.querySelector(".new-revenue-popup .close-btn");
    const cancelRevenueBtnLoc = document.querySelector(".new-revenue-popup .cancel-btn");

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

    const editCategoryBtnLoc = document.querySelector(".edit-cat-btn");
    const pencilesLoc1 = document.querySelectorAll(".table-expenses .cell:nth-child(1) img");
    const pencilesLoc2 = document.querySelectorAll(".table-expenses .cell:nth-child(2) img");
    const binsLoc = document.querySelectorAll(".table-expenses .row .bin");
    const yesNoButtonsLoc = document.querySelector(".table-expenses .yes-no-buttons");

    const noButtonsLoc = document.querySelector(".table-expenses .yes-no-buttons .cancel-add");
    const yesButtonsLoc = document.querySelector(".table-expenses .yes-no-buttons .btn.add");
    
    const delCatPopupLoc = document.querySelector(".del-cat-popup");
    const delCatPopupCloseLoc = document.querySelector(".del-cat-popup .close-btn");
    const delCatPopupBtnLoc = document.querySelector(".del-cat-popup .add-btn");

    const delCatConfirmPopupLoc = document.querySelector(".del-cat-confirm-popup");
    const delCatConfirmPopupCloseBtnLoc = document.querySelector(".del-cat-confirm-popup .close-btn");
    const delCatConfirmPopupCancelBtnLoc = document.querySelector(".del-cat-confirm-popup .cancel-btn");


    editCategoryBtnLoc.addEventListener("click", ()=>{
        pencilesLoc1.forEach((elem)=>{
            elem.classList.add("active");
        })
        pencilesLoc2.forEach((elem)=>{
            elem.classList.add("active");
        })
        binsLoc.forEach((elem)=>{
            elem.classList.add("active");
        })
        yesNoButtonsLoc.classList.add("active");
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
        delCatPopupLoc.classList.remove("active");
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
        delCatPopupLoc.classList.remove("active");
    })

    binsLoc.forEach((elem)=>{
        elem.addEventListener("click", (e)=>{

            let elem = e.target;
            let offsetTop = getOffsetTop(elem);
            let offsetLeft = getOffsetLeft(elem);

            delCatPopupLoc.classList.add("active");
            delCatPopupLoc.style.top = `${offsetTop}px`;
            delCatPopupLoc.style.left = `${offsetLeft - 600}px`;

        })
    })

    delCatPopupCloseLoc.addEventListener("click", ()=>{
        delCatPopupLoc.classList.remove("active");
    })

    delCatPopupBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.add("active");
        delCatConfirmPopupLoc.classList.add("active");

        delCatConfirmPopupLoc.style.top = (document.documentElement.clientHeight / 2 - delCatConfirmPopupLoc.clientHeight / 2 + document.documentElement.scrollTop)  + "px"

        delCatPopupLoc.classList.remove("active");
delCatConfirmPopupLoc
    });

    delCatConfirmPopupCloseBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        delCatConfirmPopupLoc.classList.remove("active");
    })

    delCatConfirmPopupCancelBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        delCatConfirmPopupLoc.classList.remove("active");
    })

    //  budget toutorial
    const tutorialPopupLoc = document.querySelector(".popup-with-arrow-budget-1");

    const tutorialOffLoc = document.querySelector(".popup-with-arrow-budget-1 .cancel-btn");
    tutorialOffLoc.addEventListener("click", ()=>{
        tutorialPopupLoc.classList.add("inactive");
    })

    const tutorialNextLoc = document.querySelector(".popup-with-arrow-budget-1 .add-btn");
    tutorialNextLoc.addEventListener("click", ()=>{
        tutorialPopupLoc.classList.add("inactive");
    })

    const tutorialCloseLoc = document.querySelector(".popup-with-arrow-budget-1 .close-btn");
    tutorialCloseLoc.addEventListener("click", ()=>{
        tutorialPopupLoc.classList.add("inactive");
    })

    // VALIDATION NEW REVENUE

    const newRevenueErrorLoc = document.querySelector(".new-revenue-error");
    const newRevenueAmountLoc = document.querySelector(".new-revenue-amount input");
    const newRevenueCurrencyLoc = document.querySelector(".new-revenue-amount select");

    const addNewRevenueBtnLoc = document.querySelector(".new-revenue-popup .popup-buttons .add-btn");

    const accountInputLoc = document.querySelector(".new-revenue-popup .custom-list-2 select");
    const amountInputLoc = document.querySelector(".new-revenue-popup .custom-input-and-select-2 input");
    const dateInputLoc = document.querySelector(".new-revenue-popup .custom-input-date-2 input");
    const amountNameInputLoc = document.querySelector(".new-revenue-popup .custom-input-1 input");

    const newRevenueAllErrorLoc = document.querySelector(".new-revenue-popup .new-revenue-all-error");

    newRevenueAmountLoc.addEventListener("input", (e)=>{
        if (isNaN(newRevenueAmountLoc.value)) {
            newRevenueErrorLoc.innerText = "Kwota musi być liczbą!";
            e.target.style.border = "1px #E90000 solid";
            newRevenueCurrencyLoc.style.border = "1px #E90000 solid";
            newRevenueCurrencyLoc.style.borderLeft = "none";
        } else {
            newRevenueErrorLoc.innerText = "";
            e.target.style.border = "1px #acacac solid";
            newRevenueCurrencyLoc.style.border = "1px #acacac solid";
            newRevenueCurrencyLoc.style.borderLeft = "none";
        }
    })

    addNewRevenueBtnLoc.addEventListener("click", ()=>{

        newRevenueAllErrorLoc.innerText = ""

        if (!accountInputLoc.value || !amountInputLoc.value || !dateInputLoc.value || !amountNameInputLoc.value) {
            newRevenueAllErrorLoc.innerText = "Nie wszystkie pola zostały wypełnione!"
        } else if (newRevenueErrorLoc.innerText) {
            newRevenueAllErrorLoc.innerText = "Pola zawierają błędy!"
        } else {
            newRevenueAllErrorLoc.innerText = ""
        }
        
    })

}

// ACCOUNTS
const accountsPageLoc = document.querySelector(".accounts-page");

if (accountsPageLoc) {

    // accounts toutorial

    const tutorialPopupLoc = document.querySelector(".popup-with-arrow-accounts-1");

    const tutorialOffLoc = document.querySelector(".popup-with-arrow-accounts-1 .cancel-btn");
    tutorialOffLoc.addEventListener("click", ()=>{
        tutorialPopupLoc.classList.add("inactive");
    })

    const tutorialNextLoc = document.querySelector(".popup-with-arrow-accounts-1 .add-btn");
    tutorialNextLoc.addEventListener("click", ()=>{
        tutorialPopupLoc.classList.add("inactive");
    })

    const tutorialCloseLoc = document.querySelector(".popup-with-arrow-accounts-1 .close-btn");
    tutorialCloseLoc.addEventListener("click", ()=>{
        tutorialPopupLoc.classList.add("inactive");
    });

    //  add new account
    const rightContentCoverLoc = document.querySelector(".right-content-cover");
    
    const addNewAccountLoc = document.querySelector(".add-new-account");
    
    const newAccountPopupLoc = document.querySelector(".new-account-popup");
    const closeAccountBtnLoc = document.querySelector(".new-account-popup .close-btn");
    const cancelAccountBtnLoc = document.querySelector(".new-account-popup .cancel-btn");

    addNewAccountLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.add("active");
        newAccountPopupLoc.classList.add("active");
    });
    
    closeAccountBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newAccountPopupLoc.classList.remove("active");
    });
    
    cancelAccountBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newAccountPopupLoc.classList.remove("active");
    });

    //  add new sync account
    
    const nextAccountBtnLoc = document.querySelector(".new-account-popup .add-btn");
    const newSyncAccountPopupLoc = document.querySelector(".new-sync-account-popup");
    const newNonSyncAccountPopupLoc = document.querySelector(".new-non-sync-account-popup");
    const syncAccountRadioLoc = document.querySelector(".new-account-popup #sync-acc");
    
    
    nextAccountBtnLoc.addEventListener("click", ()=>{
        if (syncAccountRadioLoc.checked === true) {
            newSyncAccountPopupLoc.classList.add("active");
        } else {
            newNonSyncAccountPopupLoc.classList.add("active");
        }
         newAccountPopupLoc.classList.remove("active");
    });
 
    const closeSyncAccountBtnLoc = document.querySelector(".new-sync-account-popup .close-btn");
    const cancelSyncAccountBtnLoc = document.querySelector(".new-sync-account-popup .cancel-btn");

    closeSyncAccountBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newSyncAccountPopupLoc.classList.remove("active");
    });
    
    cancelSyncAccountBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newSyncAccountPopupLoc.classList.remove("active");
    });

    const closeNonSyncAccountBtnLoc = document.querySelector(".new-non-sync-account-popup .close-btn");
    const cancelNonSyncAccountBtnLoc = document.querySelector(".new-non-sync-account-popup .cancel-btn");

    closeNonSyncAccountBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newNonSyncAccountPopupLoc.classList.remove("active");
    });
    
    cancelNonSyncAccountBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newNonSyncAccountPopupLoc.classList.remove("active");
    });

    // VALIDATION NEW ACCOUNT

    const newAccountErrorLoc = document.querySelector(".new-account-error");
    const newAccountBalanceLoc = document.querySelector(".new-sync-account-popup .custom-input-and-select-2 input");
    const newAccountCurrencyLoc = document.querySelector(".new-sync-account-popup .custom-input-and-select-2 select");

    const addNewAccounteBtnLoc = document.querySelector(".new-sync-account-popup .popup-buttons .add-btn");

    const accountNameInputLoc = document.querySelector(".new-sync-account-popup .custom-input-1 input");

    const newAccountAllErrorLoc = document.querySelector(".new-sync-account-popup .new-account-all-error");

    newAccountBalanceLoc.addEventListener("input", (e)=>{
        if (isNaN(newAccountBalanceLoc.value)) {
            newAccountErrorLoc.innerText = "Kwota musi być liczbą!";
            e.target.style.border = "1px #E90000 solid";
            newAccountCurrencyLoc.style.border = "1px #E90000 solid";
            newAccountCurrencyLoc.style.borderLeft = "none";
        } else {
            newAccountErrorLoc.innerText = "";
            e.target.style.border = "1px #acacac solid";
            newAccountCurrencyLoc.style.border = "1px #acacac solid";
            newAccountCurrencyLoc.style.borderLeft = "none";
        }
    })

    addNewAccounteBtnLoc.addEventListener("click", ()=>{

        newAccountAllErrorLoc.innerText = ""

        if (!newAccountBalanceLoc.value || !accountNameInputLoc.value) {
            newAccountAllErrorLoc.innerText = "Nie wszystkie pola zostały wypełnione!"
        } else if (newAccountErrorLoc.innerText) {
            newAccountAllErrorLoc.innerText = "Pola zawierają błędy!"
        } else {
            newAccountAllErrorLoc.innerText = ""
        }
        
    })

}

// TRANSACTIONS
const transactionsPageLoc = document.querySelector(".transactions-page");


if (transactionsPageLoc) {
   
    const addTransactionBtnLoc = document.querySelector(".transactions-page .btn.add");
 
    const addTransactionSectionLoc = document.querySelector(".transactions-page .add-new-transaction");

    addTransactionBtnLoc.addEventListener("click",()=>{
        addTransactionSectionLoc.classList.add("active");
    })

    const cancelTransactionBtnLoc = document.querySelector(".transactions-page .cancel-add");

    cancelTransactionBtnLoc.addEventListener("click",()=>{
        addTransactionSectionLoc.classList.remove("active");
    })
}

// TARGETS

const targetsPageLoc = document.querySelector(".targets-page");

if (targetsPageLoc) {

    const radioMonthlyLoc = document.querySelector("#monthly");
    const radioDeadlineLoc = document.querySelector("#deadline");
    const calendarInputLoc = document.querySelector(".custom-input-date-2");
    const amountInputLoc = document.querySelector(".custom-input-and-select-2 input");
    const rightContentCoverLoc = document.querySelector(".right-content-cover");
    const addTargetBtnLoc = document.querySelector(".targets-page .button.add-target");
    const newTargetPopup = document.querySelector(".new-target-popup");
    const closeTargetBtnLoc = document.querySelector(".new-target-popup .close-btn");
    const cancelTargetBtnLoc = document.querySelector(".new-target-popup .cancel-btn");
    
    radioMonthlyLoc.addEventListener("change", ()=>{
        if (radioMonthlyLoc) {
            calendarInputLoc.classList.remove("active");
            amountInputLoc.placeholder = "Podaj kwotę miesięczną"
        }
    })

    radioDeadlineLoc.addEventListener("change", ()=>{
        if (radioDeadlineLoc) {
            calendarInputLoc.classList.add("active");
            amountInputLoc.placeholder = "Podaj kwotę docelową"
        }
    })

    addTargetBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.add("active");
        newTargetPopup.classList.add("active");
        radioMonthlyLoc.checked = true;
        calendarInputLoc.classList.remove("active");
        amountInputLoc.placeholder = "Podaj kwotę miesięczną"
    })
    
    closeTargetBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newTargetPopup.classList.remove("active");
    });
    
    cancelTargetBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newTargetPopup.classList.remove("active");
    });

    const addLimitBtnLoc = document.querySelector(".targets-page .button.add-limit");
    const newLimitPopup = document.querySelector(".new-limit-popup");
    const closeLimitBtnLoc = document.querySelector(".new-limit-popup .close-btn");
    const cancelLimitBtnLoc = document.querySelector(".new-limit-popup .cancel-btn");


    addLimitBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.add("active");
        newLimitPopup.classList.add("active");
    })
    
    closeLimitBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newLimitPopup.classList.remove("active");
    });
    
    cancelLimitBtnLoc.addEventListener("click", ()=>{
        rightContentCoverLoc.classList.remove("active");
        newLimitPopup.classList.remove("active");
    });

    // VALIDATION NEW TARGET

    const newTargetErrorLoc = document.querySelector(".new-target-error");
    const newTargetAmountLoc = document.querySelector(".new-target-popup .custom-input-and-select-2 input");
    const newTargetCurrencyLoc = document.querySelector(".new-target-popup .custom-input-and-select-2 select");

    const addNewTargetBtnLoc = document.querySelector(".new-target-popup .popup-buttons .add-btn");

    const targetNameInputLoc = document.querySelector(".new-target-popup .custom-input-1 input");
    const targetDateInputLoc = document.querySelector(".new-target-popup .custom-input-date-2 input");

    const newTargetAllErrorLoc = document.querySelector(".new-target-popup .new-target-all-error");

    const monthlyRadio = document.querySelector(".new-target-popup #monthly");

    newTargetAmountLoc.addEventListener("input", (e)=>{
        if (isNaN(newTargetAmountLoc.value)) {
            newTargetErrorLoc.innerText = "Kwota musi być liczbą!";
            e.target.style.border = "1px #E90000 solid";
            newTargetCurrencyLoc.style.border = "1px #E90000 solid";
            newTargetCurrencyLoc.style.borderLeft = "none";
        } else {
            newTargetErrorLoc.innerText = "";
            e.target.style.border = "1px #acacac solid";
            newTargetCurrencyLoc.style.border = "1px #acacac solid";
            newTargetCurrencyLoc.style.borderLeft = "none";
        }
    })

    addNewTargetBtnLoc.addEventListener("click", ()=>{

        newTargetAllErrorLoc.innerText = ""

        if (monthlyRadio.checked) {
            if (!newTargetAmountLoc.value || !targetNameInputLoc.value) {
                newTargetAllErrorLoc.innerText = "Nie wszystkie pola zostały wypełnione!"
            } else if (newTargetErrorLoc.innerText) {
                newTargetAllErrorLoc.innerText = "Pola zawierają błędy!"
            } else {
                newTargetAllErrorLoc.innerText = ""
            }
        } else {
            if (!newTargetAmountLoc.value || !targetNameInputLoc.value || !targetDateInputLoc.value) {
                newTargetAllErrorLoc.innerText = "Nie wszystkie pola zostały wypełnione!"
            } else if (newTargetErrorLoc.innerText) {
                newTargetAllErrorLoc.innerText = "Pola zawierają błędy!"
            } else {
                newTargetAllErrorLoc.innerText = ""
            }
        }
    })

    // VALIDATION NEW LIMIT

    const newLimitErrorLoc = document.querySelector(".new-limit-error");
    const newLimitBalanceLoc = document.querySelector(".new-limit-popup .custom-input-and-select-2 input");
    const newLimitCurrencyLoc = document.querySelector(".new-limit-popup .custom-input-and-select-2 select");

    const addNewLimitBtnLoc = document.querySelector(".new-limit-popup .popup-buttons .add-btn");

    const limitNameInputLoc = document.querySelector(".new-limit-popup .custom-list-2 select");

    const newLimitAllErrorLoc = document.querySelector(".new-limit-popup .new-limit-all-error");

    newLimitBalanceLoc.addEventListener("input", (e)=>{
        if (isNaN(newLimitBalanceLoc.value)) {
            newLimitErrorLoc.innerText = "Kwota musi być liczbą!";
            e.target.style.border = "1px #E90000 solid";
            newLimitCurrencyLoc.style.border = "1px #E90000 solid";
            newLimitCurrencyLoc.style.borderLeft = "none";
        } else {
            newLimitErrorLoc.innerText = "";
            e.target.style.border = "1px #acacac solid";
            newLimitCurrencyLoc.style.border = "1px #acacac solid";
            newLimitCurrencyLoc.style.borderLeft = "none";
        }
    })

    addNewLimitBtnLoc.addEventListener("click", ()=>{

        newLimitAllErrorLoc.innerText = ""

        if (!newLimitBalanceLoc.value || !limitNameInputLoc.value) {
            newLimitAllErrorLoc.innerText = "Nie wszystkie pola zostały wypełnione!"
        } else if (newLimitErrorLoc.innerText) {
            newLimitAllErrorLoc.innerText = "Pola zawierają błędy!"
        } else {
            newLimitAllErrorLoc.innerText = ""
        }
        
    })

}

// TARGETS MOMONEY

const targetsMomoneyPageLoc = document.querySelector(".targets-momoney-page");
    
if (targetsMomoneyPageLoc) {



    const editTargetLoc = document.querySelectorAll(".timeline .edit-target-btn");
    const editTargetPopupLoc = document.querySelector(".edit-target-step-popup");
    const titleEditTargetPopupLoc = document.querySelector(".edit-target-step-popup .title");
    const cancelTargetPopupLoc = document.querySelector(".edit-target-step-popup .cancel-btn");
    const closeTargetPopupLoc = document.querySelector(".edit-target-step-popup .close-btn");

    const rightContentCoverLoc = document.querySelector(".right-content-cover");
    
    editTargetLoc.forEach((elem)=>{
        elem.addEventListener("click", (e)=>{
            editTargetPopupLoc.classList.add("active");
            rightContentCoverLoc.classList.add("active")
            titleEditTargetPopupLoc.innerText = "Dostosuj " + e.currentTarget.parentNode.querySelector(".step-title").innerText;
        })
    })

    cancelTargetPopupLoc.addEventListener("click", ()=>{
        editTargetPopupLoc.classList.remove("active");
        rightContentCoverLoc.classList.remove("active")
    })

    closeTargetPopupLoc.addEventListener("click", ()=>{
        editTargetPopupLoc.classList.remove("active");
        rightContentCoverLoc.classList.remove("active")
    })
       
}

// NOTIFICATIONS

const notificationsBtnLoc = document.querySelector(".notifications-btn");
const notificationsLoc = document.querySelector(".notifications");
const notificationsCloseBtnLoc = document.querySelector(".notifications .close-btn");
const notificationsAllViewLoc = document.querySelector(".notifications .all-notifications-btn");



if (notificationsBtnLoc) {

    notificationsBtnLoc.addEventListener("click", ()=>{
        notificationsLoc.classList.add("active")
    })

    notificationsCloseBtnLoc.addEventListener("click", ()=>{
        notificationsLoc.classList.remove("active")
    })

    notificationsAllViewLoc.addEventListener("click", ()=>{
        notificationsLoc.classList.remove("active")
        location.href = "notifications.html";
    })

}

// LEFT MENU

const lefMenuLoc = document.querySelector(".left-menu");
const hideMenuBtnLoc = document.querySelector(".left-menu .arrow img");

if (lefMenuLoc) {
    hideMenuBtnLoc.addEventListener("click", ()=>{
        lefMenuLoc.classList.toggle("narrow")
    })
}

// REGISTRATION VALIDATION

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const validatePass = (pass) => {
    return pass.match(/^(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{6,}$/);
}

const registrationPageLoc = document.querySelector(".registration-page");

if (registrationPageLoc) {

    // registration email
    
    const emailInputLoc = document.querySelector(".registration-page #email");
    const emailErrorLoc = document.querySelector(".registration-page .email-error");

    let firstEnterToEmail = false;
    let firstEnterToPass = false;
    let firstEnterToRePass = false;

    const correct = (e_target, errBox)=>{
        errBox.innerText = ""
        e_target.style.border = "1px #707070 solid"
    }

    const incorrect = (e_target, errBox, errMsg)=>{
        errBox.innerText = errMsg;
        e_target.style.border = "1px #E90000 solid";
       
    }
    
    emailInputLoc.addEventListener("blur", (e)=>{
        if (validateEmail(emailInputLoc.value) || !emailInputLoc.value) {
            correct(e.target, emailErrorLoc)
        } else {
            incorrect(e.target, emailErrorLoc, "Adres e-mail niepoprawny!")
            firstEnterToEmail = true;
        } 
    })

    emailInputLoc.addEventListener("input", (e)=>{
        if (firstEnterToEmail) {
            if (validateEmail(emailInputLoc.value) || !emailInputLoc.value) {
                correct(e.target, emailErrorLoc)
            } else {
                incorrect(e.target, emailErrorLoc, "Adres e-mail niepoprawny!")
            }
        }
    })

    // registration password
    
    const passInputLoc = document.querySelector(".registration-page #pass");
    const passErrorLoc = document.querySelector(".registration-page .pass-error");

    passInputLoc.addEventListener("blur", (e)=>{
        if (validatePass(passInputLoc.value) || !passInputLoc.value) {
            correct(e.target, passErrorLoc)
        } else {
            incorrect(e.target, passErrorLoc, "Hasło niepoprawne!")
            firstEnterToPass = true;
        } 
    })

    passInputLoc.addEventListener("input", (e)=>{
        if (firstEnterToPass) {
            if (validatePass(passInputLoc.value) || !passInputLoc.value) {
                correct(e.target, passErrorLoc)
            } else {
                incorrect(e.target, passErrorLoc, "Hasło niepoprawne!")
            }
        }
    })

    // registration re-password
    
    const repassInputLoc = document.querySelector(".registration-page #re-pass");
    const repassErrorLoc = document.querySelector(".registration-page .re-pass-error");

    repassInputLoc.addEventListener("blur", (e)=>{
        if (repassInputLoc.value === passInputLoc.value || !repassInputLoc.value) {
            correct(e.target, repassErrorLoc)
        } else {
            incorrect(e.target, repassErrorLoc, "Hasła nie są identyczne!")
            firstEnterToRePass = true;
        } 
    })

    repassInputLoc.addEventListener("input", (e)=>{
        if (firstEnterToRePass) {
            if (repassInputLoc.value === passInputLoc.value || !repassInputLoc.value) {
                correct(e.target, repassErrorLoc)
            } else {
                incorrect(e.target, repassErrorLoc, "Hasła nie są identyczne!")
            }
        }
    })

    // show password

    const passShowBtnLoc = document.querySelector(".registration-page .pass img");

    passShowBtnLoc.addEventListener("click", ()=>{
        if (passInputLoc.type === "password") {
            passInputLoc.type = "text"
        } else {
            passInputLoc.type = "password"
        }
    })

    const repassShowBtnLoc = document.querySelector(".registration-page .re-pass img");

    repassShowBtnLoc.addEventListener("click", ()=>{
        if (repassInputLoc.type === "password") {
            repassInputLoc.type = "text"
        } else {
            repassInputLoc.type = "password"
        }
    })

    // registration button

    const registrationBtnLoc = document.querySelector(".registration-page .register");
    const termsInputLoc = document.querySelector(".registration-page .terms input");
    const registerErrorLoc = document.querySelector(".registration-page .register-error");

    registrationBtnLoc.addEventListener("click", ()=>{
        registerErrorLoc.innerText = "";
        if (!emailInputLoc.value || !passInputLoc.value || !repassInputLoc.value || !termsInputLoc.checked) {
            registerErrorLoc.innerText = "Nie wszystkie pola zostały wypełnione!";
        } else if (emailErrorLoc.innerText || passErrorLoc.innerText || repassErrorLoc.innerText) {
            registerErrorLoc.innerText = "Pola zawierają błędy!";
        } else {
            location.href = "registration_2.html";
        }
    })
}