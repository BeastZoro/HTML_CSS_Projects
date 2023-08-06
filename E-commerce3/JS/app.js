let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.nav-main');
let navItems = document.getElementsByClassName('.nav-main-list-item');

hamburger.addEventListener('click', () =>{
    // hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

for ( option of navItems ){
    option.addEventListener('onclick', () =>{
    navbar.classList.toggle('active');
});
}

// sigin toggler
let signIn = document.querySelector('.sigin-login');
let signInBtn = document.querySelector('.signin');

let signinTab = document.querySelector('.tab-sign-in');
let loginTab = document.querySelector('.tab-log-in');
let signinForm = document.querySelector('#sign-in-form');
let loginForm = document.querySelector('#log-in-form');
let back = document.querySelector('.back');

signInBtn.addEventListener('click', () =>{
    signIn.classList.toggle('active');
});

signinTab.addEventListener('click', () =>{
    loginForm.style.left = '100%';
    signinForm.style.left = '00'
    back.style.left = '0';
  });

  loginTab.addEventListener('click', () =>{
    signinForm.style.left = '-100%'
    loginForm.style.left = '00';
    back.style.left = '50%';
  });



// dropdown list toggler

let dropdown = document.getElementById('ddownlist'); //div
let ddowntext = document.getElementById('ddowntext');  // div text
let options = document.getElementsByClassName('option'); //li
let list = document.getElementById('list') //ul
let dropdownArrow = document.getElementById('dropIcon');

dropdown.onclick = function(){
    list.classList.toggle("visible");
    dropdownArrow.classList.toggle('rotate');
}

for (let i = 0; i < options.length; i++){
    options[i].onclick = function(){
        ddowntext.innerHTML = this.textContent; 
        list.classList.toggle("visible");
        dropdownArrow.classList.toggle('rotate');
    }
}

// latest products filter

let filterBtns = document.querySelector('#filter-btns').children; //  latest product filter links
let items = document.querySelector('.lp-grid').children; // latest product cards

for(let i = 0; i < filterBtns.length; i++){
    filterBtns[i].addEventListener('click', function(){
        for( let j = 0; j < filterBtns.length; j++){
            filterBtns[j].classList.remove('active-all'); //remove the active-all class from all inactive links
        }
        this.classList.add('active-all'); // add the active-all class to current link

        let target = this.getAttribute('data-target')
        for( let k = 0; k < items.length; k++){
            items[k].style.display = 'none';
            if(target == items[k].getAttribute("data-id")){
                items[k].style.display = 'block'
            }

            if(target == 'all'){
                items[k].style.display = 'block';
            }
        }
    })
}








