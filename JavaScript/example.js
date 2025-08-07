const xhr=new XMLHttpRequest();
xhr.open('GET','https://686503325b5d8d03397f4dbe.mockapi.io/api/v1/users')

xhr.onload=function(){
  console.log(xhr.responseTest);
}
xhr.onerror=function(){
  console.error("An error occured. ");
}
xhr.onprogress=function(event){
  console.log(`Loaded ${event.loaded} bytes`);
}
xhr.send();