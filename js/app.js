import { featuredRecipe } from "./scripts.js";
import { latestRecipe } from "./latest.js";

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

function setLatestRecipe(recipeId){
  let container = document.querySelector("#latestRecipePicture");
  let containerDescription = document.querySelector("#latestRecipeText");
  let background = document.createElement("img");

  //Setting text
  let heading = document.createElement("h1");
  let description = document.createElement("h2");
  let authorDescription = document.createElement("h3");

  //Looping through featured recipe
  for(let i = 0; i < latestRecipe.length; i++)
  {
    if (latestRecipe[i].recipeId === recipeId)
    {
      background.src = latestRecipe[i].url;
      background.width = 1000;
      background.height = 465;

      heading.textContent = latestRecipe[i].articleName;
      heading.id = "latestRecipeHeading"
      description.textContent = latestRecipe[i].description;
      description.id = "latestRecipeDescription";
      authorDescription.textContent = latestRecipe[i].authorContent;
      authorDescription.id = "latestRecipeAuthorContent";
    }
    else{
      console.error("There isn't a recipeId that matches the argument.");
    }
    container.appendChild(background);
    containerDescription.appendChild(heading);
    containerDescription.appendChild(description);
    containerDescription.appendChild(authorDescription);
  }
}

setLatestRecipe("REC-001");