
function dropdownNav() {
    var dropdownMenu = document.getElementById('nav-list-dropdown');
    if (dropdownMenu.className === 'dropdown-closed') {
        dropdownMenu.className = 'dropdown-open';
    }
    else {
        dropdownMenu.className = 'dropdown-closed';
    }
}
