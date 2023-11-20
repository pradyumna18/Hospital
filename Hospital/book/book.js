let Back = document.getElementById('btn');
Back.addEventListener('click',()=>{
  window.location.href="http://127.0.0.1:5501/index.html";
});
function save(){
  var firstnameValue =document.getElementById("fname").value;
  var lastnameValue = document.getElementById("lname").value;
  var emailValue = document.getElementById("email").value ;
  var mobileValue = document.getElementById("mobile").value;
  var treatmentValue = document.getElementById("treatment").value;
  var pageValue = document.getElementById("page").value;
  var dateValue = document.getElementById("date").value;
  var timeValue = document.getElementById("time").value;
  var bloodValue = document.getElementById("blood").value;
  var genderValue = document.getElementById("gender").value;


  localStorage.setItem("aValue",firstnameValue);
  localStorage.setItem("bValue",lastnameValue);
  localStorage.setItem("cValue",emailValue);
  localStorage.setItem("dValue",mobileValue);
  localStorage.setItem("eValue",treatmentValue);
  localStorage.setItem("fValue",pageValue);
  localStorage.setItem("gValue",dateValue);
  localStorage.setItem("hValue",timeValue);
  localStorage.setItem("iValue",bloodValue);
  localStorage.setItem("jValue",genderValue);
  
  
  
  window.location.href="patient.html";
  window.location.href="doctor.html";
  window.location.href="admin.html";


}



// function save(){
//   let fname,lname,email,mobile,treatment,page,date,time,blood,gender;
//   fname = document.getElementById("fname").value;
//   lname = document.getElementById("lname").value;
//   email = document.getElementById("email").value;
//   mobile = document.getElementById("mobile").value;
//   treatment = document.getElementById("treatment").value;
//   page=document.getElementById("page").value;
//   date= document.getElementById("date").value;
//   time= document.getElementById("time").value;
//   blood= document.getElementById("blood").value;
//   gender = document.getElementById("gender").value;

//    window.location.href="patient.html";

//   let user_records =  new Array();

//   user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

//   user_records.push({
//     "fname":fname.value,
//     "lname":lname,
//     "email":email,
//     "mobile":mobile,
//     "treatment":treatment,
//     "page":page,
//     "date":date,
//     "time":time,
//     "blood":blood,
//     "gender":gender
//   })
//   window.location.href="patient.html";
//   window.location.href="doctor.html";
//   window.location.href="admin.html";

//   localStorage.setItem("users",JSON.stringify(user_records));
// }




  