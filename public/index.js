$(function(){
    $("#top").click(function(){
        $("html,body").animate({ scrollTop:0},900);
    });
});
function small(){
    document.body.style.fontSize="small";
}

function medium(){
    document.body.style.fontSize="medium";
}

function large(){
    document.body.style.fontSize="large";
}
function processFormData() {
  var name_element = document.getElementsByName('name');
  var name = name_element[0].value;
  var cont_element = document.getElementsByName('cont');
  var cont = cont_element[0].value;
  var afuRef = storageRef.child('texts/cmd.txt'); afuRef.putString("name"+"cont");
  //alert('你的姓名是' + name + '\n電子郵件是' + email);
}