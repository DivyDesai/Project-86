var canvas=new fabric.Canvas('myCanvas');
var image_width=30;
var image_height=30;
var player_position_X=10;
var player_position_Y=10;
var player_object="";
var image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
           top:player_position_Y,
           left:player_position_X 
        });
        canvas.add(player_object);
    });
  }
  function newImage(get_image){
    fabric.Image.fromURL(get_image,function(img){
        image_object=img;
        image_object.scaleToWidth(image_width);
        image_object.scaleToHeight(image_height);
        image_object.set({
            top:player_position_Y,
            left:player_position_X
        });
        canvas.add(image_object);  
    });
  }