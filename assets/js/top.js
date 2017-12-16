function dblclick() {
window.scrollTo(0,0)
}
if (document.layers) {
document.captureEvents(Event.ONDBLCLICK);
}
document.ondblclick=dblclick;