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

            alert("Submission failed.");
        }

        submitBtn.innerText = "SUBMIT APPLICATION";

        submitBtn.disabled = true;

    };

    reader.readAsDataURL(file);

});
