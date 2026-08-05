const text =
"Grade 12 Student | Python Developer | Study At Krathum Baen WisetSaMuThaKhun School";

let index = 0;

function type(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(type,70);

    }

}

window.onload = type;
