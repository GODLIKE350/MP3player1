document.getElementById('search').addEventListener('click', function() { 
    this.style.color = "red";
  setTimeout(() => {
    this.style.color = "";
  }, 500);
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header'); // Замените '.header' на вашу реальную селектор для header
    var menu = document.querySelector('aside'); // Замените '.menu' на вашу реальную селектор для меню
  
    if (window.pageYOffset > header.offsetHeight) {
      menu.style.position = 'fixed';
      menu.style.top = '20px';
      menu.style.left = '320px';
    } else {
      menu.style.position = 'fixed';
      menu.style.top = '90px';
      menu.style.left = '320px';
    }
  });