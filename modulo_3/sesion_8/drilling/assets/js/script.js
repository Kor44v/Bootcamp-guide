// let inp1 = document.getElementById('input1');
// let inp2 = document.getElementById('input2');
// let inp3 = document.getElementById('input3');
let btn = document.getElementById('btn')


function blackBox (input){
    input.addEventListener('click',function(){

        input.style.background='black';
        input.style.color='black';
        
    })
};

// inp1.addEventListener('mouseover',function(){
//     inp1.style='background:black;color:black;'
//     inp1.addEventListener('mouseout',function(){
//         inp1.style='background:white;color:white;'
//     });
// });

// inp2.addEventListener('mouseover',function(){
//     inp2.style='background:black;color:black;'
//     inp2.addEventListener('mouseout',function(){
//         inp2.style='background:white;color:white;'
//     });
// });
// inp3.addEventListener('mouseover',function(){
//     inp3.style='background:black;color:black;'
//     inp3.addEventListener('mouseout',function(){
//         inp3.style='background:white;color:white;'
//     });
// });

// if(btn.style='float:left'){

//     btn.addEventListener('mouseover',function(){
//         btn.style='float:right'
//     })
// }else{
//     btn.addEventListener('mouseover',function(){
//         btn.style='float:left'
//     })
// }
btn.addEventListener('mouseover',function(){
    if (btn.style.float === 'left') {
        btn.style.float = 'right';
    } else {
        btn.style.float = 'left';
    }
});
