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

$("#search-nav").on('click', function(){

openSearch() ;

})




// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

// $.ajax({
 // url: queryURL,
  //method: "GET"
//}).then(function(response) {
 // console.log(response);
//});


 //"http://api.genius.com/search?q=" + Kendrick%20Lamar + "&access_token=sGRyLhVTDxgaowHGUqtUkREYFGH5Tdz6STVnF1pByg2JwCoRaTmzkw9iHVC2lS_c" ;

