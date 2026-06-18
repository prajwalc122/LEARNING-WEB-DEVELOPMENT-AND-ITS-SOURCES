let students = [];

function addStudent() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Enter Name");
        return;
    }

    students.push(name);
    displayStudents();
    document.getElementById("name").value = "";
}

function displayStudents() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
        <li>
            ${student}
            <button onclick="deleteStudent(${index})">
                Delete
            </button>
        </li>`;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
}