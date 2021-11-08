const searchInput = document.querySelector("#search-input");
const logoSearch = document.querySelector('#logosearch');

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
      if(searchInput.value === ''){
        return;
      }
        search();
    }
    
        if(event.code === "Intro") {
      if(searchInput.value === ''){
        return;
      }
        search();
    }
});

logoSearch.addEventListener("click", () => {
    if(searchInput.value === ''){
      return;
    }
      search();
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
}

document.oncontextmenu = function(){return false;}


/*document.querySelector("#getval").addEventListener('change',readURL,true);
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
}*/
