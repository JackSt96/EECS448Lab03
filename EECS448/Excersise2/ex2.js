var pos = 0;
var imgArray = new Array();
window.onload = function(){


imgArray[0] = new Image();
imgArray[0].src = 'pic1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'pic2.JPG';

imgArray[2] = new Image();
imgArray[2].src = 'pic3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'pic4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'pic5.jpg';


next();

setInterval(next, 5000); // every 5 seconds

}

function next()
{
    if(pos == imgArray.length) pos = 0; // reset the counter
    document.getElementById('rotate').src = imgArray[pos].src;
    pos++;
}
function back()
{
    if(pos == 0) pos = imgArray.length-1; // reset the counter
    document.getElementById('rotate').src = imgArray[pos].src;
    pos--;
}
