const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// const searchInputEl = document.querySelector('.search input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간(s), 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,     // 숫자 값은 자연스러운 전환 효과 있음
      display: 'none' // 문자 겂은 자연스러운 전환 효과는 없음 
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300/*ms*/))
// _.throttle(함수, 시간(ms))
