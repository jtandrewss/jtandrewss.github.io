const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");
const declaration = document.getElementById("declaration");
const successMessage = document.getElementById("successMessage");
const purpose = document.getElementById("purpose");
const wordCount = document.getElementById("wordCount");

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWYnmFYpeTKFc2M9I1xUgTF0b8CFeC2R5MjJtoi1pjX6XC3jhXEtz60Ke-7CX5vBpKvA/exec";


// ------------------------
// WORD COUNT LIMIT
// ------------------------

purpose.addEventListener("input", () => {

    let words = purpose.value
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);

    if(words.length > 100){

        words = words.slice(0,100);

        purpose.value = words.join(" ");
    }

    wordCount.textContent = words.length;
});


// ------------------------
// ENABLE / DISABLE BUTTON
// ------------------------

form.addEventListener("input", validateForm);

function validateForm(){

    const allFilled = form.checkValidity();

    submitBtn.disabled = !allFilled;
}


// ------------------------
// SUBMIT FORM
// ------------------------

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    const fileInput = document.getElementById("fileUpload");

    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onload = async function(){

        const base64File = reader.result.split(",")[1];

        const formData = {

            name: form.name.value,
            email: form.email.value,
            mobile: form.mobile.value,
            college: form.college.value,
            degree: form.degree.value,
            year: form.year.value,
            purpose: form.purpose.value,
            transactionId: form.transactionId.value,

            fileName: file.name,
            mimeType: file.type,
            fileData: base64File

        };

        try{

            const response = await fetch(SCRIPT_URL, {

                method: "POST",

                body: JSON.stringify(formData)

            });

            const result = await response.text();

            console.log(result);

            form.reset();

            submitBtn.disabled = true;

            successMessage.style.display = "block";

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

        }

        catch(error){

            alert("Submission failed. Please try again.");

            console.error(error);
        }

        submitBtn.innerText = "SUBMIT APPLICATION";

    };

    reader.readAsDataURL(file);

});
