let query = document.querySelector('.query');
let searchbtn = document.querySelector('.searchbtn');
let searchbtn2 = document.querySelector('.searchbtn2');

searchbtn.onclick = function(){
  let url = 'https://www.google.com/search?q=' + query.value;
  window.open(url,'_self');
}

searchbtn2.onclick = function(){
  let url2 = 'https://duckduckgo.com/?q=' + query.value;
  window.open(url2,'_self');
}

var color = ['#b92b27', '#659999', '#c31432', '#f5af19', '#10ac84', "#5f27cd", "#d53369"];
var i = 0;

document.querySelector(".back").addEventListener("click", function(){
  i = i<color.length ?++i : 0;
  document.querySelector("body").style.background = color[i]
})

document.querySelector("#getval").addEventListener('change',readURL,true);
function readURL(){
  var file = document.querySelector('#getval').files[0];
  var reader =  new FileReader();
  reader.onloadend = function(){
    document.querySelector('#bg').style.backgroundImage = "url("+ reader.result + ")";
  }
  if(file){
    reader.readAsDataURL(file);
  } else {
    
  }
}