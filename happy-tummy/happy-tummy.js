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
        <input type="text" class="form-control" id="ingredient1" name="ingredient1" placeholder="2 cups sugar" required>
    </div>`);

    // reset number of steps to 1
    $('#steps').html(`<div class="form-group">
    <label for="instructions">Step 1</label>
    <textarea required class="form-control" id="step1" name="step1" rows="4" placeholder="Preheat your oven to 350."></textarea>
  </div>`);
}


function inputToHtmlRecipe(formContents) {

    const ingredientHtml = getIngredientHtml(formContents);
    const stepHtml = getStepHtml(formContents);

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
      <ol>
          ${stepHtml}
      </ol>
  </div>`;
}

function getIngredientHtml(formContents) {
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

  return ingredientHtml;
}

function getStepHtml(formContents) {
  var stepHtml = "";
  var stepIndex = 1;

  while (true) { // creates html for each step input
      if (formContents['step'+stepIndex]!=undefined) {
          stepHtml += `<li class="step">${formContents['step'+stepIndex]}</li>`;
          stepIndex++;
      }
      else{
          break;
      }       
      
  }
  return stepHtml;
}

function addIngredientField() { // adds ingredient html ingredient input field when user clicks add ingredient button
    const ingredientNum = $("#ingredients > div").length + 1;
    $('#ingredients').append(`<div class="form-group">
    <label for="ingredient${ingredientNum}">Ingredient ${ingredientNum}</label>
    <input type="text" class="form-control" id="ingredient${ingredientNum}" name="ingredient${ingredientNum}" placeholder="An extra ingredient" required>
  </div>`)
}

function addStepField() { // adds step html step input field when user clicks add step button
  const stepNum = $("#steps > div").length + 1;
  $('#steps').append(`<div class="form-group">
  <label for="step${stepNum}">Step ${stepNum}</label>
  <textarea required class="form-control" id="step${stepNum}" name="step${stepNum}" rows="4" placeholder="Another step."></textarea>
</div>`)
}
