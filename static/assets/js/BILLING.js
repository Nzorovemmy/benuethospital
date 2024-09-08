window.onload = function () {
    // Retrieve payment records from local storage
    const payments = JSON.parse(localStorage.getItem('payments')) || [];

    const paymentForm = document.getElementById('payment-form');
    const paymentMethod = document.getElementById('payment-method');
    const insuranceDetails = document.getElementById('insurance-details');
    const paymentList = document.getElementById('payment-list');

    // Show insurance details if "Insurance" is selected
    paymentMethod.addEventListener('change', function () {
        if (paymentMethod.value === 'insurance') {
            insuranceDetails.style.display = 'block';
        } else {
            insuranceDetails.style.display = 'none';
        }
    });

    // Handle payment form submission
    paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const newPayment = {
            name: document.getElementById('patient-name').value,
            amount: document.getElementById('bill-amount').value,
            method: paymentMethod.value,
            insurance: {
                provider: document.getElementById('insurance-provider').value || '',
                policy: document.getElementById('insurance-policy').value || ''
            }
        };

        // Save the payment record
        payments.push(newPayment);
        localStorage.setItem('payments', JSON.stringify(payments));

        alert('Payment Processed Successfully!');
        displayPayments();
        paymentForm.reset(); // Clear form after submission
    });

    // Display payment records
    function displayPayments() {
        paymentList.innerHTML = ''; // Clear previous records
        payments.forEach((payment) => {
            const paymentDiv = document.createElement('div');
            paymentDiv.innerHTML = `
                <strong>${payment.name}</strong> paid <strong>${payment.amount}</strong> using ${payment.method}.
                ${payment.method === 'insurance' ? ` Insurance: ${payment.insurance.provider} (Policy: ${payment.insurance.policy})` : ''}
            `;
            paymentList.appendChild(paymentDiv);
        });
    }

    displayPayments(); // Initial load of payment records
};
