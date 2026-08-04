const text =
"Grade 12 Student | Python Developer | Web Developer";

let index = 0;

function type(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(type,70);

    }

}

window.onload = type;
