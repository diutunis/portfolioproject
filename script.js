console.log("helloe")


// function toggleDrop() {
//     var dropdown = document.getElementsByClassName('dropdown');    
//     if(document.getElementsByClassName("dropdown").style.color != "none") { // if is menuBox displayed, hide it
//       dropdown.style.visibility == "none";
//     }
//     else { // if is menuBox hidden, display it
//       dropdown.style.display = "flex";
//     }
//   }
  

function toggleDrop() {
    document.getElementById("dropdown").classList.toggle("show");
}


// function toggleDrop() {
//     var dropdown = document.getElementsByClassName('dropdown');    
//     if(document.getElementsByClassName("dropdown").style.color != "none") { // if is menuBox displayed, hide it
//       dropdown.style.visibility == "none";
//     }
//     else { // if is menuBox hidden, display it
//       dropdown.style.display = "flex";
//     }
//   }



function toggleDrop() {
    var dropdown = document.getElementById('dropdown');    
    if((document.getElementById("dropdown").style.display) === "none") { // if its hiding then
      dropdown.style.display === "contents";
    }
    else { // if is menuBox hidden, display it
      dropdown.style.display = "none";
    }
  }
  