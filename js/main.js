"use strict";

import { Scrollbar } from "./scrollbar.js";
import { initNavbar } from "./navbar.js";

const wrapper = document.getElementById("wrapper");
const contentLayer = document.getElementById("contantLayer");
const fixedLayer = document.getElementById("fixed");

const navbar = initNavbar();

//

const header = document.getElementById("header");

const mainScrollbarTag = document.getElementById("main_scrollbar");
const mainScrollbar = new Scrollbar(contentLayer, mainScrollbarTag);
mainScrollbar.setClientHeihgt(document.documentElement.clientHeight);

//

function FixedLayerPositionation() {
    let headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom > 0) {
        fixedLayer.style.top = headerBottom + "px";
        let fixedLayerHeight = document.documentElement.clientHeight - headerBottom;
        fixedLayer.style.height = fixedLayerHeight + "px";
        navbar.scrollbar.setClientHeihgt(fixedLayerHeight);
    } else {
        fixedLayer.style.top = 0;
        fixedLayer.style.height = document.documentElement.clientHeight + "px";
        navbar.scrollbar.setClientHeihgt(document.documentElement.clientHeight);
    }
}

FixedLayerPositionation();

wrapper.addEventListener("wheel", (e) => {
    if (e.target == fixedLayer) {
        mainScrollbar.wheelEventHandler(e);
        FixedLayerPositionation();
    }
});

//
