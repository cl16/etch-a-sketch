const container = document.querySelector("#main-container");

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', () =>  {
    let newSideSize = prompt("Input number of tiles per side...");
    while (newSideSize < 0 | newSideSize > 75 |isNaN(newSideSize)) {
        newSideSize = prompt("Please choose a number between 1 and 75...");
    }
    redraw(newSideSize);
})

function redraw (tilesPerSide) {

    let mainContainer = document.querySelector("#main-container");
    
    // try looping through all sketch divs and remove:
    let sketchDivs = document.querySelectorAll(".tile");
    sketchDivs.forEach((sketchDiv) => {
        sketchDiv.remove();
    });
    
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${tilesPerSide}, auto); grid-template-rows: repeat(${tilesPerSide}, auto);`);

    for (let i = 0; i < (tilesPerSide * tilesPerSide); i++) {
        let tempDiv = document.createElement('div');
        tempDiv.className = "tile";
        tempDiv.setAttribute('style', 'border: 1px solid black; height: auto; width: auto;');
        
        
        tempDiv.addEventListener('mouseover', function (e) {
            if (e.buttons > 0) {
                let tempColour = randomColour();
                tempDiv.setAttribute('style', `background-color: ${tempColour};`);
                console.log(tempColour);
            }
        });
    
        container.appendChild(tempDiv);
    }

}

const colourList = ["#A93226", "#CB4335", "#884EA0", "#7D3C98", "#148F77", "#117A65", "#1E8449", "#239b56",
                    "#B7950B", "#B9770E", "#AF601A", "#A04000", "#717D7E", "#616A6B", "#283747", "#212F3D"]

function randomColour () {
    const hexCode = colourList[Math.floor(Math.random()*colourList.length)];
    return hexCode;
}

redraw(16);



