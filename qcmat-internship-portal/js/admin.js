async function approveStudent(email) {

    const data = {
        action: 'approve',
        email: email
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);
}
