 var navState = false;
 var menuState = false;
 function run() {
     navState = !(navState);
     var v = document.getElementById("ms");
     console.log(v);
     if(navState == true) {
         console.log("hello");
         document.getElementById("ms").style.display = "block";
         p.innerHTML = "X";
         if(menuState == true) {
             menu();
         }
     }
     else {
         document.getElementById("ms").style.display = "none";
         console.log("bye");
         p.innerHTML="<i class='material-icons'>search</i>";
     }
 }

 function menu() {
     menuState = !(menuState);
     var t = document.getElementById("mn");
     if(menuState == true) {
         t.style.display = "flex";
         s.innerHTML = "X";
         if(navState == true) {
             run();
         }
     } else {
         t.style.display = "none";
         s.innerHTML = "MENU";
     }
 }

 var p = document.getElementById("btnsearch");
 p.addEventListener('click', run, false);
 var s = document.getElementById("btnmenu");
 s.addEventListener('click',menu , false);
