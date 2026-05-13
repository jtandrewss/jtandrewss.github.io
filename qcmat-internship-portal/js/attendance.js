async function loadAttendance() {

    const email = localStorage.getItem('studentEmail');

    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            action: 'attendance',
            email: email
        })
    });

    const result = await response.json();

    document.getElementById('attendancePercent').innerText =
        result.attendance + '%';
}
