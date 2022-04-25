console.log("helloe")


function toggleDrop() {
    var dropdown = document.getElementsByClassName('dropdown');    
    if(document.getElementsByClassName("dropdown").style.color != "none") { // if is menuBox displayed, hide it
      dropdown.style.visibility == "none";
    }
    else { // if is menuBox hidden, display it
      dropdown.style.display = "flex";
    }
  }
  