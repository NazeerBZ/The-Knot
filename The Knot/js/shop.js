
window.onscroll = function doanime2(){
    
      
    document.getElementById("moreprod").style.visibility = "hidden";
     
  
    if(document.body.scrollTop > 85){
        
        document.getElementById("moreprod").style.visibility = "visible";
        document.getElementById("moreprod").className = "n_c_h";
    }
    
    if(document.body.scrollTop > 950){
     
     document.getElementById("smile").className = "sufoe";
     document.getElementById("contact_Hdng").className = "contact_H";
     document.getElementById("contact_txt1").className = "contact_T";
     document.getElementById("contact_txt2").className = "contact_T";
     document.getElementById("contact_txt3").className = "contact_T";  
 }
 
   if(document.body.scrollTop > 952){
       
       document.getElementById("social_link").className = "social";
   }

    
}