const display =document.getElementById("display");
function AppendToDisplay(input){
    display.value += input;
}
function Clear(){
    display.value="0";
}
function Calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}