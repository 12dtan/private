
// Cần hỗ trợ hãy liên hệ: 
// Mr-Nam http://facebook.com/nam.nodemy
// Các bạn muốn học lập trình thì tham gia Nhóm zalo tự học lập trình nhé: https://zalo.me/g/yhdkef092

var to = nameGirl;
var gift_url = 'https://www.facebook.com/profile.php?id=100033413863056';
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = 'Happy Birthday Kieu';
  document.querySelector('#card .content-card').innerHTML = 'Hope I did not spoil your birthday So I will close this note to you with good luck and wishes too Happy Birthday';
  document.querySelector('#card .honey').setAttribute('src', `${giftImage}`);

  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

