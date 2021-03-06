import React, { useRef, useState, useEffect } from "react";
import { storage, collection } from "../../firebase";
import useVisibility from "./useVisibility";
import bookimage from "./coming-soon.jpg";

function Image({ type, alt, book, ...props }) {
	const [inView, setInView] = useState(false);
	const imgRef = useRef(null);
	const [Img, setImg] = useState(bookimage);

	const API_KEY = "AIzaSyB1TtjgdaS-JyFVHFmWz_OMXhg8ft5Tbpw";
	const AUTHORS_ENGINE = "af35ce6be8762aee9";
	const BOOKS_ENGINE = "b322c10bd42a76344";

	const SEARCH_ENGINE = type === "author" ? AUTHORS_ENGINE : BOOKS_ENGINE;
	const STORAGE_LOCATION = type === "author" ? "author" : "book-covers";
	const storageRef = storage.ref();

	const update = async (url) => {
		const docRef = (
			await collection.where("dakhalId", "==", book["dakhalId"]).get()
		).docs[0].id;
		const docUpdate = await collection
			.doc(docRef)
			.update({ imageURL: url });
	};

	const upload = (file, filename) => {
		var metadata = {
			contentType: "image/jpg",
		};
		let uploadTask = storageRef
			.child(`${STORAGE_LOCATION}/${filename.replaceAll(" ", "_")}`)
			.put(file, metadata);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				var progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			},
			(error) => {
				console.log(error);
			},
			() => {
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					console.log("File available at", downloadURL);
					update(downloadURL);
				});
			}
		);
	};

	const downloadFile = (url, filename) => {
		var xhr = new XMLHttpRequest();
		xhr.responseType = "blob";
		xhr.onload = function () {
			console.log(xhr.response);
			upload(xhr.response, filename);
		};
		xhr.open("GET", url);
		xhr.send();
	};

	const getImgURL = (q) => {
		const xhr = new XMLHttpRequest();
		let url = "";
		xhr.addEventListener("load", () => {
			const json = JSON.parse(xhr.responseText);
			const { items = [] } = json;
			try {
				url = items[0].image.thumbnailLink;
				console.log("URL result : ", url);
				downloadFile(url, q);
				setImg(url);
			} catch (error) {
				console.log("image set to default");
				setImg(bookimage);
				console.log(error);
			}
		});
		xhr.open(
			"GET",
			`https://customsearch.googleapis.com/customsearch/v1/siterestrict?searchType=image&cx=${SEARCH_ENGINE}&q=${encodeURI(
				q
			)}&key=${API_KEY}`
		);
		xhr.send();
	};

	useEffect(() => {
		if (book !== undefined) {
			if (book["imageURL"]) {
				console.log("1");
				setImg(book["imageURL"]);
			} else {
				console.log("2");
				console.log(
					"searching for ",
					book["pustakNameEnglish"].join(" ") +
						" " +
						book["lekhakNameEnglish"].join(" ")
				);
				getImgURL(
					book["pustakNameEnglish"].join(" ") +
						" " +
						book["lekhakNameEnglish"].join(" ")
				);
			}
			return () => {};
		}
	}, []);

	useVisibility(imgRef, () => {
		setInView(true);
	});

	return (
		<div className="image-div" ref={imgRef}>
			{inView ? <img alt={alt} src={Img} {...props} /> : null}
		</div>
	);
}

export default Image;
