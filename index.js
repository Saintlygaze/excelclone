let columns = 27;
let row = 100;

let headRow = document.querySelector(".head-row");
let snoCol = document.querySelector(".serial-no");
let body = document.querySelector(".main-body");
let activeCellElement = document.querySelector(".selected-cell");
let form = document.querySelector(".form-container");

for (let i = 0; i < columns - 1; i++) {
    let headCell = document.createElement("div");
    headCell.textContent = String.fromCharCode(i + 65);
    headCell.classList.add("col-head");
    headRow.appendChild(headCell);
}

// Add row numbers
for (let i = 0; i < row; i++) {
    let headColCells = document.createElement("div");
    headColCells.textContent = i + 1;
    headColCells.classList.add("sno-col");
    snoCol.appendChild(headColCells);
}

// Create grid cells
for (let i = 1; i <= row; i++) {
    let rowCell = document.createElement("div");
    rowCell.classList.add("row");

    for (let j = 1; j < columns; j++) {
        let colCell = document.createElement("span");
        colCell.id = `${String.fromCharCode(j + 64)}${i}`;
        colCell.classList.add("cell");
        colCell.contentEditable = "true";
        rowCell.appendChild(colCell);
    }
    body.appendChild(rowCell);
}

// Event listener for selecting a cell
// let selectedCell = "";

// body.addEventListener("click", (e) => {
//     if (e.target.classList.contains("cell")) {
//         activeCellElement.textContent = e.target.id;
//         selectedCell = e.target;
//     }
// });

let selectedCell="";

body.addEventListener("click",(e)=>{
    activeCellElement.textContent=e.target.id;
    selectedCell=e.target;
    console.log(e);
    console.log(e.target);
});

// Form change event
form.addEventListener("change", () => {
    if (!selectedCell) {
        alert("Please select a cell");
        form.reset();
        return;
    }

    // Access form data
    const formData = {
        fontFamily: form["fontfamily"].value,
        fontSize: form["fontSize"].value + "px",
        fontWeight: form["isBold"].checked ? "bold" : "normal",
        fontItalic: form["isItalic"].checked ? "italic" : "normal",
        fontUnderline: form["isUnderline"].checked ? "underline" : "none",
        align: form["align"].value,
        textColor: form["textColor"].value,
        backgroundColor: form["backgroundColor"].value,
    };

    // Apply styles
    applyStylesToSelectedCells(formData);
});

// Function to apply styles
function applyStylesToSelectedCells(formData) {
    selectedCell.style.fontSize = formData.fontSize;
    selectedCell.style.fontFamily = formData.fontFamily;
    selectedCell.style.fontWeight = formData.fontWeight;
    selectedCell.style.fontStyle = formData.fontItalic;
    selectedCell.style.textDecoration = formData.fontUnderline;
    selectedCell.style.textAlign = formData.align;
    selectedCell.style.color = formData.textColor;
    selectedCell.style.backgroundColor = formData.backgroundColor;
}