var count = 0;
var students = [];

function addStudent() {

    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;

    //Inputs Mandatory, Blank will not be submitted.
    if (nameValue == '' || emailValue == '' || ageValue == '' || gradeValue == '' || degreeValue == "") {
        alert("All fields are required!")
        return;
    }

    //Iterate the ID
    count++;

    students.push({
        ID: count, name: nameValue, email: emailValue, age: ageValue, grade: gradeValue, degree: degreeValue
    });

    // Store the updated students array in local storage
    localStorage.setItem("students", JSON.stringify(students));

    // Clear the input fields   
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('degree').value = "";
    console.log(students);
    showTable();
}

function showTable() {
    const table = document.getElementById('tbody');
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

    table.value = "";
    students.forEach((student) => {
        const row = document.createElement("tr");

        var keys = Object.keys(student);
        var id = document.createElement('td');

        const name = document.createElement('td');
        const email = document.createElement('td');
        const age = document.createElement('td');
        const grade = document.createElement('td');
        const degree = document.createElement('td');

        keys.forEach((key) => {
            if (key == 'ID') {
                id.innerHTML = student[key];
            }
            else if (key == 'name') {
                name.innerHTML = student[key];
            }
            else if (key == 'email') {
                email.innerHTML = student[key];
            }
            else if (key == 'age') {
                age.innerHTML = student[key];
            }
            else if (key == 'grade') {
                grade.innerHTML = student[key];
            }
            else
                degree.innerHTML = `<div>${
                    student[key]
                }
                </div> <div class="icons"><a onClick="edit(${student['ID']})" class='fa'>&#xf044;</a> <a onClick="del(${student['ID']})" class='fa'>&#xf1f8;</a> </div> `;
            // degree.innerHTML = student[key] + "  <li class='fa'>&#xf044;</li>";

            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(email);
            row.appendChild(age);
            row.appendChild(grade);
            row.appendChild(degree);
        })
        table.appendChild(row);
    })
}
