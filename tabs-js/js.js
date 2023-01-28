let tabsBtn = document.querySelectorAll('.tabs__btn'),
    tabsIcons = document.querySelectorAll('.tabs__btn i'),
    tabsItem = document.querySelectorAll('.tabs__item');


tabsBtn.forEach((btn, index)=> {
    btn.addEventListener('click', ()=> {
        tabsBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        tabsItem.forEach(content => {
            content.classList.remove('active');
        });
        tabsIcons.forEach(icon => {
            icon.classList.remove('icon__active');
        });
        
        tabsBtn[index].classList.add('active');
        tabsItem[index].classList.add('active');
        tabsIcons[index].classList.add('icon__active');
    });
});