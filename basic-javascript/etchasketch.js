const GRID_SIZE = 16;
const MARGIN_PCT = 0.3;

const grid = document.querySelector("#grid"); 
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let newSize = 0;
  do {
     newSize = Number(prompt("New grid size? Enter a positive integer <100."));
  } while (!Number.isInteger(newSize) && (newSize >= 100 || newSize < 0));
  newGrid(newSize);
});

newGrid(GRID_SIZE);



function newGrid(gridSize) {
  const cellMargin = computeMargin(gridSize);
  const cellWidth = computeWidth(gridSize);
  const color = randomRGB();
  let newCells = []
  for (let i = 0; i<(gridSize*gridSize); i++){
    newCells.push(newCell(cellWidth, cellMargin, color));
  }
  grid.replaceChildren(...newCells);
}

function newCell(cellWidth, cellMargin, color) {
  let cell = document.createElement("div");
  cell.setAttribute("class", "cell");
  cell.style.flex = `0 0 ${cellWidth}%`;
  cell.style.margin = `${cellMargin}%`;
  cell.style.backgroundColor = color;
  cell.style.opacity = 0.1;
  cell.addEventListener("mouseover", function(e) {
    const oldOpacity = Number(e.target.style.opacity);
    e.target.style.opacity = oldOpacity + 0.1;
    // e.target.style.backgroundColor = "pink";
  });
  return cell;
}

function randomRGB(){
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function computeWidth(gridSize) {
  // Account for page margine (start with 90)
  // Account for cell margins
  // Divide remaining space between cells
  const gapCount = gridSize;
  const marginPerGap = computeMargin(gridSize)*2;
  const totalMarginSpace = marginPerGap * gapCount;
  const width = (100 - totalMarginSpace) / gridSize;
  
  console.log({
      gridSize,
      marginPerGap,
      totalMarginSpace,
      width,
      totalUsed: (width * gridSize) + totalMarginSpace
  });
  
  return width;
}

function computeMargin(gridSize){
  return 5/gridSize;
}