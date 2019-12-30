
//arrow function es2015 demo
let squareIt = y => y * y;

function arrowFuncTest(value: number): number {
    let result: number  = squareIt(value);
    return result;
 }
 console.log("arrow func result : " + arrowFuncTest(9));

 //working with html element
document.getElementById('startGame').addEventListener('click', startGame);

function startGame(x: any = 2): void {
    //union types: --strictNullChecks
    let playerName: string | null | undefined = "dalli girl";
    console.log(playerName + " x value:  " + x);
    var messageElement: HTMLElement;
    messageElement = document.getElementById('messages');
    messageElement.innerText = " Welcome!!"
}