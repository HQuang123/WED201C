/*Name this external file gallery.js*/

function upDate(previewPic){
        document.getElementById("image").style.backgroundImage="url('" + previewPic.src +"')";
        document.getElementById("image").innerHTML= previewPic.alt;
        console.log();
       }
   
function unDo(){
       document.getElementById("image").style.backgroundImage="url('')";
       document.getElementById("image").innerHTML="Hover over an image below to display";
       console.log();
       }

function accessImage(){
        var imageList = document.querySelectorAll(".flex img");
        for(let i = 0 ; i< imageList.length;i++){
                imageList[i].setAttribute("tabindex", 0);
        }
}
      