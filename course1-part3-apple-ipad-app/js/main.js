// BASKET
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', function(event) {
     // 장바구니 버튼 클릭시, 해당 클릭 이벤트가 윈도우까지 전달되지 않는다.
    event.stopPropagation();

    if (basketEl.classList.contains('show')) {
        hideBasket();
    } else {
        showBasket();
    }
});

basketEl.addEventListener('click', function(event) {
    // 드롭다운 메뉴를 클릭했을 때, 토글 버튼을 클릭하지 않은 상황이 만들어진다.
    event.stopPropagation();
});

window.addEventListener('click', function() {
    hideBasket();
});

function showBasket() {
    basketEl.classList.add('show');
}

function hideBasket() {
    basketEl.classList.remove('show');
}


// SEARCH
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')];
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
    headerEl.classList.add('searching');
    document.documentElement.classList.add('fixed');
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    });
    searchDelayEls.forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    });
    setTimeout(function() {
        searchInputEl.focus();
    }, 600);
}

function hideSearch() {
    headerEl.classList.remove('searching');
    document.documentElement.classList.remove('fixed');
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    });
    searchDelayEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    });
    searchDelayEls.reverse();
    searchInputEl.value = '';
}