window.addEventListener('load', solve);

function solve() {
    const nextButton = document.getElementById("next-btn");
    const preferenceList = document.querySelector(".preference-list");
    const confirmList = document.querySelector(".confirm-list");
    const thanksText = document.getElementById("thanks-text");

    const scent = document.getElementById("scent-type");
    const budget = document.getElementById("budget");
    const occasion = document.getElementById("occasion");
    const brand = document.getElementById("brand");
    const skinType = document.getElementById("skin-type");

    nextButton.addEventListener("click", function (e) {

        e.preventDefault();
        
        if (scent.value.trim() === '' ||   typeof scent.value !== "string"  ||
            budget.value.trim() === '' ||   typeof budget.value !== "string"  ||
            occasion.value.trim() === '' ||  typeof occasion.value !== "string" ||
            brand.value.trim() === '' ||    typeof brand.value !== "string" ||
            skinType.value.trim() === '' || typeof skinType.value !== "string" ) {
            return;
        }
    
        thanksText.textContent = "";
        
       
    let articleElementInfo = document.createElement("article");
    let liElementInfo = document.createElement("li");
    liElementInfo.setAttribute("class", "content");

    let scentType = document.createElement("p");
    scentType.textContent = `Scent Type: ${scent.value}`;

    let budgetType = document.createElement("p");
    budgetType.textContent = `Budget: ${budget.value} $`;

    let occasionType = document.createElement("p");
    occasionType.textContent = `Occasion: ${occasion.value}`;

    let brandType = document.createElement("p");
    brandType.textContent = `Brand: ${brand.value}`;

    let skinTypee = document.createElement("p");
    skinTypee.textContent = `Skin Type: ${skinType.value}`;

    let botnEdit = document.createElement("button");
    botnEdit.setAttribute("class", "edit-btn");
    botnEdit.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.setAttribute("class", "continue-btn");
    continueBtn.textContent = "Continue";

    articleElementInfo.appendChild(scentType);
    articleElementInfo.appendChild(budgetType);
    articleElementInfo.appendChild(occasionType);
    articleElementInfo.appendChild(brandType);
    articleElementInfo.appendChild(skinTypee);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(botnEdit);
    liElementInfo.appendChild(continueBtn);
    preferenceList.append(liElementInfo);



    let editScent = scent.value;
    let editBudget = budget.value;
    let editOccasion = occasion.value;
    let editBrand = brand.value;
    let editSkinType = skinType.value;

    scent.value = "";
    budget.value = "";
    occasion.value = "";
    brand.value = "";
    skinType.value = "";

    nextButton.disabled = true;

    //edit function
    botnEdit.addEventListener("click", onEdit);

    function onEdit() {

        scent.value = editScent;
        budget.value = editBudget;
        occasion.value = editOccasion;
        brand.value = editBrand;
        skinType.value = editSkinType;

      liElementInfo.remove();
      nextButton.disabled = false;

    }

     //continue function
     continueBtn.addEventListener("click", onNext);

     function onNext() {
       let liElementconfirm = document.createElement("li");
       liElementconfirm.setAttribute("class", "content");
 
       let articleElementContinue = articleElementInfo;
 
       let confirmBtn = document.createElement("button");
       confirmBtn.setAttribute("class", "confirm-btn");
       confirmBtn.textContent = "Confirm";

       let cancelBtn = document.createElement("button");
       cancelBtn.setAttribute("class", "cancel-btn");
       cancelBtn.textContent = "Cancel";
 
       articleElementContinue.appendChild(confirmBtn);
       articleElementContinue.appendChild(cancelBtn);
       liElementconfirm.appendChild(articleElementContinue);
 
       liElementInfo.remove();
       confirmList.appendChild(liElementconfirm);
       confirmBtn.addEventListener("click", onConfirm);

       function onConfirm() {
 
        liElementconfirm.remove();
        nextButton.disabled = false;
        thanksText.textContent = "Thank you for sharing your preferences!";
       }

       cancelBtn.addEventListener("click", onCancel);

       function onCancel() {
 
        liElementconfirm.remove();
        nextButton.disabled = false;
        
       }
       nextButton.disabled = true;

    }
    nextButton.disabled = true;
});
}

    
    
