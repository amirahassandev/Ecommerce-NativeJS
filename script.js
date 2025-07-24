function copyMenu(){
    var dgtCategory = document.querySelector('.dgt-cat');
    var dgtPlace = document.querySelector('.departments');
    dgtPlace.innerHTML = dgtCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

const menuButton = document.querySelector('.trigger'),
     closeButton = document.querySelector('.t-close'),
     addClass = document.querySelector('.site');
    menuButton.addEventListener('click', function(){
        addClass.classList.toggle('showmenu')
    })
closeButton.addEventListener('click', function(){
    addClass.classList.remove('showmenu');
})

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand')
    this.closest('.has-child').classList.toggle('expand');
}

// ############################
// ######## Image Slider ##############
// ############################ //
var images = document.querySelector('.item img');
var i = 0;
setInterval(() => {
    images.src = `assets/slider/slider${i%3}.jpg`;
    i++;   
}, 3000);


function goToTheTop(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


// ############################
// ######## CART ##############
// ############################ //

function appearCart(){
    var cart = document.getElementById("cart");
    
    cart.classList.toggle("appearCart");
}

function clearProducts(){
    var itemsProduct = document.getElementById('itemsProduct');
    itemsProduct.style.display = 'none';
}

function deleteItemFromCart(event) {
    var clickedElement = event.target;
    var rowItem = clickedElement.closest('.rowItems');
    if (rowItem) {
        rowItem.remove();
    }
}
let counter = 0;
let totalPriceItem = 0;

function changePriceItem(rowItems){
    if(rowItems){
        var totalPriceItem = rowItems.querySelector('.center .totalPriceItem');
        var priceItem = rowItems.querySelector('.left .priceItem').textContent;
        totalPriceItem.textContent = counter * parseFloat(priceItem);
    }
}

function upCount(event) {
    var upButton = event.target;
    var rightDiv = upButton.closest('.right');
    var rowItems = upButton.closest('.rowItems');
    
    if (rightDiv) {
        var numProduct = rightDiv.querySelector('.numProduct');        
        if (numProduct) {
            counter++;
            numProduct.textContent = counter;
        }
    }
    changePriceItem(rowItems);

}

function downCount(event) {
    var downButton = event.target;
    var rightDiv = downButton.closest('.right');
    var rowItems = downButton.closest('.rowItems');

    if (rightDiv) {
        var numProduct = rightDiv.querySelector('.numProduct');
        
        if (numProduct) {
            if (counter > 0) {
                counter--;
            }
            numProduct.textContent = counter;
        }
    }
    changePriceItem(rowItems);
}

// ############################
// ######## Checkout Form ##############
// ############################ //

let result = document.getElementById("result");
function isUsernameValid(username){
    if (username === "") {
        result.innerHTML = "Enter Your Full Name*";
        return false;
    }
    return true;
}

function isPhoneValid(PhoneNumber){
    var specialCharacters = /[^0-9]/;
    if (PhoneNumber === "") {
        result.innerHTML = "Enter Your Phone Number*";
        return false;
    }
    else if (PhoneNumber.toString().length != 11) {
        result.innerHTML = "The Phone Number Is Invalid :(";
        return false;
    }    
    else if(specialCharacters.test(PhoneNumber)){
        result.innerHTML = "The Phone Number must be Number :(";
        return false;
    }
    else if(!PhoneNumber.startsWith(0)){
        result.innerHTML = "The Phone Number Is Invalid :(";
        return false;
    }
    return true;
}

function isAddressValid(Address){
        if (Address === "") {
            result.innerHTML = "Enter Your Address*";
        return false;
    }
    return true;
}




function isCityValid(city){
    if (city === "") {
        result.innerHTML = "Select Your City*";
    return false;
    }
    return true;
}

function validationCheckout() {
    var username = document.Formfile.FullName.value;
    var PhoneNumber = document.Formfile.PhoneNumber.value;
    var Address = document.Formfile.Address.value;
    var city = document.Formfile.city.value;
    if(isUsernameValid(username) && isPhoneValid(PhoneNumber) && isAddressValid(Address) && isCityValid(city)){
        return true;
    }
    return false;
}


function showCheckout(){
    var form = document.getElementById('form-box');
    form.classList.toggle('open-slide');
}

function showMsgCheckout(event){
    if(validationCheckout()){
        var msgCheckout = document.getElementById("msgCheckout");
        var formCheckout = document.getElementById("formCheckout");
        msgCheckout.style.right = "0";
        showCheckout();
        appearCart();
        setTimeout(() => {
            msgCheckout.style.right = "-380%";
        }, 3000);
        event.preventDefault();
        setTimeout(() => {
            formCheckout.submit();
        }, 3000);

    }
}