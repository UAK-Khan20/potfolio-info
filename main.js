// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(event, tabname) {
//     for (let tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }
//     for (let tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }




document.getElementById("seeMoreBtn").addEventListener("click", function () {
    // Images ko show karna
    document.getElementById("imgremove").style.display = "block";
    
    // See More button ko hide karna
    this.style.display = "none";
  
    // See Less button ko show karna
    document.getElementById("seeLessBtn").style.display = "inline-block";
  });
  
  document.getElementById("seeLessBtn").addEventListener("click", function () {
    // Images ko hide karna
    document.getElementById("imgremove").style.display = "none";
    
    // See Less button ko hide karna
    this.style.display = "none";
  
    // See More button ko show karna
    document.getElementById("seeMoreBtn").style.display = "inline-block";
  });
  
var sidemeu  = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}


