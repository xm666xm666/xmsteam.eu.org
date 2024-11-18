// backToTop.js
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
  
    // 当滚动时，显示或隐藏按钮
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
  
    // 点击按钮返回顶部
    backToTopButton.onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
      });
    };
  });
  