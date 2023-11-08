import { DATA, countKind } from "../data/data.js";
//import { setButtonCategory, setItemCard } from "./categories/controlCategories.js";
window.addEventListener("DOMContentLoaded", () => {
    const groupButton = document.getElementById("group-btn-kind");
    const groupItem = document.getElementById("group-item");
    if(DATA.length > 0){
        groupButton.innerHTML = setButtonCategory("ALL", DATA.length);
        groupItem.innerHTML = "";
    }
    var listKind = [];
    for (let i = 0; i < DATA.length; i++) {
        if (!listKind.includes(DATA[i].kind)) {
            listKind.push(DATA[i].kind);
            let quantity = countKind(DATA[i].kind);
            groupButton.innerHTML += setButtonCategory(DATA[i].kind, quantity);
        }
        groupItem.innerHTML += setItemCard(DATA[i]);
    }

});

/* set group button category */
export function setButtonCategory(kind, quantity) {
    return "<li class='list-group-item p-0 m-0 border-0'> \
        <button onclick=\"buttonUpdateKindItem()\" class='btn-kind btn rounded align-self-center d-flex justify-content-between'/>\
        <span class='ms-2'>" + kind + "</span>\
        <span class='badge bg-primary'>" + quantity + "</span>\
        </button>\
        </li>";
}
/* set group item category */
export function setItemCard(item) {
    var description = (item.description.length > 100) ? (item.description.substring(0, 100) + "...") : item.description;
    return "<div id='item' class='col-12 col-lg-4 col-md-6 mb-5'>\
        <div class='card' style='vertical-align: middle;'>\
        <div class='row g-0'>\
        <div id='card-col' class='col-12'>\
        <a onclick=\"controlPage('product')\">\
        <img class='card-img-item img-fluid rounded object-fit-cover' src='" + item.urlImage + "'>\
        </a>\
        </div>\
        <div id='card-col' class='col-12'>\
        <div class='card-body'>\
        <ul class='list-group'>\
        <li class='list-group-item border-0'>\
        <h3 class='card-title'><a class='alert-primary' onclick=\"controlPage('product')\" >"+ item.name +"</a></h3>\
        </li>\
        <li class='list-group-item border-0'>\
        <h4>" + item.price + " VND</h4>\
        </li>\
        <li class='list-group-item border-0'>\
        <h6>"+ item.kind +"</h6>\
        </li>\
        </ul>\
        <p class='card-text'>" + description + "</p>\
        <div class='product-ratings'>\
        <ul class='list-inline'>\
        <li class='list-inline-item selected'><i class='bi bi-star-fill'></i>\
        </li>\
        <li class='list-inline-item selected'><i class='bi bi-star-fill'></i>\
        </li>\
        <li class='list-inline-item selected'><i class='bi bi-star-fill'></i>\
        </li>\
        <li class='list-inline-item selected'><i class='bi bi-star-half'></i>\
        </li>\
        <li class='list-inline-item'><i class='bi bi-star'></i>\
        </li>\
        </ul>\
        </div>\
        <div class='product-add-cart'>\
        <a class='btn btn-primary' onclick=\"controlPage('product')\" role='button'>\
        <i class='bi bi-cart-plus'></i>\
        <span>Add cart</span>\
        </a>\
        </div>\
        </div>\
        </div>\
        </div>\
        </div>\
        </div>";
}