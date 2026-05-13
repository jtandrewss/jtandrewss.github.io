async function loadEvaluations() {

    const email = localStorage.getItem('studentEmail');

    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            action: 'evaluation',
            email: email
        })
    });

    const result = await response.json();

    document.getElementById('theory').innerText = result.theory;
    document.getElementById('lab').innerText = result.lab;
    document.getElementById('presentation').innerText = result.presentation;
    document.getElementById('project').innerText = result.project;
}
