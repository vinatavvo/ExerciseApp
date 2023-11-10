
let breakfastFoods = [];
let lunchFoods = [];
let dinnerFoods = [];
let snackFoods = [];


function addFood(mealType) {

    const breakfastTable = document.getElementById("breakfastTable");
    const lunchTable = document.getElementById("lunchTable");
    const dinnerTable = document.getElementById("dinnerTable");
    const snackTable = document.getElementById("snackTable");
    const foodName = document.getElementById(`${mealType}-food-name`).value;
    const calories = parseInt(document.getElementById(`${mealType}-calories`).value);
    const protein = parseFloat(document.getElementById(`${mealType}-protein`).value);
    const carbs = parseFloat(document.getElementById(`${mealType}-carbs`).value);
    const fats = parseFloat(document.getElementById(`${mealType}-fats`).value);

    if (!foodName || isNaN(calories) || isNaN(protein) || isNaN(carbs) || isNaN(fats)) {
        alert("Please fill in all fields with valid values.");
        return;
    }

    const foodItem = {
        name: foodName,
        calories: calories,
        protein: protein,
        carbs: carbs,
        fats: fats
    };

    if (mealType === 'breakfast') {
        breakfastFoods.push(foodItem);
        renderFoodList(breakfastTable, foodItem, breakfastFoods);
    } else if (mealType === 'lunch') {
        lunchFoods.push(foodItem);
        renderFoodList(lunchTable, foodItem, lunchFoods);
    } else if (mealType === 'dinner') {
        dinnerFoods.push(foodItem);
        renderFoodList(dinnerTable, foodItem, dinnerFoods);
    } else if (mealType === 'snack') {
        snackFoods.push(foodItem);
        renderFoodList(snackTable, foodItem, snackFoods);
    }

    updateTotals();
    // Reset the form
    document.getElementById("food-form").reset();
}

function renderFoodList(table, food, foodsArray) {
    const newRow = table.insertRow(-1);

    const nameCell = newRow.insertCell(0);
    const caloriesCell = newRow.insertCell(1);
    const proteinCell = newRow.insertCell(2);
    const carbsCell = newRow.insertCell(3);
    const fatsCell = newRow.insertCell(4);
    const actionCell = newRow.insertCell(5);

    nameCell.textContent = food.name;
    caloriesCell.textContent = food.calories;
    proteinCell.textContent = food.protein;
    carbsCell.textContent = food.carbs;
    fatsCell.textContent = food.fats;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editFood(food, table, newRow, foodsArray);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeFood(food, table, newRow, foodsArray);

    actionCell.appendChild(editButton);
    actionCell.appendChild(removeButton);
}

function editFood(food, table, row, foodsArray) {
    // Replace the input cells with editable inputs
    const nameCell = row.cells[0];
    const caloriesCell = row.cells[1];
    const proteinCell = row.cells[2];
    const carbsCell = row.cells[3];
    const fatsCell = row.cells[4];

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = food.name;

    const caloriesInput = document.createElement("input");
    caloriesInput.type = "number";
    caloriesInput.value = food.calories;

    const proteinInput = document.createElement("input");
    proteinInput.type = "number";
    proteinInput.value = food.protein;

    const carbsInput = document.createElement("input");
    carbsInput.type = "number";
    carbsInput.value = food.carbs;

    const fatsInput = document.createElement("input");
    fatsInput.type = "number";
    fatsInput.value = food.fats;

    nameCell.innerHTML = "";
    caloriesCell.innerHTML = "";
    proteinCell.innerHTML = "";
    carbsCell.innerHTML = "";
    fatsCell.innerHTML = "";

    nameCell.appendChild(nameInput);
    caloriesCell.appendChild(caloriesInput);
    proteinCell.appendChild(proteinInput);
    carbsCell.appendChild(carbsInput);
    fatsCell.appendChild(fatsInput);

    const actionCell = row.cells[5];
    actionCell.innerHTML = "";
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.onclick = () => saveEditedFood(food, nameInput, caloriesInput, proteinInput, carbsInput, fatsInput, table, row, foodsArray);
    actionCell.appendChild(saveButton);
}

function saveEditedFood(food, nameInput, caloriesInput, proteinInput, carbsInput, fatsInput, table, row, foodsArray) {
    food.name = nameInput.value;
    food.calories = parseInt(caloriesInput.value);
    food.protein = parseFloat(proteinInput.value);
    food.carbs = parseFloat(carbsInput.value);
    food.fats = parseFloat(fatsInput.value);

    const nameCell = row.cells[0];
    const caloriesCell = row.cells[1];
    const proteinCell = row.cells[2];
    const carbsCell = row.cells[3];
    const fatsCell = row.cells[4];

    nameCell.textContent = food.name;
    caloriesCell.textContent = food.calories;
    proteinCell.textContent = food.protein;
    carbsCell.textContent = food.carbs;
    fatsCell.textContent = food.fats;

    const actionCell = row.cells[5];
    actionCell.innerHTML = "";
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editFood(food, table, row, foodsArray);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeFood(food, table, row, foodsArray);

    actionCell.appendChild(editButton);
    actionCell.appendChild(removeButton);

    updateTotals();
}

function removeFood(food, table, row, foodsArray) {
    const index = foodsArray.indexOf(food);
    if (index !== -1) {
        foodsArray.splice(index, 1);
        updateTotals();
        table.deleteRow(row.rowIndex);
    }
}

function updateTotals() {
    let caloriesTotal = 0;
    let proteinTotal = 0;
    let carbsTotal = 0;
    let fatsTotal = 0;
    const totalCaloriesCell = document.getElementById("total-calories-cell");
    const totalCalories = document.getElementById("total-calories");
    const totalProtein = document.getElementById("total-protein");
    const totalCarbs = document.getElementById("total-carbs");
    const totalFats = document.getElementById("total-fats");

    breakfastFoods.forEach(food => {
        caloriesTotal += food.calories;
        proteinTotal += food.protein;
        carbsTotal += food.carbs;
        fatsTotal += food.fats;
    });

    lunchFoods.forEach(food => {
        caloriesTotal += food.calories;
        proteinTotal += food.protein;
        carbsTotal += food.carbs;
        fatsTotal += food.fats;
    });

    dinnerFoods.forEach(food => {
        caloriesTotal += food.calories;
        proteinTotal += food.protein;
        carbsTotal += food.carbs;
        fatsTotal += food.fats;
    });

    snackFoods.forEach(food => {
        caloriesTotal += food.calories;
        proteinTotal += food.protein;
        carbsTotal += food.carbs;
        fatsTotal += food.fats;
    });


    totalCaloriesCell.textContent = caloriesTotal;
    totalCalories.textContent = caloriesTotal;
    totalProtein.textContent = proteinTotal;
    totalCarbs.textContent = carbsTotal;
    totalFats.textContent = fatsTotal;
}


