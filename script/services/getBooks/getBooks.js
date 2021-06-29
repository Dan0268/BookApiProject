// const getRelevantInfo = (jsonResponse) => {
//     return jsonResponse.items.map((item) => {
//         const book = {
//             title: null,
//             image: null,
//             authors: null,
//             description: null,
//             link: null,
//         };
//         book.title = itemvolumeInfo?.title || book.title;

//     })
// }


const getBooks = async (url, searchTerm) => {
    const responsePromise = fetch(`${url}${searchTerm}&maxResults=40`)
    const response = await responsePromise;
    const jsonResponse = await response.json();
    return jsonResponse.items;
    // !== undefined
    //     ? getRelevantInfo(jsonResponse)
    //     : null;
};
export default getBooks;

