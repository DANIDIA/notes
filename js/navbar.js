"use strict";

import { Scrollbar } from "./scrollbar.js";

export function initNavbar() {
    const navbarContent = document.getElementById("navbarContent");
    const scrollbar = document.getElementById("navScrollbar");

    const navScrollbar = new Scrollbar(navbarContent, scrollbar);

    navbarContent.addEventListener("wheel", navScrollbar.getWheelEventHandler());

    fetch("../articles/")
        .then((res) => res.text())
        .then((folder) => {
            let filesNames = folder.match(/\/[^"<>]{0,}\.html/g);

            filesNames.forEach((f) =>
                fetch(f)
                    .then((res) => res.text())
                    .then((articleCode) => {
                        let articleName = getMetaData("name", articleCode);
                        let articleDate = getMetaData("date", articleCode);
                        let articleLesson = getMetaData("number", articleCode);

                        navbarContent.appendChild(
                            getArticleLink(articleName, articleDate, articleLesson)
                        );
                    })
            );
        });

    return { scrollbar: navScrollbar };
}

function getArticleLink(name, date, number) {
    let item = document.createElement("div");
    item.className = "navbar__item";

    let itemName = document.createElement("div");
    itemName.className = "navbar__item-name";
    itemName.innerText = name;

    let itemAddition = document.createElement("div");
    itemAddition.className = "navbar__item-addition";

    let itemNumber = document.createElement("div");
    itemNumber.className = "navbar__lesson-number";
    itemNumber.innerText = `lekcja ${number}`;

    let itemDate = document.createElement("div");
    itemDate.className = "navbar__lesson-date";
    itemDate.innerText = date;

    itemAddition.appendChild(itemNumber);
    itemAddition.appendChild(itemDate);

    item.appendChild(itemName);
    item.appendChild(itemAddition);

    return item;
}

function getMetaData(dataName, article) {
    let findRegEx = `<meta-data-${dataName}\\s{0,}>.{0,}</meta-data-${dataName}\\s{0,}>`;
    let replaceRegEx = `</\{0,1}meta-data-${dataName}\\s{0,}>`;

    let findResult = article.match(new RegExp(findRegEx, "s"));
    let data = findResult ? findResult[0] : "";
    data = data.replace(new RegExp(replaceRegEx, "g"), "");

    return data;
}
