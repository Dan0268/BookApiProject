import getSearchString from "../utils/getSearchString/getSearchString.js";
import getBooks from "../services/getBooks/getBooks.js";
import makeCard from "../dom-utils/makeCard/makeCard.js";

const searchButton = document.getElementById("searchButton");
const noResult = document.getElementById("noResult");
const resultsGrid = document.getElementById("resultsGrid");
const searchBar = document.getElementById("searchBar");


searchButton.addEventListener("click", async (event) => {
    if (getSearchString(searchBar) === "") {
        resultsGrid.innerHTML = "";
        noResult.innerHTML = '<p class="noresult-notification">Please enter a search term</p>'} else {
    const searchResult = await getBooks("https://www.googleapis.com/books/v1/volumes?q=", getSearchString(searchBar));
    console.log(searchResult);
    if (typeof searchResult === "undefined") {
        resultsGrid.innerHTML = "";
        noResult.innerHTML = '<p class="noresult-notification">No results to show</p>'}
    else {
    // (id, image, title, authors, description)
    resultsGrid.innerHTML = "";
    noResult.innerHTML = "";
    searchResult.map(result => {
        makeCard(
            resultsGrid,
            result.volumeInfo?.imageLinks?.thumbnail || result.volumeInfo?.imageLinks?.smallthumbnail || "",
            result.volumeInfo?.title || "No Title",
            result.volumeInfo?.authors?.join('<br>') || "No Authors",
            result.volumeInfo?.description || "No Description",
        )});}}
});
