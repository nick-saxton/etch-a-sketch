const container = document.getElementById("container");
const newGridButton = document.getElementById("newGrid");

const blackLevels = ["#DDD", "#AAA", "#888", "#777", "#666", "#555", "#444", "#333", "#222", "#000"];

function fillSquare() {
    const blackLevelIndex = parseInt(this.dataset.blackLevelIndex);
    this.style.backgroundColor = blackLevels[blackLevelIndex];
    this.dataset.blackLevelIndex = blackLevelIndex + 1;
}

function initializeGrid(squaresPerSide) {
    const containerSideLength = container.getBoundingClientRect().width;
    const gridSideLength = containerSideLength / squaresPerSide;

    // Destroy the old grid
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    
    // Set up the new grid
    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            let gridSquare = document.createElement("div");

            gridSquare.style.height = gridSideLength;
            gridSquare.style.width = gridSideLength;
            gridSquare.className = "grid-square";
            gridSquare.dataset.blackLevelIndex = 0;

            gridSquare.addEventListener("mouseenter", fillSquare);

            container.appendChild(gridSquare);
        }
    }
}

function handleNewGridClick() {
    const newSquaresPerSide = parseInt(prompt("How many squares per side for the new grid?"));
    if (!isNaN(newSquaresPerSide)) {
        initializeGrid(newSquaresPerSide);
    }
}

newGridButton.addEventListener("click", handleNewGridClick);
initializeGrid(16);