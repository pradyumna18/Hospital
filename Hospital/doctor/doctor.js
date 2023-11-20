document.getElementById("firstName").innerHTML=localStorage.getItem("aValue");
document.getElementById("lastName").innerHTML=localStorage.getItem("bValue");
document.getElementById("emailName").innerHTML=localStorage.getItem("cValue");
document.getElementById("mobileName").innerHTML=localStorage.getItem("dValue");
document.getElementById("pageName").innerHTML=localStorage.getItem("fValue");
document.getElementById("treatmentName").innerHTML=localStorage.getItem("eValue");
document.getElementById("dateName").innerHTML=localStorage.getItem("gValue");
document.getElementById("timeName").innerHTML=localStorage.getItem("hValue");
document.getElementById("bloodName").innerHTML=localStorage.getItem("iValue");
document.getElementById("genderName").innerHTML=localStorage.getItem("jValue");

function logout() {
    alert("Doctor do u want to logout..");
    let a = window.localStorage.getItem('Doctor name');
    window.location.href = '/index.html'
}