let toggle = document.getElementById('toggle1');
let temp = document.querySelectorAll('.temp');
toggle.addEventListener('change',function(){
    temp.forEach((temp1)=>{
        let tempAct = parseInt(temp1.innerText);
        let tempNew ;
        if (toggle.checked) {
            tempNew = Math.round(tempAct * 1.8 + 32);
            temp1.innerText = tempNew + '°F';
            } else {
            tempNew = Math.round((tempAct - 32) / 1.8);
            temp1.innerText = tempNew + '°C';
            }
    })

    
});


console.log(toggle.checked)