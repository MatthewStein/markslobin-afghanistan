function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function popMusic(url,title,musician,instrument,filesize,format,bookpg,location,ethgroup){

w= window.open('','Audio',' height=300,width=350,scrollbars=1,location=no,menubar=no,resizable=yes,status=no,screenX=0,screenY=0');

d = w.document;

d.write('<html><head><title>' + title + '</title><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><link href="/afghanistan/style.css" rel="stylesheet" type="text/css">');


d.write('</head><body bgcolor="#FF9900"><p class="head1">Title: <a href='+url+'>' + title + '</a> - <i>click to play</i></p><p class="head1">Musician: ' + musician + '</p><p class="head1">Instrument: '+ instrument +'</p>');

if (typeof location != "undefined") d.write('<p class="head1">Location: '+ location +'</p>');

if (typeof ethgroup != "undefined") d.write('<p class="head1">Ethnic Group: '+ ethgroup +'</p>');


if (typeof bookpg != "undefined") d.write('<p class="text">Book Reference: Page '+ bookpg +'<br>');

d.write('File size: ' + filesize + '<br>Format: ' + format + '</p><p>&nbsp;</p><p><a href=javascript:window.close() class="link">close window</a> </p><p><font class="text">All media on this web site is property of Mark Slobin &copy;2003<br>Please contact him at mslobin@wesleyan.edu for proper use of his media.</font></p></body></html>');

d.close();

w.focus();

return true;

}



function popImage(url,caption,w,h){



if (typeof w == "undefined")w=500;
if (typeof h == "undefined")h=400;

w= window.open('','Image',' height='+h+',width='+w+',scrollbars=1,location=no,menubar=no,resizable=yes,status=no,screenX=0,screenY=0');

d = w.document;

d.write('<html><head><title>' + url + '</title><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><meta http-equiv="imagetoolbar" content="no"/><link href="/afghanistan/style.css" rel="stylesheet" type="text/css">');


d.write('</head><body bgcolor="#FF9900"><center><img src="'+url+'"></img><br>');

if (typeof caption != "undefined") d.write('<br>' + caption + '<br>');

d.write('</center><p><a href=javascript:window.close() class="link">close window</a> </p><p><font class="text">All media on this web site is property of Mark Slobin &copy;2003<br>Please contact him at mslobin@wesleyan.edu for proper use of his media.</font></p></body></html>');

d.close();

w.focus();

return true;

}




function popMovie(url,title,description,filesize,format){

w= window.open('','Movie',' height=300,width=350,scrollbars=1,location=no,menubar=no,resizable=yes,status=no,screenX=0,screenY=0');

d = w.document;

d.write('<html><head><title>' + title + '</title><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><link href="/afghanistan/style.css" rel="stylesheet" type="text/css">');


d.write('</head><body bgcolor="#FF9900"><p class="head1">Title: <a href='+url+'>' + title + '</a> - <i>click to play</i></p><p class="head1">Description: ' + description + '</p>');

d.write('File size:' + filesize + '<br>Format: ' + format + '</p><p>&nbsp;</p><p><a href=javascript:window.close() class="link">close window</a> </p><p><font class="text">All media on this web site is property of Mark Slobin &copy;2003<br>Please contact him at mslobin@wesleyan.edu for proper use of his media.</font></p></body></html>');

d.close();

w.focus();

return true;

}


function popText(url){

 var nw= window.open(url,"Text","height=450,width=400,scrollbars=1,location=no,menubar=yes,resizable=yes,status=no,screenX=0,screenY=0");

 nw.focus();



}



