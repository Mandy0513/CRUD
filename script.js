// // C R U D - Create Read Update Delete

// var row = null;
// var msg = document.getElementById("msg");

// // CREATE

// function createData() {
//   var dataEntered = retrieveData();
//   var readData = readingDataFromLocalStorage(dataEntered);
//   if (dataEntered == false) {
//     msg.innerHTML = `<h3 style = "color: red;">Please enter data !</h3>`;
//   } else {
//     if (row == null) {
//       insert(readData);
//       msg.innerHTML = `<h3 style = "color: yellow;">Data Inserted !</h3>`;
//     } else {
//       update();
//       msg.innerHTML = `<h3 style = "color: orange;">Data Updated !</h3>`;
//     }
//   }

//   document.getElementById("form").reset();
// }

// // Retrieve data
// function retrieveData() {
//   var name1 = document.getElementById("name").value;
//   var phone = document.getElementById("phone").value;
//   var email = document.getElementById("email").value;
 

//   var arr = [name1, phone, email];
//   if (arr.includes("")) {
//     return false;
//   } else {
//     return arr;
//   }
// }

// //READ
// // Data in Local Storage
// function readingDataFromLocalStorage(dataEntered) {
//   // Storing data in local storage
//   var n = localStorage.setItem("Name", dataEntered[0]);
//   var ph = localStorage.setItem("Phone", dataEntered[1]);
//   var e = localStorage.setItem("Email", dataEntered[2]);
  

//   // Show data in table (Getting item from localStorage)
//   var n1 = localStorage.getItem("Name", n);
//   var ph1 = localStorage.getItem("Phone", ph);
//   var e1 = localStorage.getItem("Email", e);
 

//   var arr = [n1, ph1, e1];
//   return arr;
// }

// // INSERT
// function insert(readData) {
//   var table = document.getElementById("table");
//   var i = table.rows.length;
//   var row = table.insertRow();
//   row.insertCell(0).innerHTML= readData[0];
//   row.insertCell(1).innerHTML= readData[1];
//   row.insertCell(2).innerHTML= readData[2];
//   row.insertCell(3).innerHTML = `<button onclick="edit(this)"><a href="script.js:void(0)" style="text-decoration: none;">Edit</a></button> &nbsp
// <button onclick="remove(this)"><a href="script.js:void(0)" style="text-decoration: none;">Delete</a></button>`;
// }

// //EDIT
// function edit(td) {
//   var row = td.parentElement.parentElement;
//   document.getElementById("name").value = row.cells[0].innerHTML;
//   document.getElementById("phone").value = row.cells[1].innerHTML;
//   document.getElementById("email").value = row.cells[2].innerHTML;
  
// }

// // UPDATE
// function update(td) {
//   row = td.parentElement.parentElement;
//   row.cells[0].innerHTML = document.getElementById("name").value;
//   row.cells[1].innerHTML = document.getElementById("phone").value;
//   row.cells[2].innerHTML = document.getElementById("email").value;
  
//   row = null;
// }

// // DELETE
// function remove(td) {
//   var ans = confirm("Are you sure you want to delete the record?");
//   if (ans == true) {
//     var row = td.parentElement.parentElement;
//     document.getElementById("table").deleteRow(row.rowIndex);
//     msg.innerHTML = `<h3 style = "color: red;">Data Deleted !</h3>`;
//   }
// }