import React from 'react'
import ReactDOM, { render } from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

let bookList = [{
      "Titles": "Diary of a wimpy kid : Greg Heffley's journal",
      "Author": "Kinney, Jeff",
      "ItemsLost": 63,
      "Image": "wimp1"
    },
    {
      "Titles": "The catcher in the rye",
      "Author": "Salinger, J. D.",
      "ItemsLost": 49,
      "Image": "RYE"
    },
    {
      "Titles": "The great Gatsby",
      "Author": "Fitzgerald, F. Scott",
      "ItemsLost": 47,
      "Image": "Gatsby"
    },
    {
      "Titles": "A child called 'it' : one child's courage to survive",
      "Author": "Pelzer, David J.",
      "ItemsLost": 45,
      "Image": "IT"
    },
    {
      "Titles": "The autobiography of Malcolm X",
      "Author": "X, Malcolm,",
      "ItemsLost": 45,
      "Image": "AutobiographyOfMalcolmX"
    },
    {
      "Titles": "Diary of a wimpy kid : the third wheel",
      "Author": "Kinney, Jeff",
      "ItemsLost": 44,
      "Image": "Wimp2"
    },
    {
      "Titles": "Fifty shades of Grey",
      "Author": "James, E.L.",
      "ItemsLost": 44,
      "Image": "shades"
    },
    {
      "Titles": "The alchemist",
      "Author": "Coelho, Paulo",
      "ItemsLost": 43,
      "Image": "alchemist"
    },
    {
      "Titles": "Diary of a wimpy kid : dog days",
      "Author": "Kinney, Jeff",
      "ItemsLost": 42,
      "Image": "wimp3"
    },
    {
      "Titles": "The coldest winter ever : a novel",
      "Author": "Souljah, Sister",
      "ItemsLost": 42,
      "Image": "coldest"
    },
    {
      "Titles": "The fault in our stars",
      "Author": "Green, John",
      "ItemsLost": 42,
      "Image": "Fault"
    },
    {
      "Titles": "Diary of a wimpy kid : the last straw",
      "Author": "Kinney, Jeff",
      "ItemsLost": 41,
      "Image": "wimp4"
    },
    {
      "Titles": "All souls : a family story from Southie",
      "Author": "MacDonald, Michael Patrick",
      "ItemsLost": 39,
      "Image": "allSouls"
    },
    {
      "Titles": "Diary of a wimpy kid : hard luck",
      "Author": "Kinney, Jeff",
      "ItemsLost": 39,
      "Image": "wimp5"
    },
    {
      "Titles": "The book thief",
      "Author": "Zusak, Markus",
      "ItemsLost": 39,
      "Image": "bookThief"
    },
    {
      "Titles": "The absolutely true diary of a part-time Indian",
      "Author": "Alexie, Sherman",
      "ItemsLost": 38,
      "Image": "partTime"
    },
    {
      "Titles": "Diary of a wimpy kid : cabin fever",
      "Author": "Kinney, Jeff",
      "ItemsLost": 36,
      "Image": "wimp6"
    },
    {
      "Titles": "Diary of a wimpy kid : the ugly truth",
      "Author": "Kinney, Jeff",
      "ItemsLost": 36,
      "Image": "wimp7"
    },
    {
      "Titles": "The hunger games",
      "Author": "Collins, Suzanne",
      "ItemsLost": 36,
      "Image": "hungerGames"
    },
    {
      "Titles": "The cat in the hat",
      "Author": "Seuss, Dr.",
      "ItemsLost": 35,
      "Image": "cat"
    }
  ];

const pictures = (number, image) => {
    var elements = [];
    for (let i =0; i < number; i++){
        elements.push(<img src={require("./assets/"+image+".jpg")} alt="" className="book" key={i} />); 
    }
    return elements;
}

const Book = ({title, author, items, image}) => {
	return (
		<section className="holder">
			<div className="titleAuthor">
        		<div className="title">{title}</div>
        		<div className="author">{author}</div>
    		</div>
    		<div className="itemCount">{items}</div>
  			<div className="imgHolder">{pictures(items, image)}</div>
		</section>
	)
}

class Library extends React.Component {
	render() {
		const { books } = this.props
		return (
			<div>
				{books.map(
					(book, i) =>
						<Book 
							key={i}
							title={book.Titles} 
							author={book.Author} 
							items={book.ItemsLost}
							image={book.Image}/>
				)}
			</div>
		)
	}
}



render(
	<Library books={bookList}/>, 
	document.getElementById('root')
)
