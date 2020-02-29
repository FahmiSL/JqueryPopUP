
alert("welcome")


function changeFont(){
     
  var getText=document.getElementById("myText");

    if (getText.style.fontWeight=="normal") {
      getText.style.fontWeight="bold";
    }

    else {
      
      getText.style.fontWeight="normal";

  }


}

function changeStyle(){
     
  var getText=document.getElementById("myText");

    if (getText.style.fontStyle=="normal") {
      getText.style.fontStyle="italic";
    }

    else {
      
      getText.style.fontStyle="normal";

  }


}


function changeDecoration(){
     
  var getText=document.getElementById("myText");

    if (getText.style.textDecoration=="none") {
      getText.style.textDecoration="underline";
    }

    else {
      
      getText.style.textDecoration="none";

  }


}


function changeSize(){
     
  var getText=document.getElementById("fahmi").value;
  var getText=document.getElementById("myText");
  var selectedValue= document.getElementById("fahmi").value;


}

$(".test1").on('click', function(){
  $(".popup").dialog();
})