function Validate() {
  var x = document.getElementById("fPass").value;
  var y = document.getElementById("sPass").value;
  if (x != y || (x.length < 8)) {
          alert("Wrong");
      }
}
