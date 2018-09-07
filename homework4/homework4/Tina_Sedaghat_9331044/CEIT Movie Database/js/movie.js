$(document).ready(function(){
    $(".list-inline a").click(function(){
        $(this).tab('show');
    });
});
    v1=parent.document.URL.substring(parent.document.URL.indexOf('?')+1, parent.document.URL.length);
    var requestURL = v1; //store the URL of the JSON we want to retrieve in a variable.
    var request = new XMLHttpRequest();// create a new request object instance from the XMLHttpRequest
    request.open('GET', requestURL);//open a new request using the open() method
    request.responseType = 'json';//here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON,and that this should be converted behind the scenes into a JavaScript object.
    request.send();//  Then we send the request with the send() method:
    request.onload = function () {// waiting for the response to return from the server, then dealing with it
        var JsonObject = request.response;// get the string from the response
        console.log(JsonObject);
        console.log("inam jasonesh");
        getTitle(JsonObject);
        getContentRating(JsonObject);
        getlanguages(JsonObject);
        getDirector(JsonObject);
        getwriters(JsonObject);
        getStars(JsonObject);
        getPhoto(JsonObject);
        getBackground(JsonObject);
        getdDescription(JsonObject);
        getGenre(JsonObject);
        $("div").removeClass("hidden");
    }
    function getTitle(jsonObj) {
        var x = jsonObj['title'];
        var year=jsonObj['year'];
        document.getElementsByClassName("single-title")[0].innerHTML ="download " + x + " "+ year+ " moive" ;
        document.getElementsByClassName("time")[0].innerHTML=year;
    }
    function getContentRating (jsonObj) {
        var x = jsonObj['content_rating'];
        document.getElementsByClassName("mpaa")[0].innerHTML = x  ;
    }
    function getlanguages(jsonObj) {
        for (i in jsonObj.metadata.languages) {
            var x = jsonObj.metadata.languages[i];
            document.getElementsByClassName("language")[0].innerHTML += ',' + x;
        }
    }
    function getDirector(jsonObj) {
        var x = jsonObj['director'];
        document.getElementsByClassName("show_person")[0].innerHTML=x;
    }
    function getwriters(jsonObj) {
        for (i in jsonObj.writers) {
            var x = jsonObj.writers[i];
            document.getElementsByClassName("show_person")[1].innerHTML += ',' + x;
        }
    }
    function getStars(jsonObj) {
        for (i in jsonObj.stars) {
            var x = jsonObj.stars[i];
            document.getElementsByClassName("show_person")[2].innerHTML += ',' + x;
        }
    }
    function getPhoto(jsonObj) {
        var x = jsonObj.poster.thumb;
        document.getElementById("img").src= x;
    }
        /////////////////////////////////////
       function getBackground(jsonObj) {
           var x = jsonObj.poster.large;
           console.log(x);
            console.log("backgorun");
           document.getElementById("back").style.url= x;
       }
        /////////////////////////////////////
    function getdDescription(jsonObj) {
        var x = jsonObj['description'];
        console.log(x);
        console.log("uuuu");
        document.getElementsByClassName("story")[0].innerHTML = x;
    }
    function getGenre(jsonObj) {
    for (i in jsonObj.genre) {
            var x = jsonObj.genre[i];
            document.getElementsByClassName("genreha")[i].innerHTML += x;
        }
    }
