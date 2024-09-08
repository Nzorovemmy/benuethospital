window.onload = function () {
    // Retrieve treatments from local storage
    const treatments = JSON.parse(localStorage.getItem('treatments')) || [];

    const careForm = document.getElementById('care-form');
    const treatmentList = document.getElementById('treatment-list');

    // Handle treatment form submission
    careForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const newTreatment = {
            name: document.getElementById('patient-name').value,
            plan: document.getElementById('treatment-plan').value,
            status: document.getElementById('care-status').value,
            notes: document.getElementById('care-notes').value || ''
        };

        // Save the treatment record
        treatments.push(newTreatment);
        localStorage.setItem('treatments', JSON.stringify(treatments));

        alert('Treatment Record Added Successfully!');
        displayTreatments();
        careForm.reset(); // Clear form after submission
    });

    // Display treatments
    function displayTreatments() {
        treatmentList.innerHTML = ''; // Clear previous records
        treatments.forEach((treatment) => {
            const treatmentDiv = document.createElement('div');
            treatmentDiv.innerHTML = `
                <strong>${treatment.name}</strong> is undergoing <strong>${treatment.plan}</strong>.
                Status: ${treatment.status}. 
                ${treatment.notes ? `<em>Notes: ${treatment.notes}</em>` : ''}
            `;
            treatmentList.appendChild(treatmentDiv);
        });
    }

    displayTreatments(); // Initial load of treatment records
};
