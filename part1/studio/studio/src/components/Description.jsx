import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://rasamalaysia.com/about/";
    let authorPhoto = "https://rasamalaysia.com/wp-content/uploads/2022/12/hello-from-bee-profile-img.jpg";
    let authorName = "Bee Yinn Low";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "{authorPhoto} Profile Picture" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Rasa Malaysia</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Pull Apart Garlic Bread</h1>
                    <p>homemade pull apart garlic bread recipe that is easy, fool proof and yields the softest and best garlic bread ever!</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }

}

export default RecipeDescription;