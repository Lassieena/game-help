'use strict';
//サイコロ
const dice = document.getElementById('dice');
function diceButton() {
  const bignumber = document.getElementById('bignumber').value;
  const random1 = Math.floor(Math.random() * bignumber + 1);
  dice.innerHTML = random1;
};


//音楽再生
var whatmusic = true;

const timerMusic = new Audio();
var audioArr = new Array(
  "audio/1.mp3",
  "audio/2.mp3",
  "audio/3.mp3",
  "audio/4.mp3",
  "audio/5.mp3",
  "audio/6.mp3",
  "audio/7.mp3",
  "audio/8.mp3",
  "audio/9.mp3",
  "audio/10.mp3",
);

function musicStart() {
  playAudio();
}

function playAudio() {
  timerMusic.volume = 0.2;
  timerMusic.loop = true;
  if (whatmusic == true) {
    whatmusic = true;
    const random2 = Math.floor(Math.random() * audioArr.length);
    timerMusic.src = audioArr[random2];
    timerMusic.play();
  } else {
    timerMusic.play();
  }
}

function musicStop() {
  whatmusic = false;
  timerMusic.pause();
}

function musicReset() {
  whatmusic = true;
  timerMusic.pause();
  timerMusic.currentTime = 0;
}

//音量
function volumebig() {
  var vl = timerMusic.volume;
  if (vl < 1.0) {
    timerMusic.volume = Math.round((vl + 0.1)* 10)/ 10;
    setTimeout("fadein()",200);
  }
}
function volumesmall() {
  var vl = timerMusic.volume;
  if (vl > 0) {
    timerMusic.volume = Math.round((vl - 0.1)* 10)/ 10;
    setTimeout("fadein()",200);
  }
}



//電卓
var myTotal = 0;
var myInput = "";
var myCalc = "+";
var myFlg = 1;

function myValue(myData) {
  myFlg = 0;
  myInput += myData;
  document.myForm.myLine.value = myInput;
}

function myCalculate(myData) {
  if (myFlg == 0) {
    myFlg = 1;
    var myWork = myTotal + myCalc + myInput;
    myTotal = eval(myWork);
    myInput = "";
    document.myForm.myLine.value = myTotal;
      }
      if (myData == "=") {
        myTotal = 0;
        myCalc = "+";
  } else {
    myCalc = myData;
  }
}

function myC() {
  myTotal = 0;
  myCalc = "+";
  myInput = "";
  document.myForm.myLine.value = myTotal;
}

function mytextbox() {
  document.getElementById('dentacusuuji').disabled = true;
}











//メンバー
function selectboxChange() {
  const name = document.getElementById('name');
  const target = document.getElementById('target');
  const selindex = target.selectedIndex;
  const RANK = document.getElementById('RANK');

  const MeMo = '<textarea cols="100" rows="2" id="playerMemo"></textarea>';
  const one = '<p>プレイヤー1<input  type="text" id="Players"></p>' + MeMo;
  const two = '<p>プレイヤー2<input  type="text" id="Players"></p>' + MeMo;
  const three = '<p>プレイヤー3<input  type="text" id="Players"></p>' + MeMo;
  const four = '<p>プレイヤー4<input  type="text" id="Players"></p>' + MeMo;
  const five = '<p>プレイヤー5<input  type="text" id="Players"></p>' + MeMo;
  const six = '<p>プレイヤー6<input  type="text" id="Players"></p>' + MeMo;
  const seven = '<p>プレイヤー7<input  type="text" id="Players"></p>' + MeMo;
  const eight = '<p>プレイヤー8<input  type="text" id="Players"></p>' + MeMo;
  const nine = '<p>プレイヤー9<input  type="text" id="Players"></p>' + MeMo;
  const ten = '<p>プレイヤー10<input type="text" id="Players"></p>' + MeMo;
  const Rone = '<p>1位<input type="text" id="Players"></p>';
  const Rtwo = '<p>2位<input type="text" id="Players"></p>';
  const Rthree = '<p>3位<input type="text" id="Players"></p>';
  const Rfour = '<p>4位<input type="text" id="Players"></p>';
  const Rfive = '<p>5位<input type="text" id="Players"></p>';
  const Rsix = '<p>6位<input type="text" id="Players"></p>';
  const Rseven = '<p>7位<input type="text" id="Players"></p>';
  const Reight = '<p>8位<input type="text" id="Players"></p>';
  const Rnine = '<p>9位<input type="text" id="Players"></p>';
  const Rten = '<p>10位<input type="text" id="Players"></p>';

  switch (selindex) {
    case 1:
      name.innerHTML = one;
      RANK.innerHTML = Rone;
      break;
    case 2:
      name.innerHTML = one + two;
      RANK.innerHTML = Rone + Rtwo;
      break;
    case 3:
      name.innerHTML = one + two + three;
      RANK.innerHTML = Rone + Rtwo + Rthree;
      break;
    case 4:
      name.innerHTML = one + two + three + four;
      RANK.innerHTML = Rone + Rtwo + Rthree + Rfour;
      break;
    case 5:
      name.innerHTML = one + two + three + four + five;
      RANK.innerHTML = Rone + Rtwo + Rthree + Rfour + Rfive;
      break;
    case 6:
      name.innerHTML = one + two + three + four + five + six;
      RANK.innerHTML = Rone + Rtwo + Rthree + Rfour + Rfive + Rsix;
      break;
    case 7:
      name.innerHTML = one + two + three + four + five + six + seven;
      RANK.innerHTML = Rone + Rtwo + Rthree + Rfour + Rfive + Rsix + Rseven;
      break;
    case 8:
      name.innerHTML = one + two + three + four + five + six + seven + eight;
      RANK.innerHTML = Rone + Rtwo + Rthree + Rfour + Rfive + Rsix + Rseven + Reight;
      break;
    case 9:
      name.innerHTML = one + two + three + four + five + six + seven + eight + nine;
      RANK.innerHTML = Rone + Rtwo + Rthree + Rfour + Rfive + Rsix + Rseven + Reight + Rnine;
      break;
    case 10:
      name.innerHTML = one + two + three + four + five + six + seven + eight + nine + ten;
      RANK.innerHTML = Rone + Rtwo + Rthree + Rfour + Rfive + Rsix + Rseven + Reight + Rnine + Rten;
      break;
    default:
      name.textContent = '';
      RANK.textContent = '';
  }
}


function foc() {
  if (document.f1.practice.value == document.f1.practice.defaultValue) {
    document.f1.practice.value = "";
  }
}

