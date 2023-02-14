var screen=document.querySelector("#screen")
      var btnTxt=document.querySelectorAll(".btn")
      
      function equal(){
          screen.value=eval(screen.value);
      }

      function percentage(){
        screen.value=(screen.value)/100;
      }
      
      for(item of btnTxt){
          item.addEventListener("click",(e)=>{
              btnTxt=e.target.innerText;
            if(btnTxt=="÷"){
              btnTxt="/"
            }


              screen.value+=btnTxt;
          });
      }