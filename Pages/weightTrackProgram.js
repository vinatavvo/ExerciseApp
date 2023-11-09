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
    var inputDate = document.getElementById("date").value;

    if(inputExer === '' || isNaN(inputWeight)) {
        alert("One of your inputs are not filled!");
        return;
    }

    if(containExercise(inputExer) === true) {
        alert("This exercise already exists. Please add your new PR in the respective weight below.");
        return;
    }

    const exercise = {
        name: inputExer,
        weights: [inputWeight],
        dates: [inputDate]
    }

    const exerDict = document.getElementById("prTable");

    exerciseLst.push(exercise);
    updateExerciseTable(exerDict, exercise, exerciseLst);
    

    document.getElementById("exer").value = "";
    document.getElementById("weighttrack").value = "";
}

function updateExerciseTable(table, exercise, lst) {
    const newRow = table.insertRow(-1);

    const nameCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1)
    const weightCell = newRow.insertCell(2);
    const buttonCell = newRow.insertCell(3);

    nameCell.textContent = exercise.name;
    dateCell.textContent = exercise.dates[exercise.dates.length-1]
    weightCell.textContent = exercise.weights[exercise.weights.length-1]; //show most up to date number

    const addButton = document.createElement("button");
    addButton.textContent = "Add Weight";
    addButton.onclick = () => addWeight(newRow);

    const historyButton = document.createElement("button");
    historyButton.textContent = "Check History";
    historyButton.onclick = () => giveHistory(newRow);

    buttonCell.appendChild(addButton);
    buttonCell.appendChild(historyButton);
}

function giveHistory(row) {

    const exercise = row.cells[0].innerText;
    const table = document.getElementById("progress").querySelector("tbody");
    table.innerHTML = "";

    for (const entry of exerciseLst) {
        if (entry.name === exercise) {
            for(let i = 0; i < entry.weights.length; i++) {
                const tableRow = table.insertRow();
                tableRow.insertCell(0).textContent = entry.dates[i];
                tableRow.insertCell(1).textContent = entry.weights[i];
            }
        }
    }

    show('histPop');

}

function addWeight(row) {
    //var newWeight = document.getElementById("pr").value;
    let exercise = row.cells[0].innerText;
    let date = row.cells[1];
    let weight = row.cells[2];

    let weightInput = prompt("Enter your new weight:", weight.textContent);
    let dateInput = prompt("Enter the date you hit this:", date.textContent);

    for(let i = 0; i < exerciseLst.length; i++) {
        if(exerciseLst[i].name === exercise) {
            exerciseLst[i].weights.push(parseFloat(weightInput));
            exerciseLst[i].dates.push(dateInput);
        }
    }

    weight.textContent = weightInput;
    date.textContent = dateInput;
}

function containExercise (name) {
    for(let i = 0; i < exerciseLst.length; i++) {
        if (exerciseLst[i].name === name) {
            return true;
        }
    }

    return false;
}