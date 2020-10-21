var count;

let choose = prompt("ENTER YOUR SIGN X OR O");
 if(choose == 'X' || choose == 'x'){
     count = 1;
 }
  else if( choose == 'O' || choose == 'o'){
      count = 0;
  }
else{
     count = 1;
}

function one(control){
    if(count<=9){
    
         if(count%2!=0){
         document.getElementById(control.id).innerHTML ="X";

    }
     else{
    document.getElementById(control.id).innerHTML ="O";
    }
count++;
    if(winner()){
      alert("hello winner" + " " + document.getElementById(control.id).innerHTML );
     
    }
        else{
            
        }
    
}
  
 else{
        alert("match draw");
        location.reload();
    }

   
}

function winner(){
    if(document.getElementById('first').innerHTML!='' && document.getElementById('second').innerHTML!= '' && document.getElementById('third').innerHTML!= ''  && document.getElementById('first').innerHTML == document.getElementById('second').innerHTML && document.getElementById('second').innerHTML == document.getElementById('third').innerHTML)
    {
        return true;
    }
    else if(document.getElementById('first').innerHTML!='' && document.getElementById('fifth').innerHTML!= '' && document.getElementById('nine').innerHTML!= ''  && document.getElementById('first').innerHTML == document.getElementById('fifth').innerHTML && document.getElementById('fifth').innerHTML == document.getElementById('nine').innerHTML)
        {
            return true;
        }
       else if(document.getElementById('first').innerHTML!='' && document.getElementById('fourth').innerHTML!= '' && document.getElementById('seven').innerHTML!= ''  && document.getElementById('first').innerHTML == document.getElementById('fourth').innerHTML && document.getElementById('fourth').innerHTML == document.getElementById('seven').innerHTML)
        {
            return true;
        }
     else if(document.getElementById('seven').innerHTML!='' && document.getElementById('eight').innerHTML!= '' && document.getElementById('nine').innerHTML!= ''  && document.getElementById('seven').innerHTML == document.getElementById('eight').innerHTML && document.getElementById('eight').innerHTML == document.getElementById('nine').innerHTML)
        {
            return true;
        }
    else if(document.getElementById('nine').innerHTML!='' && document.getElementById('sixth').innerHTML!= '' && document.getElementById('third').innerHTML!= ''  && document.getElementById('nine').innerHTML == document.getElementById('sixth').innerHTML && document.getElementById('sixth').innerHTML == document.getElementById('third').innerHTML){
        return true;
    } 
    else if(document.getElementById('third').innerHTML!='' && document.getElementById('fifth').innerHTML!= '' && document.getElementById('seven').innerHTML!= ''  && document.getElementById('third').innerHTML == document.getElementById('fifth').innerHTML && document.getElementById('fifth').innerHTML == document.getElementById('seven').innerHTML){
        return true;
    }
    else if(document.getElementById('second').innerHTML!='' && document.getElementById('fifth').innerHTML!= '' && document.getElementById('eight').innerHTML!= ''  && document.getElementById('second').innerHTML == document.getElementById('fifth').innerHTML && document.getElementById('fifth').innerHTML == document.getElementById('eight').innerHTML){
        return true;
    }   
    else if(document.getElementById('fourth').innerHTML!='' && document.getElementById('fifth').innerHTML!= '' && document.getElementById('sixth').innerHTML!= ''  && document.getElementById('fourth').innerHTML == document.getElementById('fifth').innerHTML && document.getElementById('fifth').innerHTML == document.getElementById('sixth').innerHTML){
        return true;
    }
    else{
    }
   
}

function re(){
    location.reload();
}




function skip(){

     

}


































