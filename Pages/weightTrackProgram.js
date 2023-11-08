$ = function(id) {
    return document.getElementById(id);
}
  
var show = function(id) {
    $(id).style.display ='block';
}

var hide = function(id) {
    $(id).style.display ='none';
}

function clear(id) {
    if (id.value != null) {
        id.value = "";
    }
}

const exerciseLst = [];

function newExercise() {
    var inputExer = document.getElementById("exer").value; //grab exercise
    var inputWeight = parseFloat(document.getElementById("weighttrack").value); //grab weight

    if(inputExer === '' || isNaN(inputWeight)) {
        alert("One of your inputs are not filled!");
    } else {

        const exercise = {
            name: inputExer,
            weights: [inputWeight]
        }

        const exerDict = document.getElementById("prTable");

        exerciseLst.push(exercise);
        updateExerciseTable(exerDict, exercise, exerciseLst);
    }  

    clear("exer");
    clear("weighttrack");
}

function updateExerciseTable(table, exercise, lst) {
    const newRow = table.insertRow(-1);

    const nameCell = newRow.insertCell(0);
    const weightCell = newRow.insertCell(1);
    const buttonCell = newRow.insertCell(2);

    nameCell.textContent = exercise.name;
    weightCell.textContent = exercise.weights[exercise.weights.length-1]; //show most up to date number

    const addButton = document.createElement("button");
    addButton.textContent = "Add Weight";
    addButton.onclick = () => show('weightPop');

    const historyButton = document.createElement("button");
    historyButton.textContent = "Check History";
    historyButton.onclick = () => addWeight(table, exercise, lst, newRow);

    buttonCell.appendChild(addButton);
    buttonCell.appendChild(historyButton);
}

function addWeight(table, exercise, lst, row) {
    const nameCell = row.cells[0];
    const weightCell = row.cells[1];

    const newWeight = document.createElement("input");
    newWeight.type = "number";
    exercise.weights.push(newWeight.value);
}
