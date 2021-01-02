import React from 'react'
import "./listing.css";

function BookError() {
	return (
		<div className="book-not-found">
			<h3>No such book available</h3>
			<h5>
				Tip: Try searching for keywords matching the book name
				or author name
			</h5>
		</div>
	)
}

export default BookError
