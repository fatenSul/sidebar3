function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeSideBar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

var openclick = document.getElementById("openBtn");
openclick.onclick = function () {
    openSidebar();
};

var closeclick = document.getElementById("mySidebar");
closeclick.onclick = function () {
    closeSideBar();
};