var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 block_image_width = 30;
 block_image_height = 30;

sound = "bdayaudio.mp3"

 function new_image() 
 { fabric.Image.fromURL('BirthdayImage', function(Img) 
     { block_image_object = Img; 
         block_image_object.scaleToWidth(block_image_width); 
         block_image_object.scaleToHeight(block_image_height); 
         block_image_object.set({
             top:0,
             left:0
         }); 
         canvas.add(block_image_object); 
     }); 
 }

function playSound(){
    x.play();
}
