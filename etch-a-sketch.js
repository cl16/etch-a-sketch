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
                tempDiv.setAttribute('style', 'background-color: black;');
            }
        });
    
        container.appendChild(tempDiv);
    }

}

redraw(16);



