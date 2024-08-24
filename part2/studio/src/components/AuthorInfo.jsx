import "./styling.css"
import recipedata from "./recipe.json"

function AuthorInfo() {
  const recipeAuthor = <div key={recipedata[0].name}>{recipedata[0].author}</div>;
  const recipeAuthorImage = <div key={recipedata[0].name}><img src={recipedata[0].authorImage} alt={recipedata[0].author} class="authorImage" /></div>;
  const recipeWebsite = <div key={recipedata[0].name}><a href={recipedata[0].website}>{recipedata[0].website}</a></div>;

  return (
    <div>
      {recipeAuthor}
      {recipeAuthorImage}
      {recipeWebsite}
    </div>
  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 