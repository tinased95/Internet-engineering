 function downloads() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("replace_kardan").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../texts/download.txt", true);
  xhttp.send();
  console.log("salaaaaaaaaam download")
}
function zirnevis() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("replace_kardan").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../texts/zirnevis.txt", true);
  xhttp.send();
}
function nazar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("replace_kardan").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../texts/nazar.txt", true);
  xhttp.send();
    console.log("salaaaaaaaaam nazar")
}
function naghd() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("replace_kardan").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../texts/naghd.txt", true);
  xhttp.send();
}
function avamel() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("replace_kardan").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../texts/avamel.txt", true);
  xhttp.send();
}
function javayez() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("replace_kardan").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../texts/javayez.txt", true);
  xhttp.send();
}
function gallery() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("replace_kardan").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../texts/gallery.txt", true);
  xhttp.send();
}
