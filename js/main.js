'use strict';

// ヘッダー固定
  function FixedAnime() {
    const headerH = $('#header').outerHeight(true);
    const scroll = $(window).scrollTop();
    if (scroll >= headerH){
        $('#header').addClass('fixed');
      }else{
        $('#header').removeClass('fixed');
      }
  }

  $(window).scroll(function () {
    FixedAnime();
  });
  $(window).on('load', function () {
    FixedAnime();
  });


// ハンバーガーメニュー
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  open.addEventListener('click',()=>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click',()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
    $('#hamburger').on('click', function(event) {
      $('.material-icons').trigger('click');
  });
}

  // Intersection Observer API
{
  function callback(entries, obs) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}



{
  // 文章作成
  function buttonClick(){
  text.innerText = '【'+ ticket.value+'】\n'+
  artist.value + '\n'+ title.value + '\n'+ venue.value +'\n'+ date.value +'\n'+ quantity.value +'\n' +way.value +'\n'+ 'ご連絡お待ちしております。';
  }
    
    
  const ticket =document.getElementById('ticket');
  const way =document.getElementById('way');
  const quantity =document.getElementById('quantity');
  const artist = document.getElementById('artist');
  const title = document.getElementById('title');
  const date = document.getElementById('date');
  const venue = document.getElementById('venue');

    
    
     // 送信
  const checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', buttonClick);
  

  // クリア
  function clear (){
    text.innerText = "　";
  }
  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click',clear);
    
  // コピー
  const copy = document.getElementById('copyButton');
    copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(text.innerText) 
 })

}

// ポーズ
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['ハグ', '指ハート', '猫ポーズ', '虫歯ポーズ', 'うさ耳ポーズ','顔ハート','ピース','指切りのポーズ','ウインク','ぶりっこポーズ'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
  });
  const button = document.getElementById("btn");
  button.addEventListener("mousedown", () => {button.classList.add("jump");});
  button.addEventListener("animationend", () => {button.classList.remove("jump");});
  button.addEventListener("animationcancel", () => {button.classList.remove("jump");});
}

