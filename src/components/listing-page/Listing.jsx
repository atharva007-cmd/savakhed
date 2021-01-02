import React, { Component } from "react";
import "./listing.css";
import book_details from "./book_detail";
import ListingFragment from "./ListingFragment";
import BookError from "./BookError";

class Listing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
			books_found: [],
		};
		this.filterTable = this.filterTable.bind(this);
	}

	filterTable(input) {

		// Setting necessary variables
		let matching_books = [];

		// Flush states
		this.setState({
			input: "",
			books_found: []
		})

		document.querySelector(".container").style.justifyContent = "center";
		
		if (input.length > 0) {
			document.querySelector(".container").style.justifyContent = "flex-start";

			// Searching books
			matching_books = book_details.filter((book) => {
				return (
					book.author
						.toLowerCase()
						.includes(input.toLowerCase()) ||
					book["bookname"]
						.toLowerCase()
						.includes(input.toLowerCase())
				);
			});
			
			// Setting book_found state to matching_books
			this.setState(() => ({
				input: input,
				books_found: matching_books
			}));
		}
	};

	render() {

		return (
			<div className="container">
				<form className="form">
					<input
						className="search-bar"
						type="text"
						placeholder="Search by Book name / Author name"
					/>
					<button
						className="search-button"
						type="submit"
						onClick={(event) => {
							event.preventDefault();
							this.filterTable(document.getElementsByClassName("search-bar")[0].value)
						}}
					>
						Search
					</button>
				</form>
				<div className="table">{

					this.state.books_found.length === 0 && this.state.input.length > 0
					? <BookError/>
					: (this.state.books_found.map((book,index) => (
					<ListingFragment keys={index} bookDetails={book}/>
				)))
				}</div>
			</div>
			
		);
	}
}

export default Listing;
