//get the form and table element
const form = document.getElementById("student-form");
const tableBody = document.getElementById("student-table-body");

//function to add new student record
function addStudentRecord(studentName, studentID, emailID, contactNo, dob) {
  //create a new table row
  const row = document.createElement("tr");
  //insert  the data into the table row
  row.innerHTML = `
    <td>${studentName}</td>
    <td>${studentID}</td>
    <td>${emailID}</td>
    <td>${contactNo}</td>
    <td>${dob}</td>
       <td>
       <button class="edit-btn">Edit</button>
       <button class="delete-btn">Delete</button>
       </td>
    
`;
  //append the table row to the table body
  tableBody.appendChild(row);
}

//function to edit existing student record
function editStudentRecord(studentName, studentID, emailID, contactNo, dob) {
  row.cells[0].textContent = studentName;
  row.cells[1].textContent = studentID;
  row.cells[2].textContent = emailID;
  row.cells[3].textcontext = contactNo;
  row.cells[4].textcontext = dob;
}

//function to delete existing student record
function deleteStudentRecord(row) {
  tableBody.removeChild(row);
}

//Add event listner to form sumbit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //get the form data
  const studentName = document.getElementById("student-name").value;
  const studentID = document.getElementById("student-id").value;
  const emailID = document.getElementById("email-id").value;
  const contactNo = document.getElementById("contact-no").value;
  const dob = document.getElementById("dob").value;

  //validate input data fields
  if (
    studentName === "" ||
    studentID === "" ||
    emailID === "" ||
    contactNo === "" ||
    dob === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  //add new student record
  addStudentRecord(studentName, studentID, emailID, contactNo, dob);

  //clear the form field
  document.getElementById("student-name").value = "";
  document.getElementById("student-id").value = "";
  document.getElementById("email-id").value = "";
  document.getElementById("contact-no").value = "";
  document.getElementById("dob").value = "";
});

//add event listner to edit button
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-dtn")) {
    const row = e.target.parentNode.parentNode;
    const studentName = row.cells[0].textContent;
    const studentID = row.cells[1].textContent;
    const emailID = row.cells[2].textContent;
    const contactNo = row.cells[3].textContent;
    const dob = row.cells[4].textContent;

    //edit exisiting  student record
    editStudentRecord(row, studentName, studentID, emailID, contactNo, dob);
  }
});

//add event listner to delete  button
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const row = e.target.parentNode.parentNode;

    //delete student  record
    deleteStudentRecord(row);
  }
});
