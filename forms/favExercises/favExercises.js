var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){

 for (i = 0; i <= exercises.length - 1; i++)
      selExercises.addItem(exercises[i])
}


btnDone.onclick=function(){
  // returns array of the choices' text
  
  if (selExercises.value == "situps" || "planks")   // picked the first choice
      NSB.MsgBox(`You chose situps and planks - those are the two core exercises. `)
   else 
      NSB.MsgBox(`You did not pick the two core exercises.`)

}

btnChange2.onclick=function(){
    ChangeForm(mobileNav)
}
