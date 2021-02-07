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
         </div>
         `;
         mealDiv.innerHTML = mealInfo;
         mealsDiv.appendChild(mealDiv);
    });

            
 }
 
