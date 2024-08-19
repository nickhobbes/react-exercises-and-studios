import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <p className={classes.choresHeading}>Chores TODO</p>
         <ol>
            <li className={classes.choresText}>Chore 1</li>
            <li className={classes.choresText}>Chore 2</li>
         </ol>
      </div>
   );
}