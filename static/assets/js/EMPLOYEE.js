<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Employee - BSUTH</title>
    <link rel="stylesheet" href="LAST MANAGEMENT.css">
    <script defer src="employeeForm.js"></script>
</head>
<body>
    <header>
        <h1>Register Employee</h1>
        <nav>
            <ul>
                <li><a href="LAST MANAGEMENT.html">Home</a></li>
                <li><a href="PATIENT.html">Register Patient</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="employeeForm" class="form-section">
            <form id="employee-registration-form">
                <label for="employeeFirstName">First Name:</label>
                <input type="text" id="employeeFirstName" name="employeeFirstName" maxlength="20" required>

                <label for="employeeMiddleName">Middle Name:</label>
                <input type="text" id="employeeMiddleName" name="employeeMiddleName" maxlength="20">

                <label for="employeeSurname">Surname:</label>
                <input type="text" id="employeeSurname" name="employeeSurname" maxlength="20" required>

                <label for="employeeDOB">Date of Birth:</label>
                <input type="date" id="employeeDOB" name="employeeDOB" required>

                <label for="employeeSex">Sex:</label>
                <select id="employeeSex" name="employeeSex" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label for="employeeMaritalStatus">Marital Status:</label>
                <select id="employeeMaritalStatus" name="employeeMaritalStatus">
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                </select>

                <label for="employeeDisability">Disability:</label>
                <input type="text" id="employeeDisability" name="employeeDisability" maxlength="20">

                <label for="employeeAddress">Address:</label>
                <input type="text" id="employeeAddress" name="employeeAddress" maxlength="50" required>

                <label for="employeePhoneNumber">Phone Number:</label>
                <input type="text" id="employeePhoneNumber" name="employeePhoneNumber" maxlength="15" required>

                <button type="submit">Submit</button>
            </form>
        </section>
    </main>

    <script>
        document.getElementById('employee-registration-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting immediately
            
            const firstName = document.getElementById('employeeFirstName').value.trim();
            const surname = document.getElementById('employeeSurname').value.trim();
            const dob = document.getElementById('employeeDOB').value;
            const phone = document.getElementById('employeePhoneNumber').value.trim();

            // Basic validation
            if (!firstName || !surname || !dob || !phone) {
                alert('Please fill in all required fields.');
                return;
            }

            if (!/^\d{10,15}$/.test(phone)) {
                alert('Phone number must be between 10 and 15 digits.');
                return;
            }

            const formData = new FormData(this); // Collect form data
            const data = Object.fromEntries(formData.entries()); // Convert FormData to an object

            // Simulate form submission (this would be where you send data to the server)
            console.log('Form Submitted:', data);

            alert('Employee registered successfully!');
            this.reset(); // Clear the form after successful submission
        });
    </script>
</body>
</html>
