/* Show Responsive Menu */
let menu = document.querySelector('#menu');
let ham = document.querySelector('#navigation__button');
let open = document.querySelector('#open');
let close = document.querySelector('#close');

ham.addEventListener("click", () => {
if(getComputedStyle(close).display != "none"){
    menu.classList.add("hydeMenu");
    close.style.display = "none";
    open.style.display = "block";
  } else {
    menu.classList.remove("hydeMenu")
    close.style.display = "block";
    open.style.display = "none";
  }
})

/* Open Drop-Down Menu */
var dropdown = document.querySelectorAll('#drop-down__menu');
var dropdownArray = Array.prototype.slice.call(dropdown,0);

window.addEventListener('mouseup', function(event) {
  dropdownArray.forEach( (el) => {
    var button = el.querySelector('a[data-toggle="dropdown"]'),
    submenu = el.querySelector('#submenu__list'),
    arrowdark = button.querySelector('#arrow__dark'),
    arrowlight = button.querySelector('#arrow__light');

    if(event.target != button) {
      submenu.style.display = 'none';
      arrowdark.style.transform = "rotate(0deg)"
      arrowlight.style.transform = "rotate(0deg)"
    } button.onclick = (event) => {
      if(getComputedStyle(submenu).display != "none"){
        arrowdark.style.transform = "rotate(0deg)"
        arrowlight.style.transform = "rotate(0deg)"
        submenu.style.display = "none";
        event.preventDefault();
      }
      else {
        arrowdark.style.transform = "rotate(180deg)"
        arrowlight.style.transform = "rotate(180deg)"
        submenu.style.display = "block";
      }
    };
  })
})



  /* dropdownArray.forEach( (el) => {
  var button = el.querySelector('a[data-toggle="dropdown"]'),
      submenu = el.querySelector('#submenu__list'),
			arrow = button.querySelector('#arrow'); //querySelectorAll ne fonctionne pas
  
      button.onclick = (event) => {
        if(getComputedStyle(submenu).display != "none"){
          arrow.style.transform = "rotate(0deg)"
          submenu.style.display = "none";
          event.preventDefault();
        }
        else {
          arrow.style.transform = "rotate(180deg)"
          submenu.style.display = "block";
        }
      };
}) */

/* 
dropdownArray.forEach( (el) => {
  var button = el.querySelector('a[data-toggle="dropdown"]'),
      submenu = el.querySelector('#submenu__list'),
      arrowdark = button.querySelector('#arrow__dark'),
			arrowlight = button.querySelector('#arrow__light'); //querySelectorAll ne fonctionne pas
  
      button.onclick = (event) => {
        if(getComputedStyle(submenu).display != "none"){
          arrowdark.style.transform = "rotate(0deg)"
          arrowlight.style.transform = "rotate(0deg)"
          submenu.style.display = "none";
          event.preventDefault();
        }
        else {
          arrowdark.style.transform = "rotate(180deg)"
          arrowlight.style.transform = "rotate(180deg)"
          submenu.style.display = "block";
        }
      };
})

window.addEventListener('mouseup', function(event) {
  dropdownArray.forEach( (el) => {
  var button = el.querySelector('a[data-toggle="dropdown"]');  var submenu = el.querySelector('#submenu__list');
    if(event.target != button) {
      submenu.style.display = 'none';
    } 
  })
})
 */


/*   let self = this;
  window.addEventListener('click', function(e){
    // close dropdown when clicked outside
    if (!self.$el.contains(e.target)){
      self.dropDropdown = false
    } 
  }) */




