/*$(document).ready(()=>{
  let userList;
  $.get('www.themealdb.com/api/json/v1/1/lookup.php?i=52772',data =>{
    userList = data
  }).done()
  const bookInfoList = () => {
    bookInfoList.forEach(book =>{
$('#content').append(`
<div id="book${book.id}" class="info-box">
ID: ${book.id} ${book.title}, ${book.author}
</div>`
      )
    });
  }

})*/
/*Create a full CRUD application of your choice using an API or JSON Server.
Use JQuery/AJAX to interact with the API. 
Use a form to post new entities.
Build a way for users to update or delete entities.
Include a way to get entities from the API.
Use Bootstrap and CSS to style your project.*/

//const { data } = require("jquery");

//const { data } = require("jquery");

//const { data } = require("jquery");

//const { data } = require("jquery");

//$(document).ready(()=>{
 // $.get('www.themealdb.com/api/json/v1/1/lookup.php?i=52772', data => {
  //  console.log(data)
 // })
//})



//this is outside of our classes because the fetch is a global fetch
//let url = "https://65aaebf9081bd82e1d98009a.mockapi.io/existingPatient";

//fetch(url)
 // .then(res => res.json())
  //.then(data => console.log(data))
  //.catch(err => console.log(err));


//fetch returns a promise as it is asynchrounous code
//requires two .then statements beacuse it is a promise and its not \
//until the second .then that we actually receive the data in readable form 








class Patient {
  constructor(name, phone, insurance){
    this.name = name; 
    this.newPhone = phone; 
    this.insurance = insurance;
  }
}


//this class uses
 class PatientService{
  static url = 'https://65aaebf9081bd82e1d98009a.mockapi.io/existingPatient';
  static getAllPatients(){
    return $.get(this.url);
    //get method 
  }
  static getPatient(id){
    return $.get(this.url + `/${id}`);
    //get method
  }
  static createPatient(patient){
    //using the post method 
    return $.post(this.url, patient);
  }
  static updatePatient(patient){
    return $.ajax({
      url: this.url + `/${patient._id}`,
      dataType: 'json',
      data: JSON.stringify(patient),
      contentType: 'application.json',
      type: 'PUT'
    });
  }
  static deletePatient(id) {
    return $.ajax({
      url: this.url + `/${id}`,
      type: 'DELETE'
    })
  }
 }


 class DOMManager{
  static patients;

  static getAllPatients(){
    PatientService.getAllPatients().then(patients => this.render(patients));
  }
static createPatient(name, phone, insurance){
  PatientService.createPatient(new Patient(name, phone))
  .then(()=>{
    return PatientService.getAllPatients();
  })
  .then((patients)=> this.render(this.patients));
}


static deletePatient(id){
  PatientService.deletePatient(id)
  .then(()=> {
    return PatientService.getAllPatients();

  })
  .then((patients)=> this.render(patients));
}

static updatePatient(){
PatientService.updatePatientInsurance(patient)



}

  static render(patients){
    this.patients = patients;
    $('#content').empty();
    for (let patient of patients){
  $('#content').prepend(
    `<div id="${patient._id}" class="card">
    <div class="card-header">
    <h2>Name: ${patient.name}</h2>
    <h4>Phone: ${patient.phone}</h3>
    <button class="btn btn-danger" onClick="DOMManager.deletePatient('${patient._id}')">Delete</button>
    </div>
<div class="card-body">
<div class="card">
<div class="row">
<div class="col-sm">
<h4>Update Insurance</h4>
<select name="Insurance" id="insurance-select" class="form-control">
<option value="1" id="aetna">Aetna</option>
<option value="2" id="blueCross">BlueCross</option>
<option value="3" id="united">United</option>
</select>
<br>
<button class="btn btn-warning" onClick="DOMMANAGER.updatePatientInsurance('${patient._id}">Update Insurance</button>
</div>
</div>
</div>
</div>
</div>
   ` 
  );
}
  }
 }


DOMManager.getAllPatients();






//myPatientPortal.render();





  


















