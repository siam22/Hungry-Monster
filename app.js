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
          <h5>Ingredients:</h5>
          <li>${meal.strIngredient1}</li>
          <li>${meal.strIngredient2}</li>
          <li>${meal.strIngredient3}</li>
          <li>${meal.strIngredient4}</li>
          <li>${meal.strIngredient5}</li>
          <li>${meal.strIngredient6}</li>
          <li>${meal.strIngredient7}</li>
          <li>${meal.strIngredient8}</li>
          <li>${meal.strIngredient9}</li>
          <li>${meal.strIngredient10}</li>
         </div>
         `;
         mealDiv.innerHTML = mealInfo;
         mealsDiv.appendChild(mealDiv);
    });
 }
