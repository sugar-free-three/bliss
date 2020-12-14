function submitForm() {
    console.log('yayyy form submitted');
    console.log(document.getElementById("recipe_form").elements);
    console.log();
    const stopVar = $('form').serialize()

    const stop1 = 0;
}

function loadRecipes() {
    console.log('made it');
    $('#recipes').text('yayyy');
}