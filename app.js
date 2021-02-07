document.getElementById('submit').addEventListener('click', function(){
    const mealInput = document.getElementById('inputMeal').value
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+mealInput+'')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
})
 const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal => {
      const mealDiv = document.createElement('mealDiv');
         const mealInfo = `
         <div class="mealInfo">
         <img src=${meal.strMealThumb}>
          <h3 class="mealName">${meal.strMeal}</h3>
          <button onclick="displayIngredient('${meal.strMeal}')">Ingredients</button>
         </div>
         `;
         mealDiv.innerHTML = mealInfo;
         mealsDiv.appendChild(mealDiv);
    });
            
 }
  const displayIngredient = meal => {
       let i = meal.strIngredient1;
        i = meal.strIngredient2;
        i = meal.strIngredient3;
        i = meal.strIngredient4;
        i = meal.strIngredient5;
        i = meal.strIngredient6;
        i = meal.strIngredient7;
        i = meal.strIngredient8;
        i = meal.strIngredient9;
        i = meal.strIngredient10;
        const detailIngredient =  meal[`strIngredient${i}`]

        console.log(detailIngredient);

  }
