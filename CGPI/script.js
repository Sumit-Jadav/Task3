document.getElementById('add').addEventListener('click', addCourse);
document.getElementById('add').addEventListener('click', addCredit);
document.getElementById('add').addEventListener('click', addGrade);
document.getElementById('enter').addEventListener('click', addAll);
document.getElementById('calculate').addEventListener('click', calculateCGPA);
const userInput = document.querySelector('#userInput');

function addAll() {

    const inputNumber = userInput.value;
    if (!inputNumber.match(/^\d+/)) {
        alert("Please only enter numeric characters")
    }
    for (let i = 1; i <= inputNumber - 1; i++) {
        addCourse();
        addCredit();
        addGrade();
    }
}






// Function to ad course
function addCourse() {
    const courseContainer = document.getElementById('courseContainer');
    const Input = document.createElement('input');
    Input.setAttribute('type', 'text');
    Input.setAttribute('id', 'course');
    Input.setAttribute('placeholder', 'Enter Course');
    document.getElementById('course').required = true;
    courseContainer.appendChild(Input);
}
function addGrade() {
    const gradeContainer = document.getElementById('gradeContainer');
    const select = document.createElement('select');
    select.setAttribute('id', 'grade');
    const option1 = new Option('S', '10');
    select.appendChild(option1);
    const option2 = new Option('A', '9');
    select.appendChild(option2);
    const option3 = new Option('B', '8');
    select.appendChild(option3);
    const option4 = new Option('C', '7');
    select.appendChild(option4);
    const option5 = new Option('D', '6');
    select.appendChild(option5);
    const option6 = new Option('E', '4')
    select.appendChild(option6);
    const option7 = new Option('F', '0');
    select.appendChild(option7);
    const option8 = new Option('U', '0');
    select.appendChild(option8);
    const option9 = new Option('P', '0');
    select.appendChild(option9);
    gradeContainer.appendChild(select);
}
function addCredit() {
    const creditContainer = document.getElementById('creditContainer');
    const creditInput = document.createElement('input');
    creditInput.setAttribute('type', 'text');
    creditInput.setAttribute('id', 'credit');
    creditInput.setAttribute('placeholder', 'Enter Credit');
    document.getElementById('credit').required = true;
    creditContainer.appendChild(creditInput);
}
function calculateCGPA() {
    const grade = document.querySelectorAll('#grade');
    const credit = document.querySelectorAll('#credit');
    let totalPoints = 0;
    let totalCredit = 0;
    for (let i = 0; i < grade.length; i++) {
        const gradeValue = parseFloat(grade[i].value);
        const creditValue = parseInt(credit[i].value);
        totalPoints += gradeValue * creditValue;
        totalCredit += creditValue;
    }
    const CGPA = totalPoints / totalCredit;
    // isNaN(CGPA) ? 'Invalid Input' : 
    // alert("Your CGPA is " + CGPA)
    document.getElementById('result').innerText = 'Your CGPA is ' + CGPA.toFixed(2);
}