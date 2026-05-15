const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");
const declaration = document.getElementById("declaration");
const successMessage = document.getElementById("successMessage");
const purpose = document.getElementById("purpose");
const wordCount = document.getElementById("wordCount");
const fileUpload = document.getElementById("fileUpload");
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqeXLNAjCbLt1iculK0ZzshVP0Y6Ue2SWhACWNYBdoE5fK12piASK5y4ATQZEyTr-q/exec";
                    
// ------------------------------------
// WORD COUNT LIMIT
// ------------------------------------

purpose.addEventListener("input", () => {

    let words = purpose.value
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);

    if (words.length > 100) {

        words = words.slice(0, 100);

        purpose.value = words.join(" ");
    }

    wordCount.textContent = words.length;

    validateForm();
});


// ------------------------------------
// VALIDATE FORM
// ------------------------------------

function validateForm() {

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const mobile = form.mobile.value.trim();
    const college = form.college.value.trim();
    const degree = form.degree.value;
    const year = form.year.value;
    const purposeText = form.purpose.value.trim();
    const transactionId = form.transactionId.value.trim();

    const fileSelected = fileUpload.files.length > 0;

    const declarationChecked = declaration.checked;

    const words = purposeText
        .split(/\s+/)
        .filter(word => word.length > 0);

    const validWordCount = words.length > 0 && words.length <= 100;

    const allValid =

        name !== "" &&
        email !== "" &&
        mobile !== "" &&
        college !== "" &&
        degree !== "" &&
        year !== "" &&
        purposeText !== "" &&
        validWordCount &&
        transactionId !== "" &&
        fileSelected &&
        declarationChecked;

    submitBtn.disabled = !allValid;
}


// ------------------------------------
// EVENT LISTENERS
// ------------------------------------

form.addEventListener("input", validateForm);

form.addEventListener("change", validateForm);

declaration.addEventListener("change", validateForm);

fileUpload.addEventListener("change", validateForm);


// ------------------------------------
// SUBMIT FORM
// ------------------------------------

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    const file = fileUpload.files[0];

    const reader = new FileReader();

    reader.onload = async function () {

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

        try {

            const response = await fetch(SCRIPT_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)

            });

            const result = await response.text();

            console.log(result);

            if(result === "Success"){

                form.reset();

                wordCount.textContent = "0";

                successMessage.style.display = "block";

                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth"
                });

            }
            else{

                alert("Server Error:\n" + result);
            }

        }

        catch (error) {

            console.error(error);

            alert("Submission failed. Check all entries and submit again or mail to hodap@sgsits.ac.in");
        }

        submitBtn.innerText = "SUBMIT APPLICATION";

        submitBtn.disabled = true;

    };

    reader.readAsDataURL(file);

});
