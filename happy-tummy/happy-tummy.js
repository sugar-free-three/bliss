function submitForm() {
    const formContents = $('form').serializeArray(); // get form inputs

    // converting jquery serialzeArray to object: https://stackoverflow.com/questions/3277655/how-to-convert-jquery-serialize-data-to-json-object
    var formDataObject = {};

    $(formContents).each((index, obj) => {
        formDataObject[obj.name] = obj.value;
    });

    const htmlRecipe = inputToHtmlRecipe(formDataObject);
    $('.recipes').append(htmlRecipe); // add new recipe to page
    $('#recipe_form').trigger('reset'); // clear form

    // reset number of ingredients to 3
    $('#ingredients').html(`<div class="form-group">
        <label for="ingredient1">Ingredient 1</label>
        <input type="text" class="form-control" id="ingredient1" name="ingredient1" placeholder="2 cups sugar" required="true">
    </div>

    <div class="form-group">
        <label for="ingredient2">Ingredient 2</label>
        <input type="text" class="form-control" id="ingredient2" name="ingredient2" placeholder="1 tsp vanilla extract">
    </div>

    <div class="form-group">
        <label for="ingredient3">Ingredient 3</label>
        <input type="text" class="form-control" id="ingredient3" name="ingredient3" placeholder="1/4 cup of grandma's love <3">
    </div>`)
}


function inputToHtmlRecipe(formContents) {
    var ingredientHtml = "";
    var ingredientIndex = 1;

    while (true) { // creates html for each ingredient input
        if (formContents['ingredient'+ingredientIndex]!=undefined) {
            ingredientHtml += `<li class="list-group-item">${formContents['ingredient'+ingredientIndex]}</li>`;
            ingredientIndex++;
        }
        else{
            break;
        }       
        
    }
    return `<div class='card recipe' style="margin-bottom: 1em;">
    <img src='https://www.flaticon.com/svg/static/icons/svg/2988/2988858.svg' class='card-img-top '>
    <div class='card-body'>
      <h5 class='card-title'>${formContents.recipe_name}</h5>
      <p class='card-text'>${formContents.servings} servings/${formContents.calories} calories per serving</p>
      <p class="card-text">${formContents.prep_time} min prep time/${formContents.cook_time} min cook time</p>
    </div>
    <ul class='list-group list-group-flush'>
      ${ingredientHtml}
    </ul>
    <div class='card-body'>
      <h6 class='card-subtitle'>Instructions</h6>
      <p class='card-text'>${formContents.instructions}</p>
    </div>
  </div>`;
}

function addIngredientField() { // adds ingredient html ingredient input field when user clicks add ingredient button
    const ingredientNum = $("#ingredients > div").length + 1;
    $('#ingredients').append(`<div class="form-group">
    <label for="ingredient${ingredientNum}">Ingredient ${ingredientNum}</label>
    <input type="text" class="form-control" id="ingredient${ingredientNum}" name="ingredient${ingredientNum}" placeholder="An extra ingredient">
  </div>`)
}
