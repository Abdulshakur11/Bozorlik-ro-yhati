var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button-first");
var elShoppingList = document.querySelector(".result-list");
var elCheckForm = document.querySelector(".check-form");
var elCheckResult = document.querySelector('.result-true-false');

var shoppingList = [];

elForm.addEventListener("submit", function (event) {
  event.preventDefault();
  elShoppingList.style.display = "block";
  shoppingList.push(elInput.value.trim());
  elInput.focus();
  elInput.value = null;

  showItem(); 
});


function showItem() {
  elShoppingList.innerHTML = "";
  for (var product of shoppingList) {
    var newProduct = document.createElement("li");
    var checkBox = document.createElement('input');
    var label = document.createElement('label');
    newProduct.classList.add('list-item');
    newProduct.appendChild(checkBox);
    checkBox.type = 'checkbox'; 
    newProduct.appendChild(label);
    label.textContent = product;
    elShoppingList.appendChild(newProduct);
    checkInput(checkBox, label)
  }
}


function checkInput(checkBox, label) {
  checkBox.addEventListener('click', function(){
    if (checkBox.checked) {
      label.style.textDecoration = 'line-through'
    } else {
      label.style.textDecoration = 'none'
    }
  });
}

elCheckForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var elCheckInput = document.querySelector(".check-input").value.trim();
  if(shoppingList.includes(elCheckInput)) {
    elCheckResult.style.display = 'block';
    elCheckResult.innerHTML = "Bu maxsulot qo'shilgan"
  }
  else {
    elInput.value = elCheckInput;
    elInput.focus();
    elCheckResult.style.display = 'block';
    elCheckResult.innerHTML = "Bu maxsulot yo'q ekan qo'shishni tanlang"
  }
});