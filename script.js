var coordinates;
var target=document.getElementById("ball");
var startx=0;
var starty=0;
document.addEventListener('keydown',function(event){
   const key=event.key;
   if(key=="d"||key=="D"){
      let end=window.innerWidth;
      let z=target.clientWidth;
      if(startx+5<=end-z){
        startx+=5;
        target.style.marginLeft=startx+'px';
      }
   }

   if(key=="a"||key=="A"){
       if(startx>target.style.width){
        startx-=5;
        target.style.marginLeft=startx+'px';
    }
   }

   if(key=="s"||key=="S"){
    let end=window.innerHeight;
    let z=target.clientHeight;
    if(starty+5<=end-z){
        starty+=5;
        target.style.marginTop=starty+'px';
    }
   }

   if(key=="w"||key=="W"){
    if(starty>target.style.height){
         starty-=5;
         target.style.marginTop=starty+'px';
    }
   }
});