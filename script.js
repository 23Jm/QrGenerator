let qrCode=document.querySelector(".qr");
let qrText=document.querySelector("#input-box");
let qrImage=document.querySelector("#qr-image");
let button=document.querySelector("#btn");

function generateQr(){
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;

}
button.addEventListener("click",()=>{
   generateQr();
});
