
window.onscroll = function doanime1(){


    
    if(document.body.scrollTop > 170){
   document.getElementById("bn").className = "sechead1";
   document.getElementById("cot").className = "sechead2";
   }

 document.getElementById("hello_content").style.visibility = "hidden";

   if(document.body.scrollTop > 990){
       
       document.getElementById("hello_content").className = "hcontent";
       document.getElementById("hello_content").style.visibility = "visible";
 }
 
 if(document.body.scrollTop > 2646){
     
     document.getElementById("smile").className = "sufoe";
     document.getElementById("contact_Hdng").className = "contact_H";
     document.getElementById("contact_txt1").className = "contact_T";
     document.getElementById("contact_txt2").className = "contact_T";
     document.getElementById("contact_txt3").className = "contact_T";  
 }
 
   if(document.body.scrollTop > 2646){
       
       document.getElementById("social_link").className = "social";
   }

}
