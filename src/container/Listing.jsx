import React, { Component } from "react";
import "./listing.css";
import InputSection from "../components/input-section/InputSection";
import ListSection from "../components/list-section/ListSection";
import { db } from "./../firebase";

import mulakshare from "./../container/mulakshare";

class Listing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searched: false,
			loading: false,
			input: "",
			searchAgainst: "lekhak",
			tableHeaders: [],
			results: [],
		};
	}

	search = (label, inputArray) => {
		this.setState({
			loading: true,
		});

		db.collection("bookList")
			.where(label, "array-contains-any", inputArray)
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					let book = doc.data();

					this.setState({
						results: this.state.results.concat([
							{ ...book, id: doc.id },
						]),
					});
					this.getMulakshara(book["lekhak"]);
					this.getMulakshara(book["pustakName"]);
				});

				this.setState({
					tableHeaders: ["Dakhal-ID", "Vibhag-ID", "Book", "Author"],
					loading: false,
				});
			})
			.catch((error) => console.error(error));
	};

	getMulakshara = (inputArray) => {
		let superArray = [];
		inputArray.forEach((word) => {
			let array = [];
			word.split("").forEach((letter) => {
				if (mulakshare.includes(letter)) {
					array.push(letter);
				}
			});
			superArray.push(array);
		});
		console.log(superArray);
	};

	fetchResults = (event) => {
		event.preventDefault();
		document.querySelector(".container").style.placeItems = "center";

		if (this.state.input.length > 0) {
			document.querySelector(".container").style.placeItems =
				"flex-start center";

			this.setState({ tableHeaders: [], results: [], searched: true });

			let inputArray = this.state.input.toLowerCase().split(" ");

			// sorting input-array in descending order
			inputArray.sort(
				(firstString, secondString) =>
					-(firstString.length > secondString.length) ||
					+(firstString.length < secondString.length)
			);

			// reducing the array to max length 10
			if (inputArray.length > 10) {
				let length = inputArray.length;
				inputArray.splice(9, length - 10);
			}

			this.search(this.state.searchAgainst, inputArray);
		} else {
			this.setState({ tableHeaders: [], results: [], searched: false });
		}
	};

	render() {
		return (
			<div className="container">
				<div>
					<InputSection
						onInput={(event) =>
							this.setState({
								input: event.target.value.toLowerCase(),
							})
						}
						searchAgainst={this.state.searchAgainst}
						onChange={(event) =>
							this.setState({
								searchAgainst: event.target.value,
							})
						}
						onSearch={(event) => this.fetchResults(event)}
					/>
					<ListSection
						setCurrentDetails={this.props.setCurrentDetails}
						tableHeaders={this.state.tableHeaders}
						tableElements={this.state.results}
						searched={this.state.searched}
						loading={this.state.loading}
					/>
				</div>
			</div>
		);
	}
}

export default Listing;
