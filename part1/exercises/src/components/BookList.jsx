import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Book To Read";
   let book1 = "https://m.media-amazon.com/images/I/71l6aEDzaFS._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81g0AATkO9L._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71lKy8RoFUL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} className={classes.bookImage} alt="The Adventures of Tom Sawyer" />
         <img src={book2} className={classes.bookImage} alt="The Odyssey" />
         <img src={book3} className={classes.bookImage} alt="The Lord of The Rings: The Fellowship of the Ring" />
      </div>      
   );
}