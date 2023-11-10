window.onload = function(){
    let info = ["name", "age", "height", "weight", "goal", "bio", "bench", "squat", "deadlift"];

    for (let i = 0; i < info.length; i++) {
        if(localStorage.getItem(info[i]) !== null){
            document.getElementById(info[i] + "Input").value = localStorage.getItem(info[i]);
        }
    }
}

function enable(){
    document.getElementById("nameInput").disabled = false;
    document.getElementById("ageInput").disabled = false;
    document.getElementById("heightInput").disabled = false;
    document.getElementById("weightInput").disabled = false;
    document.getElementById("goalInput").disabled = false;
    document.getElementById("bioInput").disabled = false;
    document.getElementById("benchInput").disabled = false;
    document.getElementById("squatInput").disabled = false;
    document.getElementById("deadliftInput").disabled = false;
}

function disable(){
    document.getElementById("nameInput").disabled = true;
    document.getElementById("ageInput").disabled = true;
    document.getElementById("heightInput").disabled = true;
    document.getElementById("weightInput").disabled = true;
    document.getElementById("goalInput").disabled = true;
    document.getElementById("bioInput").disabled = true;
    document.getElementById("benchInput").disabled = true;
    document.getElementById("squatInput").disabled = true;
    document.getElementById("deadliftInput").disabled = true;

    // Local Storage
    localStorage.setItem("name", document.getElementById("nameInput").value);
    localStorage.setItem("age", document.getElementById("ageInput").value);
    localStorage.setItem("height", document.getElementById("heightInput").value);
    localStorage.setItem("weight", document.getElementById("weightInput").value);
    localStorage.setItem("goal", document.getElementById("goalInput").value);
    localStorage.setItem("bio", document.getElementById("bioInput").value);
    localStorage.setItem("bench", document.getElementById("benchInput").value);
    localStorage.setItem("squat", document.getElementById("squatInput").value);
    localStorage.setItem("deadlift", document.getElementById("deadliftInput").value);

    console.log(localStorage);
    console.log(localStorage.getItem("age"));
}