let students = [];
let editIndex = null;

const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

// Add or Update Student
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const grade = document.getElementById("grade").value.trim();

    if (name === "" || age === "" || grade === "") {
        alert("Please fill all fields!");
        return;
    }

    const student = { name, age, grade };

    if (editIndex === null) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = null;
    }

    form.reset();
    document.getElementById("stdbtn").textContent = "Add Student";
    displayStudents();
});

// Display Student List
function displayStudents() {
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td class="actions">
            <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

}

// Edit Student
function editStudent(index) {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("grade").value = student.grade;
    document.getElementById("stdbtn").textContent = "Update Student";
    editIndex = index;
}

// Delete Student
function deleteStudent(index) {
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("stdbtn").textContent = "Add Student";

    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1);
        displayStudents();
    }

}