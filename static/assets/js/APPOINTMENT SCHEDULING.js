window.onload = function () {
    // Retrieve appointments from local storage
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    const appointmentForm = document.getElementById('appointment-form');
    const appointmentList = document.getElementById('appointment-list');

    // Handle appointment form submission
    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const newAppointment = {
            name: document.getElementById('patient-name').value,
            date: document.getElementById('appointment-date').value,
            time: document.getElementById('appointment-time').value,
            doctor: document.getElementById('doctor-name').value
        };

        // Save the appointment
        appointments.push(newAppointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        alert('Appointment Scheduled Successfully!');
        displayAppointments();
        appointmentForm.reset(); // Clear form after submission
    });

    // Display appointments
    function displayAppointments() {
        appointmentList.innerHTML = ''; // Clear previous appointments
        appointments.forEach((appointment, index) => {
            const appointmentDiv = document.createElement('div');
            appointmentDiv.innerHTML = `
                <strong>${appointment.name}</strong> has an appointment on ${appointment.date} at ${appointment.time} with Dr. ${appointment.doctor}.
                <button onclick="deleteAppointment(${index})">Cancel</button>
            `;
            appointmentList.appendChild(appointmentDiv);
        });
    }

    // Delete an appointment
    window.deleteAppointment = function (index) {
        appointments.splice(index, 1); // Remove appointment by index
        localStorage.setItem('appointments', JSON.stringify(appointments));
        displayAppointments();
    };

    displayAppointments(); // Initial load of appointments
};

// Search functionality for appointments
function searchAppointments() {
    const input = document.getElementById('appointment-search').value.toLowerCase();
    const appointmentList = document.getElementById('appointment-list');
    const appointments = appointmentList.querySelectorAll('div');

    appointments.forEach(appointment => {
        if (appointment.innerText.toLowerCase().includes(input)) {
            appointment.style.display = '';
        } else {
            appointment.style.display = 'none';
        }
    });
}
