//Slidebar Area...
const sidebar=document.querySelector('.sbh');
function showSidebar() {
    sidebar.style.right="0px";
}
function hideSidebar(){
    sidebar.style.right="-100vw"; 
}

//portfolioa area
const per=document.querySelector('#personal');
const pro=document.querySelector('#professional');

function showPers(){
    document.querySelector('#portprof').style.backgroundColor="rgb(27, 26, 26)";
    document.querySelector('#portpers').style.backgroundColor="brown";
    per.style.display="flex";
    pro.style.display="none";
}
function showProf(){
    document.querySelector('#portpers').style.backgroundColor="rgb(27, 26, 26)";  
    document.querySelector('#portprof').style.backgroundColor="brown";
    pro.style.display="flex";
    per.style.display="none";
}


