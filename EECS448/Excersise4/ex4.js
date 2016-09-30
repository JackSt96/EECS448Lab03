var color = document.getElementById("textBox");
var setup = 1;
var type;
//Change the style attribute



function changeColor() {

  if (type == "hex")
  {

    var hex = document.getElementById("hexCode").value;
    var hex2 = document.getElementById("borderhexCode").value;
    alert("ifstate");
      document.body.style.backgroundColor = "#" + hex;
      document.getElementById("textBox").style.borderColor = "#" + hex2;
                document.getElementById("textBox").style.borderWidth = width;
  }
  else
  {
    var x = document.getElementById("numred").value;
    var y = document.getElementById("numgreen").value;
    var z = document.getElementById("numblue").value;

      var x2 = document.getElementById("bordernumred").value;
      var y2 = document.getElementById("bordernumgreen").value;
      var z2 = document.getElementById("bordernumblue").value;

      var width = document.getElementById("width").value;

    alert(x);
    alert(y);
      alert(z);
        alert("elsestate");
    document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";

    document.getElementById("textBox").style.borderColor = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
    document.getElementById("textBox").style.borderWidth = width;
  }
}

window.onload = function() {
if (setup == "1"){
  $(".numValue").hide();
  $(".hexValue").hide();
  setup = 2;
}

};
function myFunction(radioValue) {
 type = radioValue;
 alert(type);
   if (type == "hex")
   {
       $(".numValue").hide();
       $(".hexValue").show();
   }
   else {
         $(".numValue").show();
         $(".hexValue").hide();
   }
}
/*
radio.onchange = function() {
  alert(document.getElementById("radio").value);
  if (document.getElementById("radio").value == "hex")
  {
      $(".numValue").hide();
      $(".hexValue").show();
  }
  else {
        $(".numValue").show();
        $(".hexValue").hide();
  }
};*/
