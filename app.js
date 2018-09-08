const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

//check which command user wants to run
const command = prompt('enter a command (print, verify, lookup, contains, update, add, delete):');
if (command === 'print') {
  print()
}
else if (command === 'verify') {
  verify()
}
else if (command === 'lookup') {
  lookup()
}
else if (command === 'contains') {
  contains()
}
else if (command === 'update') {
  update()
}
else if (command === 'add') {
  add()
}
else if (command === 'delete') {
  deletefunc()
}
else {
  render('no such function!')
}







//commands live here
function print() {
  render(`Total number of employees: ${employeeList.length}`);
  render(`-------------------------------------------------------`);
  for (i = 0; i < employeeList.length; i++) {
    render(`name: ${employeeList[i].name}`);
    render(`officeNum: ${employeeList[i].officeNum}`);
    render(`phoneNum: ${employeeList[i].phoneNum}`);
    render(`-------------------------------------------------------`);
  }
}

function verify() {
  const nameQuery = prompt('Enter employee name:').toLowerCase();
  let isVerified = false;
  for (i = 0; i < employeeList.length; i++) {
    if (nameQuery === employeeList[i].name.toLowerCase()) {
      render('true');
      isVerified = true;
    }
  }
  if (isVerified === false) {
    render('No such name, check spelling!');
  }
}

function lookup() {
  const nameQuery = prompt('Enter employee name:').toLowerCase();
  let isVerified = false;
  for (i = 0; i < employeeList.length; i++) {
    if (nameQuery === employeeList[i].name.toLowerCase()) {
      render(`name: ${employeeList[i].name}`);
      render(`officeNum: ${employeeList[i].officeNum}`);
      render(`phoneNum: ${employeeList[i].phoneNum}`);
      isVerified = true;
    }
  }
  if (isVerified === false) {
    render('No such name, check spelling!');
  }
}

function contains() {
  const nameQuery = prompt('Enter part of employee name:').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().includes(nameQuery)) {
      render(`name: ${employeeList[i].name}`);
      render(`officeNum: ${employeeList[i].officeNum}`);
      render(`phoneNum: ${employeeList[i].phoneNum}`);
      render(`-------------------------------------------------------`);
    }
  }
}

function update() {
  const nameQuery = prompt('Enter employee name:').toLowerCase();
  let nameVerified = false;
  let fieldVerified = false;
  for (i = 0; i < employeeList.length; i++) {
    if (nameQuery === employeeList[i].name.toLowerCase()) {
      nameVerified = true;
      const fieldToChange = prompt('Enter field to change:');
      if (employeeList[1].hasOwnProperty(fieldToChange)) {
        fieldVerified = true;
        const newValue = prompt('Enter new value:');
        employeeList[i][fieldToChange] = newValue;
        render(`name: ${employeeList[i].name}`);
        render(`officeNum: ${employeeList[i].officeNum}`);
        render(`phoneNum: ${employeeList[i].phoneNum}`);
      }
    }
  }
  if (nameVerified === false) {
    render('No such name, check spelling!');
  }
  if (fieldVerified === false) {
    render('No such field, check spelling!');
  }
}

function add() {
  const nameToAdd = prompt('Enter employee name:');
  const officeNumToAdd = prompt('Enter office number:');
  const phoneNumToAdd = prompt('Enter phone number:');
  var newEmployee = { name: nameToAdd, officeNum: officeNumToAdd, phoneNum: phoneNumToAdd };
  employeeList.push(newEmployee);
  render(`${nameToAdd} has been successfully added to employee list!`);
  render(`-------------------------------------------------------`);
  print()
}

function deletefunc() {
  const nameQuery = prompt('Enter employee name:').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (nameQuery === employeeList[i].name.toLowerCase()) {
      employeeList.splice(i, 1);
    }
  }
  render(`${nameQuery} has been successfully removed from employee list!`);
  render(`-------------------------------------------------------`);
  print()
}