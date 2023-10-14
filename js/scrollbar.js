"use strict";

export class Scrollbar {
    constructor(contentTag, scrollbarTag) {
        this._contentTag = contentTag;
        this._scrollbarTag = scrollbarTag;

        this._clientHeight = this._contentTag.clientHeight;
        this._scrollBlock = document.createElement("div");
        this._scrollbarTag.appendChild(this._scrollBlock);
        this._scrollDist = 0;

        this.updateState();
    }

    updateState() {
        let heightToScroll = this._clientHeight / this._contentTag.scrollHeight;
        let scrollblockHeight = heightToScroll * this._clientHeight;
        this._maxY = this._contentTag.scrollHeight - this._clientHeight;
        this._isScrollArctive = heightToScroll < 1;
        if (this._isScrollArctive) this._scrollBlock.style.height = scrollblockHeight + "px";

        this._scrollbarTag.style.display = this._isScrollArctive ? "block" : "none";

        this._updateView();
    }

    setClientHeihgt(value) {
        this._clientHeight = value;
        this.updateState();
    }

    getMouseEventHandler() {
        return this.mouseEventHandler.bind(this);
    }

    getWheelEventHandler() {
        return this.wheelEventHandler.bind(this);
    }

    _updateView() {
        this._scrollbarTag.style.paddingTop =
            (this._scrollDist / this._contentTag.scrollHeight) * this._clientHeight + "px";
        this._contentTag.style.marginTop = -this._scrollDist + "px";
    }

    _setDist(value) {
        if (value > this._maxY) this._scrollDist = this._maxY;
        else if (value < 0) this._scrollDist = 0;
        else this._scrollDist = value;

        this._updateView();
    }

    mouseEventHandler(e) {
        if (!this._isScrollArctive) return;
        if (e.buttons != 1) return;

        document.getSelection().removeAllRanges();

        let delta = (e.movementY / this._clientHeight) * this._contentTag.scrollHeight;

        this._setDist(this._scrollDist + delta);
    }

    wheelEventHandler(e) {
        if (!this._isScrollArctive) return;

        this._setDist(this._scrollDist + e.deltaY);
    }
}
