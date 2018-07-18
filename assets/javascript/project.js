// Initialize Firebase
var config = {
    apiKey: "AIzaSyAVAgMQ160Gjz9cwBkiiXtlXHvEQwX-n8U",
    authDomain: "groupproject1-bf127.firebaseapp.com",
    databaseURL: "https://groupproject1-bf127.firebaseio.com",
    projectId: "groupproject1-bf127",
    storageBucket: "",
      };
  firebase.initializeApp(config);
 
  var dataRef = firebase.database();


$("#lyricBtn").hide()
$("#list").hide()

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

   //Creates variable for holding data
   var newArtistSearch = {
    artist: artistSearch
};

//Uploads artist search to the database
dataRef.ref().push(newArtistSearch);
    
    console.log(artistSearch);


var queryURL = "https://api.audd.io/?method=findLyrics&q=" + artistSearch +  "&api_token=f846db22eaf81cb3e7a79d0af9df399c"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    
console.log(response.result[0].lyrics);
    

for (var i = 0; i < response.result.length; i++) {

var ourLyrics = response.result[i].lyrics;
var ourSongs = response.result[i].full_title;




var lyricBtn = $('<button id="lyricBtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong'+ [i] + '" > Lyrics </button>')

var modalBtn = $('<div class="modal fade" id="exampleModalLong'+ [i] + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="exampleModalLongTitle">LYRICS</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div id="insideBtn' + [i] + '" class="modal-body">' + ourLyrics + '</div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ')

$("#songs").append('<br/>' + ourSongs + "<br/>")
$("#songs").append(modalBtn)
$("#songs").append(lyricBtn)


  }  
});


$("#lyricBtn").show()



 

});






 

