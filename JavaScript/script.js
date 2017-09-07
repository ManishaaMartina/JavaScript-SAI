var nameArray = ["one", "two"];
var key;
var isUpdate = false;

function add() {
  var inputField = document.getElementById("naam");
  var name = inputField.value;
  nameArray.push(name);
  nameArray.sort();
  loadTable();
  inputField.value = "";
}

function loadTable() {
  var userList = document.getElementById("userList");
  userList.innerHTML = "";
  for (var i = 0; i < nameArray.length; i++) {
    userList.innerHTML +=
      "<tr><td>" +
      nameArray[i] +
      "<td><button  onclick='remove(" +
      i +
      ")'>delete" +
      "<td><button  onclick='edit(" +
      i +
      ")'>edit";
  }

  if (nameArray.length != 0) {
    document.getElementById("loadbtn").hidden = true;
    document.getElementById("hint").innerHTML = "";
  } else {
    document.getElementById("loadbtn").hidden = false;
    document.getElementById("hint").innerHTML = "records empty";
  }
}

function remove(id) {
  nameArray.splice(id, 1);
  loadTable();
}

function edit(id) {
  document.getElementById("naam").value = nameArray[id];
  key = id;
  document.getElementById("addbtn").hidden = true;
  document.getElementById("updatebtn").hidden = false;
}

function update() {
  nameArray[key] = document.getElementById("naam").value;
  document.getElementById("naam").value = "";
  document.getElementById("updatebtn").hidden = true;
  document.getElementById("addbtn").hidden = false;
  loadTable();
}
