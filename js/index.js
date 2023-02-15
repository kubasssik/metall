

const $catalogLi = document.querySelectorAll('.catalog__li')
const $catalogUl = document.querySelector('.catalog__ul')
const $section = document.querySelector('section')
const $navBlocks = document.querySelector('.nav__blocks')
const $comAdd = document.querySelector('.com__add')
const $h3Category = document.getElementById('h3-category')
const $headerLi = document.querySelectorAll('.header__li')
const $aside = document.querySelector('aside')
const $caption = document.querySelector('caption')
const $connectionMessFixid = document.querySelector('.connection__mess_fixid')
const $conectBurger = document.querySelector('.conect__burger')
console.log($conectBurger);

$conectBurger.addEventListener('click', burgerPhoneMenu)

function burgerPhoneMenu(e) {
    $conectBurger.classList.toggle('conect__burger_active')
    if(!$conectBurger.classList.contains('conect__burger_active')){
        for (let i = 0; i < $conectBurger.children.length; i++) {
            $conectBurger.children[i].classList.add('conect__burger_position_active')
        }
}
else{
    for (let i = 0; i < $conectBurger.children.length; i++) { 
        $conectBurger.children[i].classList.remove('conect__burger_position_active')
    } 
}
}
$comAdd.addEventListener('mouseover', () => {
    $comAdd.children[0].style.transform = 'rotate(0deg)'
})
$comAdd.addEventListener('mouseout', () => {
    $comAdd.children[0].style.transform = 'rotate(360deg)'
})





$catalogLi.forEach(e => {
    e.addEventListener('click', pouringBlockCategory)
})
//pouring__block
function pouringBlockCategory(e) {
    $h3Category.style.width = '5%'
    $h3Category.textContent = '_'
    $caption.textContent = e.target.textContent

    setTimeout(() => {

        $h3Category.style.width = '100%'

    }, 500);
    setTimeout(() => {
        $h3Category.textContent = e.target.textContent

    }, 1000);

    $catalogLi.forEach(elem => {
        elem.classList.remove('pouring__block')
    })
    e.target.classList.add('pouring__block')
}




//кнопка скролл вверх
function ScrollTopFunc() {
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        //console.log(window.pageYOffset);
        //скрывает блок 
        if (scrolled > 80) {
            $navBlocks.classList.add('fixid__nav')
            $connectionMessFixid.classList.remove('display__none')
        }
        if (scrolled < 80) {
            $navBlocks.classList.remove('fixid__nav')
            $connectionMessFixid.classList.add('display__none')
        }
        if (scrolled > 300) {
            //console.log(coords);
            goTopBtn.style.display = 'block';
        }
        //показывает блок
        if (scrolled < 300) {
            //$navBlocks.classList.toggle('fixid__nav')
            goTopBtn.style.display = 'none';
        }
        if (scrolled > 800) {
            $aside.children[0].classList.add('catalog__ul_active')
        }
        //показывает блок
        if (scrolled < 800) {
          
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 10);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

}
ScrollTopFunc()