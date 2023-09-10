let getInput = document.querySelector('input');
let qrImg = document.getElementById('qrimg');
let genbtn = document.getElementById('#gen');
let dwnbtn = document.getElementById('#dwn');


function generateQr(){
  qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + getInput.value;

}

async function dwnlbtn(){
 
  const res = await fetch(qrImg.src);
   const blob = await res.blob();
   const dwnLink = document.createElement('a');
   dwnLink.href = URL.createObjectURL(blob);
   dwnLink.download = "qrcode.jpg";
   dwnLink.click();

}