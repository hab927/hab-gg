let sidebar = document.getElementById("sidebar-container");
let sidebarText = document.getElementById("sidebar");
let ee = document.getElementById("everything-else");

let barHidden = false;

sidebar.addEventListener('dblclick', function() {
    if (barHidden) {
        showSidebar();
        barHidden = false;
    }
    else {
        hideSidebar();
        barHidden = true;
    }
});

function showSidebar() {
    sidebarText.style.visibility = 'visible';
    sidebar.style.width = "24%";
}

function hideSidebar() {
    sidebarText.style.visibility = 'hidden';
    sidebar.style.width = "3%";
}