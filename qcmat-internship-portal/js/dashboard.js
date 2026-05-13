window.onload = function() {

    const student = localStorage.getItem('studentName');

    if (!student) {
        window.location.href = 'login.html';
    }

    document.getElementById('studentName').innerText = student;
};
