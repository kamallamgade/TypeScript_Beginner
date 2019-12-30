

document.getElementById('startGame').addEventListener('click', startGame);

function startGame(x: any = 2): void{
    //union types: --strictNullChecks
    let playerName: string | null | undefined = "dalli girl";
    console.log(playerName + " x value:  " + x);
    var messageElement : HTMLElement ;
    messageElement = document.getElementById('messages');
    messageElement.innerText = " Welcome!!"
}

startGame();