// test.js 파일 내용
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
  
    var scrollPos = window.scrollY;
  
    header.style.top = scrollPos + 'px';
    nav.style.top = scrollPos + 'px';
  });
  