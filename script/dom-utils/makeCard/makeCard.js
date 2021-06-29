const makeCard = (target, image, title, authors, description) => {
    target.innerHTML +=
    `<div class="result-grid-card result-grid-card--flex-column-space-between-center"><div class="result-grid-card-top result-grid-card-top--flex-row-space-between-center"><div class="result-grid-card-top-left"><img src="${image}" alt="" class="result-grid-card-img"></div><div class="result-grid-card-top-right result-grid-card-top-right--flex-column-center-center"><h3 class="result-grid-card-title">${title}</h3><p class="result-grid-card-authors">${authors}</p></div></div><div class="result-grid-card-bottom result-grid-card-bottom--flex-column-flex-start-center"><p class="result-grid-card-description">${description}</p></div></div>`; 
}
export default makeCard;