let code=document.getElementById("QRimg");
let QR=document.getElementById("image")
let text=document.getElementById("qrtext");

function generateQR(){
    if(text.value.length > 0){
        QR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
        code.classList.add("show-img");
    }
    else{
        text.classList.add('error');
        setTimeout(()=>{
            text.classList.remove('error');
        },1000);
    }
}