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
    alert("Admin do u want to logout..");
    let a = window.localStorage.getItem('Doctor name');
    window.location.href = '/index.html'
}
let list =document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover',activeLink));
 

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('navigation');
let main = document.querySelector('.main');

toggle.onclick=function(){
    navigation.classList.toggle('active');
}


var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["dfname"] = document.getElementById("dfname").value;
    formData["dlname"] = document.getElementById("dlname").value;
    formData["email"] = document.getElementById("email").value;
    formData["mobile"] = document.getElementById("mobile").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.dfname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.dlname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.mobile;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("dfname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dlname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.dfname;
    selectedRow.cells[1].innerHTML = formData.dlname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.mobile;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("dfname").value = '';
    document.getElementById("dlname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("mobile").value = '';
    selectedRow = null;
}

