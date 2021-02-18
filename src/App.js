import React, { Component } from "react";

import Listing from "./container/listing/Listing";
import Details from "./container/details/Details";
import LekhakList from "./container/LekhakList/LekhakList";
import LekhakBooks from "./container/lekhakBooks/LekhakBooks";

import MobileNav from "./components/navbar/mobileNav";
import Header from "./components/header/Header";
import AboutUs from "./components/about-us/AboutUs";
import Recommendation from "./components/recommendation/Recommendation";

const detailsURLPattern = /\/?details\/[a-z0-9A-Z]{20}/;
class App extends Component {
	constructor() {
		super();

		this.state = {
			show: "listing",
			currentDetails: {},
			results: [],
			searched: false,
			searchAgainst: "pustakName",
			input: "",
			prakar: "",
			lekhakLoading: false,
			activeTab: 1,
			lekhakDict: { "करुणा गोखले": {'count':7}, "कृ मु उजळंबकर": {'count':9}, "के सागर": {'count':75} },
			lekhakSearched: false,
			lekhakResults: [],
			currentLekhak: "",
			isBtnClicked: "क",
		};
	}

	preventBackButton = () => {
		console.log("listener added");
		window.addEventListener("load", function () {
			window.history.pushState({ noBackExitsApp: true }, "");
		});

		window.addEventListener("popstate", function (event) {
			if (event.state && event.state.noBackExitsApp) {
				window.history.pushState({ noBackExitsApp: true }, "");
			}
		});
	};

	componentDidMount() {
		const self = this;
		this.preventBackButton();
		window.addEventListener(
			"hashchange",
			function () {
				//console.log("The hash has changed!");
				self.setPath();
			},
			false
		);
		this.setPath();
	}

	setPath = () => {
		const currURL = window.location.href.split("#");
		if (currURL.length > 1) {
			let endPart = currURL[1].toLowerCase();
			if (endPart.includes("details")) {
				var patt = detailsURLPattern;
				if (patt.test(endPart)) this.setState({ show: "details" });
			} else if (endPart.includes("lekhaklist")) {
				this.setState({ show: "lekhaklist" });
			} else if (currURL[1].includes("aboutus")) {
				this.setState({ show: "aboutus" });
			} else if (currURL[1].includes("recommendation")) {
				this.setState({ show: "recommendation" });
			} else if (currURL[1].includes("lekhakbooks")) {
				this.setState({ show: "lekhakbooks" });
			} else {
				this.setState({ show: "listing" });
			}
		}
	};

	render() {
		return (
			<div className='App'>
				<Header url={this.state.show} />
				{this.state.show === "details" && (
					<Details bookDetail={this.state.currentDetails} />
				)}
				{this.state.show === "lekhaklist" && (
					<LekhakList
						setCurrentDetails={(book) =>
							this.setState({ currentDetails: book })
						}
						setParentState={this.setState.bind(this)}
						{...this.state}
					/>
				)}
				{this.state.show === "lekhakbooks" && (
					<LekhakBooks
						setCurrentDetails={(book) =>
							this.setState({ currentDetails: book })
						}
						setParentState={this.setState.bind(this)}
						{...this.state}
					/>
				)}
				{this.state.show === "listing" && (
					<Listing
						setCurrentDetails={(currentDetails) =>
							this.setState({ currentDetails })
						}
						setParentState={this.setState.bind(this)}
						{...this.state}
					/>
				)}
				{this.state.show === "aboutus" && <AboutUs />}
				{this.state.show === "recommendation" && <Recommendation />}
				<MobileNav url={this.state.show} />
			</div>
		);
	}
}

export default App;
