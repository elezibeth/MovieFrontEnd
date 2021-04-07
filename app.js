


// Defining a function to display message

function getString(){
  let wordToBeReversed = prompt("Enter your word to be reversed.");
  return wordToBeReversed;
}

function getTitle(){
  let title = document.getElementById("title").nodeValue;
  console.log(title);
  return title;
}

function getAllMovies(){
 
  $.ajax({
    url: "https://localhost:44359/api/Movies/AllMovies",
    type: "GET",
    dataType: "JSON",
    success: function(data){
      console.log(data);
      makeTable(data);

      $("#DisplayAllMovies").html(JSON.stringify(data));
    },
    error: function (err){
      console.log(err);
    }

    })
}




function postMovie(){
  let movieTitle1 = prompt("Enter the title of your movie.");
  let movieTitle1st = movieTitle1.toString();
  let movieGenre = prompt("Enter the genre of your movie.");
  let movieGenreSt = movieGenre.toString();
  let movieDirector = prompt("Enter the name of the director of your movie.");
  let movieDirecctorSt = movieDirector.toString();

  var url1 = "https://localhost:44359/api/Movies";

   var movieData1 = {
      
      "title": movieTitle1st,
      "genre": movieGenreSt,
      "directorName": movieDirecctorSt
    };

  postNewMovie(url1, movieData1);
  

}

function postNewMovie(url1, movieData1){

  $(function(){

    $.ajax({
      type: "POST",
      url: url1,
      data: JSON.stringify(movieData1),
      contentType: "application/json",
      success: function(data){
        console.log(data);
      makeTable1(data);

        $("#DisplayAllMovies").html(JSON.stringify(data));
      },
      error: function(err){
        console.log(err);
      }
    })

 
  
  })

}

function putMovie(){
  let movieId3 = prompt("Enter the index of the movie you want to view.");
  let movieTitle1 = prompt("Enter the title of your movie.");
  let movieGenre = prompt("Enter the genre of your movie.");
  let movieDirector = prompt("Enter the name of the director of your movie.");
  let movieIdSt3 = movieId3.toString();
  var moviebystringUrl3 = "https://localhost:44359/api/Movies/" + movieIdSt3.valueOf();

   var movieData3 = {
      "id": movieId3,
      "title": movieTitle1,
      "genre": movieGenre,
      "directorName": movieDirector
    };

  putNewMovie(moviebystringUrl3, movieData3);
}
function putNewMovie(moviebystringUrl3, movieData3){

  $(function(){

    $.ajax({
      type: "PUT",
      url: moviebystringUrl3,
      data: JSON.stringify(movieData3),
      contentType: "application/json",
      success: function(data){
        console.log(data);
        $("#DisplayAllMovies").html(JSON.stringify(data));
      },
      error: function(err){
      makeTable(data);

        console.log(err);
      }
    })

 
  
  })

}

function deleteMovie(){
  let movieId3 = prompt("Enter the index of the movie you want to dELETE.");
  let movieIdSt3 = movieId3.toString();
  var moviebystringUrl5 = "https://localhost:44359/api/Movies/" + movieIdSt3.valueOf();

   var movieData4 = {
      "id": movieId3,
      "title": "any",
      "genre": "movieGenreSt",
      "directorName": "movieDirecctorSt"
    };

  deleteAMovie(moviebystringUrl5, movieData4);

}
function deleteAMovie(moviebystringUrl5, movieData4){

  $(function(){

    $.ajax({
      type: "DELETE",
      url: moviebystringUrl5,
      data: JSON.stringify(movieData4),
      contentType: "application/json",
      success: function(data){
        console.log(data);
      makeTable(data);

        $("#DisplayAllMovies").html(JSON.stringify(data));
      },
      error: function(err){
        console.log(err);
      }
    })

 
  
  })

}

function getId(){
  let movieId = prompt("Enter the index of the movie you want to view.");
  let movieIdSt = movieId.toString();
  var moviebystringUrl = "https://localhost:44359/api/Movies/" + movieIdSt.valueOf();
   var movieData = {
      "id": movieId,
      "title": "test1",
      "genre": "edit test 1",
      "directorName": "edit test 1g"
    };
  getMovieById(moviebystringUrl, movieData);
}


function getMovieById(movieIdSt, movieData){

 // $("#movies").html(movieIdSt);
 
  $.ajax({
   url: movieIdSt,
   type: "GET",
   Type: JSON.stringify(movieData),
   contentType: "JSON",
    success: function(data){
      console.log(data)
      makeTable(data);

      $("#DisplayAllMovies").html(JSON.stringify(data));
  },
  error: function(err){
   console.log(err);
   prompt("Movie does not exist in database");
  
    }
  })
 

}

function testgetAllMovies(){
 
  $.ajax({
    url: "https://localhost:44359/api/Movies/AllMovies",
    type: "GET",
    dataType: "JSON",
    success: function(data){
      console.log(data);
      makeTable(data);
      $("#DisplayAllMovies").html(JSON.stringify(data));
      

    },
    error: function (err){
      console.log(err);
    }

    })
}
function makeTable(data){
  var table = document.getElementById('myTable');
  var dataStringsToTable = [data];
  for(var i = 0; i < data.length; i++){
    var row = `<tr>
                  <tr class="table-danger">
                  <td>${data[i].title}</td>
                  <td>${data[i].genre}</td>
                  <td>${data[i].directorName}</td>
              </tr>`
    table.innerHTML += row;
  }
}

