const exerDict = document.getElementById("prTable");

function newExercise() {
    var inputExer = document.getElementsById("exer").value; //grab exercise
    var inputWeight = document.getElementById("weighttrack").value; //grab weight

    if(inputExer === '' || inputWeight === '') {
        alert("One of your inputs are not filled!");
    } else {
        const exercise = {
            name: inputExer,
            weights: [inputWeight]
        }

        exerDict.push(exercise);
        updateExerciseTable(exerDict, exercise);
    }  
}

function updateExerciseTable(table, exercise) {
    const newRow = table.insertRow(-1);

    const nameCell = newRow.insertCell(0);
    const weightCell = newRow.insertCell(1);

    nameCell.textContent = exercise.name;
    weightCell.textContent = exercise.weights[exercise.weights.length-1]; //show most up to date number
}

$ = function(id) {
    return document.getElementById(id);
}
  
var show = function(id) {
    $(id).style.display ='block';
}

var hide = function(id) {
    $(id).style.display ='none';
}
