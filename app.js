var result = document.getElementById("getResult");

function getValue(num){
   
   result.value += num;
// console.log(num);
}


function clearAll(){
result.value = " ";
    
    
}

function calculateValue(){

result.value = eval(result.value);
}

function clickBack(){
    result.value = result.value.slice(0,-1);
}

function operatorValue(){
result.value=eval(result.value);

 }

 function doubleValue(){
    var res = result.value.slice(0,1);
    // var arr=['++', '--', '**', '//' ,  '%%', '+-' , '+*' , '+/' ,'%+', '-*' , '-/', '-%', '*/' , '*%' ,'..' ,'.+', '.-' ,
    // '.*' ,'./' , '.%']

    // if ( res===('++' ||'--' || '//' ||'**')){
    //     result.value = result.value.slice(0,-1);
    // }
 }