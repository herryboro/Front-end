let liEle = document.querySelectorAll('.nav_li');
let imgEle = document.querySelectorAll('.nav_li img');
let imgList = ['./img/home.PNG', './img/info.PNG', './img/data.PNG', './img/board.PNG'];

for(let i = 0; i < liEle.length; i++) {
  liEle[i].addEventListener('click', function(event) {
    for(let j = 0; j < liEle.length; j++) {
      liEle[j].classList.remove('active');
    }
    event.target.classList.add('active');
  
    let selectedName = event.target.querySelector('.nav_div').innerHTML;

    for(let k = 0; k < liEle.length; k++) {
      imgEle[k].src = imgList[k];
    }
    
    if(selectedName == '홈') {
      imgEle[0].src = './img/homeFocus.PNG';
    } else if(selectedName == '시정 홍보') {
      imgEle[1].src = './img/infoFocus.PNG';
    } else if(selectedName == '자료') {
      imgEle[2].src = './img/infoFocus.PNG';
    } else if(selectedName == '시정 게시판') {
      imgEle[3].src = './img/infoFocus.PNG';
    }
  });
}