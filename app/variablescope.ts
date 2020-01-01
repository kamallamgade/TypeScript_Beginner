var num2: number = 2;

function letDeclaration() {
    let num1: number = 1;
  
    if (num2 > num1) {
        let num2 = num1;
        let num3: number = 3;
        num3++;
        console.log("num3: " +num3 + " and num2 in IF block : " + num2 ); //Compiler : Can find name 'num3'
    }

    while (num1 < num2) {
        console.log("num2: in while block " +num2); 
        let num4: number = 4;
        num1++;
       // console.log("num4: " +num4); //Compiler : Can find name 'num4'
    }

    //console.log("num1: " + num1); //OK
    console.log("num2: " + num2); //OK 
    console.log("num2 as a global var: " + num2); 
    
}

letDeclaration();