function myForm(){
  document.getElementById('book').style.display="block";
  }


function SUBMIT(){
let submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click",function(){
    let EMAILNAME = document.getElementById("EMAILNAME");
    let PASSWORDNAME = document.getElementById("PASSWORDNAME");
    if(EMAILNAME.value == "" && PASSWORDNAME.value == ""){
      alert("Enter Details.....");
    }else{
      alert("Successfully Submited.....");

    }
  })
    var EMAILNAME,PASSWORDNAME;
    EMAILNAME=document.getElementById("EMAILNAME").value;
    PASSWORDNAME=document.getElementById("PASSWORDNAME").value;                             
    var num_records=new Array();
    num_records=JSON.parse(localStorage.getItem("index"))?JSON.parse(localStorage.getItem("index")):[]
    if(num_records.some((v)=>{
      return v.PASSWORDNAME==PASSWORDNAME
    })){
    }else{
      num_records.push({
       "EMAILNAME":EMAILNAME,
       "PASSWORDNAME":PASSWORDNAME,
     })
     localStorage.setItem("index",JSON.stringify(num_records));
    }
}





var a = "admin";
    var b = "admin123";
      window.localStorage.setItem('name', a);
      window.localStorage.setItem('passs', b);
      function Admin() {
        var username = document.getElementById("username");
        var pass = document.getElementById("passs");
        var adminpage = window.localStorage.getItem('name');
        var myadminpage = window.localStorage.getItem('passs');
        console.log(adminpage);
        console.log(myadminpage);
          if (username.value === adminpage && pass.value === myadminpage) {
              window.location.href = "admin/admin.html";
              alert("Successful");
          } else {
             alert("Invalid information");  
  }
}


// var c = "david";
// var d = "david123";
// window.localStorage.setItem('csk',c);
// window.localStorage.setItem('mi',d);
//  function myDoctor() {
//      var csk = document.getElementById("csk");
//      var mii = document.getElementById("mi");
//      var doctorpage = window.localStorage.getItem('csk');
//      var mydoctorpage = window.localStorage.getItem('mi');
//        console.log(doctorpage);
//        console.log(mydoctorpage);
//             if (csk.value ===doctorpage && mii.value ===mydoctorpage) {
//           window.location.href="doctor/doctor.html";
//           alert("Successful");
//      } else {
//          alert("Invalid information");
//      }
// }

function myDoctor(){
  var user =  document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  if(user=="david"&&pass=="david123"){
    window.location.href="doctor/doctor.html";
         alert("Successful");
  }else if(user=="marsh"&&pass=="marsh123"){
    window.location.href="doctor/doctor.html";
         alert("Successful");
  }else if(user=="smith"&&pass=="smith123"){
    window.location.href="doctor/doctor.html";
         alert("Successful");
  }else{
    alert("Invalid information");
  }
}