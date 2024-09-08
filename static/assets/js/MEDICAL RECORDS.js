window.onload = function () {
    // Retrieve the patients data from local storage
    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    const tableBody = document.querySelector('#patients-table tbody');
    
    if (patients.length === 0) {
        // If no patients are found, show a message
        const emptyMessage = document.createElement('tr');
        emptyMessage.innerHTML = '<td colspan="7" style="text-align: center; color: red;">No patients registered yet.</td>';
        tableBody.appendChild(emptyMessage);
    } else {
        // Populate the table with patient records
        patients.forEach(patient => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td>${patient.address}</td>
                <td>${patient.phone}</td>
                <td>${patient.email}</td>
                <td>${patient.medicalHistory}</td>
            `;
            tableBody.appendChild(row);
        });
    }
};

// Search Function to filter patients by name or phone number
function searchPatient() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const tableRows = document.querySelectorAll('#patients-table tbody tr');

    tableRows.forEach(row => {
        const nameCell = row.cells[0].textContent.toLowerCase();
        const phoneCell = row.cells[4].textContent.toLowerCase();

        // Show the row if either the name or phone matches the search input
        if (nameCell.includes(input) || phoneCell.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
