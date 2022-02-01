export const Catalog = (array) => {
    let html = `<section class="container">`
    for (const food of array) {
        html += `<section class="plant">${food.type}</section>`
    }
    html += `</section>`
    return html
}