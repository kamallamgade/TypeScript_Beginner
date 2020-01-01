
//arrow function es2015 demo
let squareIt = y => y * y;
const logMessage = (message: string) => console.log(message);
const logError = (err: string) => console.error(err);

function arrowFuncTest(value: number): number {
    var logger: (value: string) => void;
    var result: number;
    if (value) logger = logMessage;
    else logger = logError;
    logger(`result: ${result}`);
    return result;
}

function postScore(score: number, playerName: string = "MultiMath Player"): void {
    let logger: (value: string) => void;
    if (score < 0)
        logger = logError;
    else {
        logger = logMessage
    };

    logger(`Score: ${score}`);
}

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

//call postScore func
postScore(6, "kamal");

//call arrowFunc
arrowFuncTest(0);