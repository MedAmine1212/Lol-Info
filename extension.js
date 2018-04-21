//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//detect browser
var browser;
var url;
var name;
var ua=navigator.userAgent.toLowerCase(); 
if (ua.indexOf('edge') != -1) { 
browser="edge";
  } 
  else {
  M=ua.match(/(opera|chrome|safari|firefox|trident(?=\/))\/?\s*(\d+)/i) || [];
browser=M[1];
}
    function close_window() {
  if (confirm("Are you sure?")) {
    window.open('index.html','_self');
  }
  else
	  ext();
	 }
	 
	function ext(){
	

	switch(browser)
	{
		case "opera":
			name="CORS Toggle";
			url="https://addons.opera.com/fr/extensions/details/cors-toggle/"
			break;
		case "chrome":
			name="Allow-Control-Allow-Origin";
			url="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=gmail.";
			break;
		
		case "firefox":
			name="CORS";
			url="https://addons.mozilla.org/firefox/downloads/file/684302/cors_everywhere-17.7.16.1852-an+fx.xpi?src=dp-btn-primary"
			break;
	}
	
	setTimeout(function(){
	if(browser!="trident")
	{
	if (browser!="safari" && browser!="edge" && browser!=undefined)
	{
document.getElementById("div11").innerHTML=("Add "+name+" extenstion to your "+browser+" ?<br><br>NB: This extension is necessary to procede otherwise use Internet Explorer");
document.getElementById("installExt").href=url;
	}
else
{
	document.getElementById("div11").innerHTML="This site is only supported on:\n\nOpera, Chrome, Firefox and Internet Explorer" ;
	document.getElementById("div22").style.display="none";
	document.getElementById("Exte").style.display="inherit";
}	
	}
	},200);

	

	}
	
	//move div
	var mouseDown=false;
var mouseX=0;
var mouseY=0;
var divX=0;
var divY=0;
function moveDiv(e){

	if (mouseDown)
	{
   	
		document.getElementById("Exte").style.left=(divX+e.clientX-mouseX)+"px";
		document.getElementById("Exte").style.top=(divY+e.clientY-mouseY)+"px";
	}
}

function HoldF(e) {
 mouseX = e.clientX;
  mouseY = e.clientY;
  
   divXX=document.getElementById("Exte").style.left;
   
   divXX=divXX.slice(0,divXX.length-2);
   
   divYY=document.getElementById("Exte").style.top;
   divYY=divYY.slice(0,divYY.length-2);
   divX=Number(divXX);
   
   divY=Number(divYY);
   mouseDown=true;
}
function LoseF() {
   mouseDown=false; 
}
