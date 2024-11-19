function myParseInt(str) {
  
    const trim = str.trim();

    const numbers = [0,1,2,3,4,5,6,7,8,9]

    const trimArr = [...trim];

    for(let i = 0; i < trimArr.length; i++){
        if(!numbers.includes(parseInt(trimArr[i]))) {
            return NaN;
        }
    }
   
    return parseInt(trim);
}

function factorial(n){
    let fact = 1;

    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    
    return fact;
}

function createArrayOfTiers(num) {
  
    let strArr = [];
    let numStr = num.toString();

    for(let i = 0; i < numStr.length; i++){

        let str = "";
        for(let j = 0; j <= i; j++){
            str += numStr[j];
        }

        strArr.push(str);
    };
  
    
    return strArr;
}

function disemvowel(str) {

    const vowels = ['a','e','i','o','u'];

    let newStr = "";
    const strArr = [...str];

    strArr.forEach(char => {
        if(!vowels.includes(char.toLowerCase())){
            newStr += char;
        }
    });

    console.log(newStr);
    return newStr;
}