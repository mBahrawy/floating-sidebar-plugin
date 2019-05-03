var sidebarMenu = document.getElementById("navigation-links");

if (sidebarMenu) {

    document.body.classList.add("has-floating-sidebar");

    sidebarMenu.parentElement.setAttribute("id", "float-sidebar");

    var sidebar = document.getElementById("float-sidebar");

    doChange();
}



function doChange() {



    // Creating clearboth div

    //=====================================

    var clearBoth = document.createElement("div");

    clearBoth.style.clear = "both";



    // Getting content  div 

    //=====================================

    var csContent = document.getElementById("cs-content");

    var parentWarrper = csContent.parentElement;



    // Getting the sidebar

    //=====================================

    var sidebarParent = sidebar.parentElement;

    sidebarParent.className = 'float-sidebar-container';



    // Fix sidebar padding & top

    //=====================================

    var k = document.getElementsByClassName("float-sidebar-container");

    for (var j = 0; j < k.length; j++) {

        k[j].style.padding = "0 18px 20px";

    }



    // Appending sidebar

    //=====================================

    parentWarrper.insertBefore(sidebarParent, csContent);



    // Getting page banner

    //=====================================

    var pageBanner = document.getElementById("page-banner");

    parentWarrper.insertBefore(pageBanner, sidebarParent);



    // Mobile view

    //=====================================

    // Sidebar height fix

    var d;

    var sidebarparent = document.getElementById("float-sidebar").parentElement;

    sidebarparent.style.minHeight = document.body.clientHeight + "px";

    window.onresize = function(event) {

        d = document.body.clientHeight;

        sidebarparent.style.minHeight = d + "px";

    };



    // Adding dark overlay

    //=====================================

    var blackOverlay = document.createElement('div');

    blackOverlay.classList.add("black-overlay");

    blackOverlay.setAttribute("id", "black-overlay");

    document.body.insertBefore(blackOverlay, document.body.firstChild);



    // Addin button

    //=====================================

    var dragBtn = document.createElement('a');

    dragBtn.setAttribute("id", "drag-btn");

    dragBtn.setAttribute("href", "#");

    dragBtn.innerHTML = '<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0MC44MjMgMjQwLjgyMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQwLjgyMyAyNDAuODIzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPHBhdGggaWQ9IkNoZXZyb25fUmlnaHQiIGQ9Ik01Ny42MzMsMTI5LjAwN0wxNjUuOTMsMjM3LjI2OGM0Ljc1Miw0Ljc0LDEyLjQ1MSw0Ljc0LDE3LjIxNSwwYzQuNzUyLTQuNzQsNC43NTItMTIuNDM5LDAtMTcuMTc5ICAgbC05OS43MDctOTkuNjcxbDk5LjY5NS05OS42NzFjNC43NTItNC43NCw0Ljc1Mi0xMi40MzksMC0xNy4xOTFjLTQuNzUyLTQuNzQtMTIuNDYzLTQuNzQtMTcuMjE1LDBMNTcuNjIxLDExMS44MTYgICBDNTIuOTQyLDExNi41MDcsNTIuOTQyLDEyNC4zMjcsNTcuNjMzLDEyOS4wMDd6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" /> Table of Contents';

    document.body.insertBefore(dragBtn, document.body.firstChild);

    dragBtn = document.getElementById("drag-btn");

    // Overlay click trigger

    blackOverlay = document.getElementById("black-overlay");

    blackOverlay.onclick = function() {

        dragBtn.click();

    }

    var j = 0;

    var originText = dragBtn.innerHTML;

    dragBtn.onclick = function(event) {

        event.preventDefault();

        if (j % 2 == 0) {

            document.body.classList.add("mobile-warp");

            dragBtn.innerHTML = '<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk3MSA0Ny45NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OCAgIGMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwYy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQybDE4Ljg2NSwxOC44NjRMMC44NzksNDIuODVjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDIgICBDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /> hide';

        } else {

            document.body.classList.remove("mobile-warp");

            dragBtn.innerHTML = originText;

        }

        j = j + 1;

    }

    var menuLinks = document.getElementById("float-sidebar").getElementsByTagName('a');

    for (var r = 0; r < menuLinks.length; r++) {

        menuLinks[r].onclick = function() {

            dragBtn.click();

        }

    }

    // For on scroll links change style effect

    var elm = document.getElementById('float-sidebar');
    var ms = new MenuSpy(elm, {
        threshold: -170
    });

    /*,
       enableocationHash	: false,
       hashTimeout : 3000*/
};