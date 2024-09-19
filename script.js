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
    document.querySelector('#portpers').style.backgroundColor="brown";
    per.style.display="flex";
    pro.style.display="none";
}
function showProf(){
    document.querySelector('#portpers').style.backgroundColor="rgb(0,0,0,0)";  
    document.querySelector('#portprof').style.backgroundColor="brown";
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
const buttonValue=0
function toggledark(){
    if(buttonValue===0){
        document.querySelector(".styles").href='dark.css';
        buttonValue=1;
    }
    if(buttonValue===1){
        document.querySelector(".styles").href='dark.css';
        buttonValue=0;
    }
  
    
}


