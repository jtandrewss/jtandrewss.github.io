async function registerParticipant(event) {

    event.preventDefault();

    const data = {
        action: 'register',
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        college: document.getElementById('college').value,
        degree: document.getElementById('degree').value,
        semester: document.getElementById('semester').value,
        address: document.getElementById('address').value
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.status === 'success') {
        alert('Registration Submitted Successfully');
        document.getElementById('regForm').reset();
    } else {
        alert('Registration Failed');
    }
}
