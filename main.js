var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}



// menu section
var sidemenu = document.getElementById('side-menu');
function openmenu(){
    sidemenu.style.right = '0';
}
function closemenu(){
    sidemenu.style.right = '-200px';
}

document.body.style.overflowY = 'scroll';
document.body.style.overflowX = 'hidden'; // Hides horizontal scrollbar if it appears


//Displaying sections

// let about = document.getElementById('about')
// let header = document.getElementById('header')

// function showabout(){
//     about.style.display = 'block'
//     header.style.display = 'none'
// }








