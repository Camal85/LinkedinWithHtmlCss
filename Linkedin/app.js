let profileMenu = document.getElementById("profileMenu");

let sideBarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink")

function toggleMenu() {
    profileMenu.classList.toggle("open-menu")
}
console.log(profileMenu)

function showMore() {
    sideBarActivity.classList.toggle("open-activity");
    if (sideBarActivity.classList.contains(".open-activity")) {
        moreLink.innerHTML = "Show less <b> - </b>";
    } else {
        moreLink.innerHTML = "Show more <b> + </b>";
    }
}
console.log(sideBar)

