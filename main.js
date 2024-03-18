var canvas = new fabric.Canvas('myCanvas');
 var x = document.getElementById("myAudio");
 imgObj = "";

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (img) {
        imgObj = img;
        imgObj.scaleToWidth(800);
        imgObj.scaleToHeight(600);
        imgObj.set(
            {
                top : 0, left : 0
            }
        )
            canvas.add(imgObj);
        
    })
	
}

new_image();

function playSound(){
	x.play();
}