function makeTable1(data){
  var table = document.getElementById('myTable');
  var dataStringsToTable = [data];
  for(var i = 0; i < dataStringsToTable.length; i++){
    var row = `<tr>
                  <tr class="table-danger">
                  <td>${dataStringsToTable[i].title}</td>
                  <td>${dataStringsToTable[i].genre}</td>
                  <td>${dataStringsToTable[i].directorName}</td>
              </tr>`
    table.innerHTML += row;
  }
}

function getSearchText(){
  
  let searchInput = document.getElementById("searchText").value;
  document.getElementById('UglyTextOutPut').innerHTML = searchInput;
  search(searchInput);
  

}
function search(searchValue){
  $.ajax({
    url: "https://localhost:44359/api/Movies/AllMovies",
    type: "GET",
    dataType: "JSON",
    success: function(data){
      
     
     
     var xyz = data.filter(m => m.title === searchValue);
   
    

     makeTitleTable(xyz);
    },
    error: function (err){
      alert(err);
    }

    })
  
}
function getTitleSearchText(){
  
  let searchInput = document.getElementById("searchTitleText").value;
  search(searchInput);
  

}
function makeTitleTable(data){
  var table = document.getElementById('titleTable');
  var dataStringsToTable = [data];
  for(var i = 0; i < data.length; i++){
   
    var row = `<tr>
                  <tr class="table-danger">
                  <td>${data[i].id}</td>
                  <td>${data[i].title}</td>
                  <td>${data[i].genre}</td>
                  <td>${data[i].directorName}</td>
              </tr>`
    table.innerHTML += row;
  }
}

function getUrlIdforIMBD(){
 
  
    let searchInput = document.getElementById("searchTextForIMBD").value;
  let str1 = searchInput.split(" ");
  let newStr = str1.join("%");
  


    let urlImbd = "https://imdb-api.com/API/SearchKeyword/k_f112f1iz/" + newStr;
    getMovieByIMBD(urlImbd);
    
    
  
  

}
function getMovieByIMBD(url){

  // $("#movies").html(movieIdSt);
  
   $.ajax({
    url: url,
    type: "GET",
    contentType: "JSON",
     success: function(data){
       console.log(data)
       makeTable1(data);
 
       $("#DisplayAllMovies").html(JSON.stringify(data));
   },
   error: function(err){
    console.log(err);
    prompt("Movie does not exist in database");
   
     }
   })
  
 
 }



function makeTable1(data){
  var table = document.getElementById("createTable");
  var dataStringsToTable = [data];
  for(var i = 0; i < dataStringsToTable.length; i++){
    var row = `<tr>
                  <tr class="table-danger">
                  <td>${dataStringsToTable[i].id}</td>
                  <td>${dataStringsToTable[i].title}</td>
                  <td>${dataStringsToTable[i].genre}</td>
                  <td>${dataStringsToTable[i].directorName}</td>
              </tr>`
    table.innerHTML += row;
  }
}
function getPostText(){
  let movieId3 = document.getElementById("newTitle").value;
  let movieGenre = document.getElementById("newGenre").value;
  let movieDirector = document.getElementById("newDirector").value;
  var moviebystringUrl3 = "https://localhost:44359/api/Movies";

   var movieData3 = {
      "id": 0,
      "title": movieId3,
      "genre": movieGenre,
      "directorName": movieDirector
    };

  postNewMovie(moviebystringUrl3, movieData3);
}

function getDeleteText(){
  
  let searchInput = document.getElementById("movieIndexNumber").value;
  deleteMovieFromForm(searchInput);
  

}
function deleteMovieFromForm(input){
  let movieId3 = input;
  let movieIdSt3 = movieId3.toString();
  var moviebystringUrl5 = "https://localhost:44359/api/Movies/" + movieIdSt3.valueOf();

   var movieData4 = {
      "id": movieId3,
      "title": "any",
      "genre": "movieGenreSt",
      "directorName": "movieDirecctorSt"
    };

  deleteAMovieFromForm(moviebystringUrl5, movieData4);

}
function deleteAMovieFromForm(moviebystringUrl5, movieData4){

  $(function(){

    $.ajax({
      type: "DELETE",
      url: moviebystringUrl5,
      data: JSON.stringify(movieData4),
      contentType: "application/json",
      success: function(data){
       alert("Success");
      makeDeleteTable(data);


        
      },
      error: function(err){
        alert(err);
      }
    })

 
  
  })

}
function makeDeleteTable(data){
  var table = document.getElementById('deleteTable');
  
  for(var i = 0; i < data.length; i++){
   
    var row = `<tr>
                  <tr class="table-danger">
                  <td>${data[i].title}</td>
                  <td>${data[i].genre}</td>
                  <td>${data[i].directorName}</td>
              </tr>`
    table.innerHTML += row;
  }
}

