function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function checkCookie() {
    let user = getCookie("username");
    if (user != "" && user!= null) {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
}

// Only called on page load
// function checkCookie() {
//     let darkmodeStatus = getCookie("darkmode");
//     if ( darkmodeStatus == "darkmodeOn" ) {
//         var elementBody = document.body;
//         elementBody.classList.add("dark-mode-body");
//         // document.getElementById("mainBody").classList.toggle("dark-mode-body");

//         // var elementContainer = document.container;
//         // elementContainer.classList.toggle("dark-mode-container");

//         if( document.getElementById("top") )
//         {
//           document.getElementById("top").classList.add("dark-mode-main");
//         }
//         if( document.getElementById("innerContainer") ) 
//         {
//           document.getElementById("innerContainer").classList.add("dark-mode-main");
//         }
//         if( document.getElementById("footer") ) 
//         {
//           document.getElementById("footer").classList.add("dark-mode-main");
//         }
//         if( document.getElementById("header") ) 
//         {
//           document.getElementById("header").classList.add("dark-mode-main");
//         }

//         if( document.getElementById("mainBody").style.backgroundImage == "url(/img/Background-Image-Light.png)" )
//         {
//           document.getElementById("mainBody").style.backgroundImage="url(/img/Background-Image-Edmonton.png)";
//         } else if ( document.getElementById("mainBody").style.backgroundImage == "url(/img/Background-Image-Edmonton.png)" ) {
//           document.getElementById("mainBody").style.backgroundImage="url(/img/Background-Image-Light.png)";
//         }

//         // Darkmode is off
//     } else  {
//         var elementBody = document.body;
//         elementBody.classList.remove("dark-mode-body");

//         if( document.getElementById("top") )
//         {
//             document.getElementById("top").classList.remove("dark-mode-main");
//         }
//         if( document.getElementById("innerContainer") ) 
//         {
//             document.getElementById("innerContainer").classList.remove("dark-mode-main");
//         }
//         if( document.getElementById("footer") ) 
//         {
//             document.getElementById("footer").classList.remove("dark-mode-main");
//         }
//         if( document.getElementById("header") ) 
//         {
//             document.getElementById("header").classList.remove("dark-mode-main");
//         }
//     }
// }