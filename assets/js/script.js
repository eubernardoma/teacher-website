const text = 
document.getElementById('header-name');
const prog = 'Thais Maciel';
let idx = 1;

setInterval(writeText, 310);

function writeText(){
    text.innerText = prog.slice(0, idx);
    idx ++;
    if (idx > prog.length) {
        idx=1;
    }
}

var message="Sorry, right-click has been disabled"; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false")
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
       //alert('No F-12');
        return false;
}
