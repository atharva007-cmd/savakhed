import React, { useEffect } from "react";
import "./header.css";
import { ReactComponent as Arrow } from "./left-arrow.svg";

function Header() {
	const setLabel = () => {
		const href = window.location.href;
		if (href.includes("lekhakList")) return "lekhak-list";
		if (href.includes("aboutUs")) return "about-us";
		if (href.includes("details")) return "details";
		if (href.includes("search")) return "search";
		if (href.includes("recommendation")) return "recommendation";
		return "search";
	};

	const removeActive = () => {
		const nav = document.getElementsByClassName("nav-bar")[0];
		const children = nav.children;

		if (children) {
			[...children].forEach((element) => {
				element
					? element.children[0].classList.remove("active")
					: console.log();
			});
		}
	};

	const hashChange = () => {
		window.addEventListener(
			"hashchange",
			function () {
				console.log("The hash has changed!");
				if (document.getElementById(setLabel()) != null) {
					removeActive();
					document.getElementById(setLabel()).classList.add("active");
				}
			},
			false
		);
	};

	const onClickHandler = (target) => {
		removeActive();
		document.getElementById(target).classList.add("active");
	};

	useEffect(() => {
		if (document.getElementById(setLabel()) != null) {
			document.getElementById(setLabel()).classList.add("active");
		}
		hashChange();
	});

	return (
		<nav className="nav-bar">
			{window.location.href.includes("details") ? (
				<a onClick={() => window.history.go(-1)}>
					<div className="back-button">
						<Arrow />
					</div>
				</a>
			) : null}
			<a
				href="/savakhed/#/search"
				onClick={() => {
					onClickHandler("search");
				}}
			>
				<div className="link-placeholders" id="search">
					Search
				</div>
			</a>
			<a
				href="/savakhed/#/lekhakList"
				onClick={() => {
					onClickHandler("lekhak-list");
				}}
			>
				<div className="link-placeholders" id="lekhak-list">
					Lekhak List
				</div>
			</a>
			<a
				href="/savakhed/#/aboutUs"
				onClick={() => {
					onClickHandler("about-us");
				}}
			>
				<div className="link-placeholders" id="about-us">
					About Us
				</div>
			</a>
			<a
				href="/savakhed/#/recommendation"
				onClick={() => {
					onClickHandler("recommendation");
				}}
			>
				<div className="link-placeholders" id="recommendation">
					Recommendation
				</div>
			</a>
			<a
				href="/#/search"
				onClick={() => {
					onClickHandler("about-us");
				}}
			>
				<div className="title" id="title">
					{setLabel().replace("-", " ")}
				</div>
			</a>
		</nav>
	);
}

export default Header;
