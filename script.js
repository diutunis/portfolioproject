console.log("helloe");

// function toggleDrop() {
//     var dropdown = document.getElementsByClassName('dropdown');
//     if(document.getElementsByClassName("dropdown").style.color != "none") { // if is menuBox displayed, hide it
//       dropdown.style.visibility == "none";
//     }
//     else { // if is menuBox hidden, display it
//       dropdown.style.display = "flex";
//     }
//   }

// function toggleDrop() {
//     document.getElementById("dropdown").classList.toggle("show");
// }

// function toggleDrop() {
//     var dropdown = document.getElementsByClassName('dropdown');
//     if(document.getElementsByClassName("dropdown").style.color != "none") { // if is menuBox displayed, hide it
//       dropdown.style.visibility == "none";
//     }
//     else { // if is menuBox hidden, display it
//       dropdown.style.display = "flex";
//     }
//   }

// function toggleDrop() {

// if(document.getElementById("dropdown").classList === "hid"){
//     document.getElementById("dropdown").classList.remove === "hid"
// }
// else {
//     document.getElementById("dropdown").classList.add === "hid"
// }
// }

// function toggleDropOn() {
//     var dropdown = document.getElementsByClassName('dropdown');
//     document.getElementsByClassName("dropdown").setAttribute("id", "shown")

//   }
// function toggleDropOff() {
//     var dropdown = document.getElementsByClassName('dropdown');
//     document.getElementsByClassName("dropdown").setAttribute("id", "hid")
//   }

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// function hide() {
//   var x = document.getElementById("hid");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function hide2() {
//   var x = document.getElementById("hid2");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function hide3() {
//   var x = document.getElementById("hid3");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function hide4() {
//   var x = document.getElementById("hid4");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// $( "#onoff1" ).click(function() {
//   $( "#hid" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
// });

// $( document.getElementById("#onoff1")).click(function () {
//   console.log("heyyyyooooo");
//   if ( $( document.getElementById("hid") ).display( ":none" ) ) {
//     $( document.getElementById("hid")).slideDown( "slow" );
//   } else {
//     $( document.getElementById("hid")).hide()

//   }})

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    })
  });
});


$(document).ready(function () {
  $("#onoff1").click(function () {
    $("#hid").slideDown();
  });
});

$(document).ready(function () {
  $("#onoff2").click(function () {
    $("#hid").slideUp();
  });
});

$(document).ready(function () {
  $("#onoff3").click(function () {
    $(".projectItem1").slideDown();
  });
});

$(document).ready(function () {
  $("#onoff4").click(function () {
    $(".projectItem1").slideUp();
  });
});


$(document).ready(function () {
  $("#onoff5").click(function () {
    $(".projectItem2").slideDown();
  });
});

$(document).ready(function () {
  $("#onoff6").click(function () {
    $(".projectItem2").slideUp();
  });
});

$(document).ready(function () {
  $("#onoff7").click(function () {
    $(".projectItem3").slideDown();
  });
});

$(document).ready(function () {
  $("#onoff8").click(function () {
    $(".projectItem3").slideUp();
  });
});


