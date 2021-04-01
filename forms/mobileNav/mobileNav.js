
hmbMenu.onshow=function(s){
  hmbMenu.hidden = false
}

hmbMenu.onclick=function(s){ // when just click the control. 's' is
                              // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Dessert Vote":
                // Go to the Overview form
                ChangeForm(dessertVoting)
                break
       }  
       switch(s){
        case "Describe You":
            ChangeForm(describeYou)
            break
        }
        switch(s){
        case "Fav Exerciz":
            ChangeForm(favExercises)
            break
        }
        switch(s){
        case "Mobile Nav":
            ChangeForm(mobileNav)
            break
        }
   } 
}



