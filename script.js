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
    document.querySelector('#portprof').style.backgroundColor="rgb(0,0,0,0)";
    document.querySelector('#portprof').style.color="var(--bl)";
    document.querySelector('#portpers').style.backgroundColor="brown";
    document.querySelector('#portpers').style.color="var(--wh)";
    per.style.display="flex";
    pro.style.display="none";
}
function showProf(){
    document.querySelector('#portpers').style.backgroundColor="rgb(0,0,0,0)";  
    document.querySelector('#portprof').style.backgroundColor="brown";
    document.querySelector('#portprof').style.color="var(--wh)";
    document.querySelector('#portpers').style.color="var(--bl)";
    pro.style.display="flex";
    per.style.display="none";
}

/*function changeclr(id){
    const classes=document.getElementsByClassName("btn");
    for( let i=0;i<classes.length;i++){
        document.getElementsByClassName("btn")[i].style.backgroundColor="rgb(27, 26, 26)";
    } 
    document.querySelector(`${id}`).style.backgroundColor="brown";
        
}*/

function toggledark(){
    let currentValue=document.querySelector(".styles").getAttribute("href");
    let darkPath="dark.css";
    let lightPath="light.css";
    if(currentValue === darkPath){
        document.querySelector(".styles").href=lightPath;
    }
    if(currentValue === lightPath){
        document.querySelector(".styles").href=darkPath;
    }
    
}


