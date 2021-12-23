const menuBars = document.querySelector('.menu-bars');
const intro = document.querySelector('#intro');
const main = document.querySelector('.main-body');

const menuDiv = document.createElement('div');
menuDiv.className = 'toggle-nav';
const menuUl = document.createElement('ul');
const menuPortfolio = document.createElement('li');
menuPortfolio.textContent = 'Portfolio';
const menuAbout = document.createElement('li');
menuAbout.textContent = 'About';
const menuContact = document.createElement('li');
menuContact.textContent = 'Contact';
const closeBtn = document.createElement('span');
closeBtn.textContent = 'X';
closeBtn.id = 'toggle-close';
closeBtn.style.color = 'white';

menuUl.appendChild(menuPortfolio);
menuUl.appendChild(menuAbout);
menuUl.appendChild(menuContact);

menuDiv.appendChild(closeBtn);
menuDiv.appendChild(menuUl);

menuBars.addEventListener('click', () => {
    main.prepend(menuDiv);
    menuBars.style.display = 'none';
    menuDiv.style.display = 'block';
    menuDiv.style.backgroundColor = '#3C3A39';
    menuDiv.style.height = '100vh'
    console.log(menuDiv);
})

closeBtn.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    menuBars.style.display = 'block';
  });
  
  menuPortfolio.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.location = '#projects';
    menuBars.style.display = 'block';
  });
  
  menuAbout.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.location = '#about-me';
    menuBars.style.display = 'block';
  });
  
  menuContact.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.location = '#contact';
    menuBars.style.display = 'block';
  });