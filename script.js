function pageReload(){
  var x =window.location = "index.html";
  x.location.reload();
}
function pagereloadstart(){
  setInterval(pageReload,3000);
}