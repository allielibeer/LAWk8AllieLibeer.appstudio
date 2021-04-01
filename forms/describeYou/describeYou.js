
rdoChars.onchange=function(){
   console.log(`The value property of the control is ${rdoChars.value}`)

// get the text of the option chosen by the user
   let userChoice = $("input[name=rdoChars]:checked").prop("value") //ALLIE jquery statement 
   lblChoice.value =(` I would agree that you are a ${userChoice} person too.`)


}

btnChange.onclick=function(){
    ChangeForm(favExercises)
}