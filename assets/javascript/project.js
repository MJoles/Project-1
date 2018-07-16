function openNav() {
    document.getElementById("myNav").style.width = "100%";
 }
 
 function closeNav() {
    document.getElementById("myNav").style.width = "0%";
 }
 function openSearch() {
     document.getElementById("myOverlay").style.display = "block";
 }
 
 function closeSearch() {
     document.getElementById("myOverlay").style.display = "none";
 }

 $("#submitBtn").on("click", function(event){
    event.preventDefault();
    
    var artistSearch = $("#inputSearch").val();

    var searchMe = artistSearch;
    
    console.log(artistSearch);
  
    

     console.log()


var queryURL = "http://api.genius.com/search?q=" + artistSearch + "&access_token=sGRyLhVTDxgaowHGUqtUkREYFGH5Tdz6STVnF1pByg2JwCoRaTmzkw9iHVC2lS_c" ;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    var ourLyrics = response.response.hits;

  for (var i = 0; i < ourLyrics.length; i++) {

var realLyrics = response.response.hits[i].result.url

realLyrics 
    console.log(response.response.hits[i]);

$("#lyrics").append(response.response.hits[i].result.url)

  }
  



    


});




 

$(document).ready(function(){
	$('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});            
});
});

$("#search-nav").on('click', function(){

openSearch() ;

})






 

