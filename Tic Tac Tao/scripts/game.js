function start_new_game() {
    //first validation of name
    if(players[0].name === '' || players[1].name === '') {
        alert("Please set custom player names for both players!");
        return;
    }
    activePlayer.textContent=players[selectplayer].name;
    console.log(activePlayer.textContent);
    gameAreaElement.style.display ="block"; 
}
function  switchPlayer() {
    if(selectplayer === 0) {
        selectplayer=1;
    }else {
        selectplayer =0;
    }
    activePlayer.textContent=players[selectplayer].name;
}
function selectgamefeild(event) {
   
    const selectedField = event.target;

    selectedField.target.textContent = players[selectplayer].symbol; 
    selectedField.target.classList.add("disabled");
   
    const selectedColumn = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row-1;/*this mathematical expression will convert the string in the integer */
   
    gameData[selectedRow][selectedColumn] = selectplayer + 1;
    console.log(gameData);
    switchPlayer();

}