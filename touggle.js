const text= document.querySelector('.text');
            
            function tougleState(){
                const touggleSwitch= document.querySelector(".touggle");
                touggleSwitch.classList.toggle("active");

                const body=document.body;
                body.classList.toggle("dark-mode");
            
                const isDarkMode=body.classList.contains("dark-mode");
                if(isDarkMode){
                    body.classList.remove("light-mode");
                    text.classList.add("on");
                }
                else{
                    body.classList.add("light-mode");
                    text.classList.remove("on");
                }
            }