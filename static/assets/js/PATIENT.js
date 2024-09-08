document.getElementById('register-patient-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the input values from the form
    const patientName = document.getElementById('patient-name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const medicalHistory = document.getElementById('medical-history').value;

    // Create a patient object
    const patientData = {
        name: patientName,
        age: age,
        gender: gender,
        address: address,
        phone: phone,
        email: email,
        medicalHistory: medicalHistory
    };

    // Store the patient data in local storage (you could replace this with a database)
    let patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.push(patientData);
    localStorage.setItem('patients', JSON.stringify(patients));

    // Show a success message or redirect to the medical records page
    alert('Patient registered successfully! Redirecting to Medical Records Management...');
    window.location.href = 'MEDICAL RECORDS.html'; // Redirect to Medical Records page
});
