const btn=document.getElementById('menu-btn');//hamburger menu
const overlay = document.getElementById('overlay');//dark overlay when hamburger opne
const menu= document.getElementById('mobile-menu');
const counter=document.querySelectorAll('.counter'); //falcon9

btn.addEventListener('click',navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle(){
  btn.classList.toggle('open');

  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}




let scrollStarted = false;
function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}




function countUp(){
  counter.forEach((counter)=>{
    counter.innerHTML='0';

    const updateCounter= ()=>{
      //get count target
      const target = + counter.getAttribute('data-target');
      //get current values
      const c =+ counter.innerText;

      //craete an increment

      const increment=target/100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

countUp();

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}