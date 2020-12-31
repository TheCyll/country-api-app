let darkMode = localStorage.getItem('darkMode');
const ball = document.getElementById('ball');
const root = document.documentElement;
const darkModeToggle = document.getElementById('darkmode-toggler');

const enableDarkMode = () => { 
  ball.style.transform = "translateX(24px)";
  ball.style.transition = "transform 0.15s linear";
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => { 
  ball.style.transform = "translateX(0px)"; 
  ball.style.transition = "transform 0.15s linear"; 
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click' , () => { 

  darkMode = localStorage.getItem('darkMode');
  if ( darkMode !== "enabled"){
    enableDarkMode();
  } else {
    disableDarkMode();
  }

});
