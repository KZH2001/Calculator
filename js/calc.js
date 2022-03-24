let display = document.querySelector(".display-box ");
let keypad = document.querySelector(".keypad");
let operators = ["+", "-", "*", "/", "%",".",];

// for (let i=0; i<10; i++ ){
//     keypad.innerHTML += `<button class="key" onclick="showInDisplay(${i})">${i}</button>`; 
// }


// operators.forEach(x=> {
    // if (x == "="){
        // keypad.innerHTML+=`<button class="key" onclick='calc()'>${x}</button>`
    // }else{

    
    //  keypad.innerHTML += `<button class="key" onclick='showInDisplay("${x}")'>${x}</button>`
     
    //  }})



    function filter(x){
        let current = display.innerText;
        let lastChar = current[current.length-1];
        if (current == "0" && x != "."){
            clearLast()
        }
        if(current.length >= 14){
            return false;
        }
        if (operators.includes(x) && operators.includes(lastChar)){

            return false;
        }
        return true;
    
    }
    


function showInDisplay(x){
        if(filter(x)){
        display.innerHTML += x;
    }
}
    

function calc(){

  display.innerText = eval(display.innerText);

}

function clearAll(){
    display.innerText = " ";
}

function clearLast(){
    display.innerText = display.innerText.substring(0,display.innerText.length-1)
}

