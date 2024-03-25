const featuredRecipe = [
  {
    recipeId: 'REC-01',
    name: "Argula Beat and Cheese Salad",
    description: "REFRESHINGLY SWEET",
    url: "../images/argula-salad.jpg"
  },
];

//Make the image the background of the featured recipe

function setFeaturedRecipe(recipeId){
  //Setting the background picture
  let container = document.querySelector("#featuredRecipeBackground");
  let textContainer = document.querySelector("#featuredRecipeText");
  let background = document.createElement("img");

  //Setting text
  let description = document.createElement("h2");
  description.id = "featuredRecipeDescription";

  let recipeName = document.createElement("h1");
  recipeName.id = "featuredRecipeName";

  for(let i = 0; i < featuredRecipe.length; i++)
  {
    if(featuredRecipe[i].recipeId === recipeId)
    {
      background.src = featuredRecipe[i].url;
      background.width = 1000;
      background.height = 465;
      description.textContent = featuredRecipe[i].description;
      recipeName.textContent = featuredRecipe[i].name;
    }
    else
    {
      console.error("There isn't a match for the recipeId argument in featured recipe.");
    }
  }
  container.appendChild(background);
  textContainer.appendChild(description);
  textContainer.appendChild(recipeName);
}

setFeaturedRecipe("REC-01");

