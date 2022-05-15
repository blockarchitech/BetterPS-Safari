document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("BETTERPS - Extension Loaded & Started.");
});

var WINDOW_LOCATION = window.location.href.toString().split("/")


 
/*
*/
/*
    Extra Navbar Info
*/
function makeNavItem(text, icon, href) {
    setTimeout(function(){
        console.log("BETTERPS: CF ATTACK TIMEOUT STARTED")
    }, 1);
    console.log("BETTERPS: CF ATTACK TIMEOUT KILLED");
    const navbar = document.querySelector(".nav-sidebar");
    let node = document.createTextNode("")
    let navbarChild = document.createElement('li');
    navbarChild.classList.add("nav-item", "betterps-navbar")
    navbarChild.innerHTML = `
    <a class="nav-link" href="${href}" target="_blank">
            <i class="nav-icon ${icon}"></i>
            <p>
                ${text}
            </p>
    </a>
    `
    navbarChild.appendChild(node);
    navbar.appendChild(navbarChild);
    console.log("Added " + navbarChild + " to document.")
}


window.onload = () => {
    makeNavItem("My GitHub", "fab fa-github", "https://github.com/zNotChill")
    makeNavItem("Skript Dir", "nav-icon fas fa-folder", "https://playerservers.com/dashboard/filemanager/&dir=/plugins/Skript/scripts")
    /*
        Server List Selector
    */
    if(WINDOW_LOCATION[3] === "dashboard") {
        const serverList = document.querySelector(".dropdown-menu-left");
        for (let i = 0; i < serverList.children.length; i++) {
            const SERVER_ID = serverList.children[i].children.item(0).toString().replace("https://playerservers.com/dashboard/?s=", "")
            serverList.children[i].innerHTML = `<a class="dropdown-item" href="/dashboard/?s=${SERVER_ID}"><div class="text-dark">${serverList.children[i].innerText}</div><div style="color: #a9a9a9;">(${SERVER_ID})</div></a> `
        }
    }
}
/*
*/
