const asyncHandler = async (myPromise, timeout) => {
    const myAnswer = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(myPromise);}, timeout)          
        });
    let myResolve = await myAnswer;    
    // console.log(myResolve);
    // console.log(myResolve[1].volumeInfo);
    // console.log(myResolve[1].volumeInfo.imageLinks.thumbnail);
    // console.log(myResolve[1].volumeInfo.authors.join(", "));
    // console.log(myResolve[1].volumeInfo.title);
    // console.log(myResolve[1].volumeInfo.description);
    return myResolve;
}