;(function(){
    'use strict';

    var btn  = document.querySelector('.header-nav__hamburgger');
    var html = document.querySelector('html');
    var menu = document.querySelector('#mainMenu');

    var menuOpened = false;
    var classMenu = 'menu-opened';

    html.addEventListener('click', function(e){
        if (e.target == html && menuOpened){
            closeMenu();
        }
    })

    function toggleMenu(e){
        if (menuOpened){
            closeMenu();
        } else {
            openMenu();
        }
    }

    function closeMenu(){
        menuOpened = false;
        html.classList.remove(classMenu);
        btn.blur();
        menu.setAttribute('aria-expanded', false);
        btn.setAttribute('aria-expanded', false);  
    }

    function openMenu(){
        menuOpened = true;
        html.classList.add(classMenu);
        menu.setAttribute('aria-expanded', true);
        btn.setAttribute('aria-expanded', true);  
    }

    btn.addEventListener('click', toggleMenu);

}())    