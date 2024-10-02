function login() {
    const username = document.getElementById('loginUsername').value;
    const phoneNumber = document.getElementById('loginPhoneNumber').value;
    const password = document.getElementById('loginPassword').value;

    // Basic validation
    if (!username || !phoneNumber || !password) {
        document.getElementById('loginStatus').textContent = 'Please enter all fields.';
        return;
    }

    // For demo purposes, consider login always successful
    document.getElementById('loginStatus').textContent = 'Login successful!';
    
    // Redirect to order page
    window.location.href = 'order.html';
}

function createAccount() {
    const newUsername = document.getElementById('newUsername').value;
    const newPhoneNumber = document.getElementById('newPhoneNumber').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (!newUsername || !newPhoneNumber || !newPassword || !confirmPassword) {
        document.getElementById('createAccountStatus').textContent = 'Please fill in all fields.';
        return;
    }

    if (newPassword !== confirmPassword) {
        document.getElementById('createAccountStatus').textContent = 'Passwords do not match.';
        return;
    }

    // For demo purposes, consider account creation successful
    document.getElementById('createAccountStatus').textContent = 'Account created successfully! Please log in.';

    // Redirect to login after a delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

function calculatePrice() {
    const gasType = document.getElementById('gasType').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!gasType || !quantity) {
        document.getElementById('totalPrice').textContent = 'Please select gas type and enter quantity.';
        return;
    }

    const pricePerUnit = gasType === 'LPG' ? 1000 : 500; // Example prices
    const totalPrice = pricePerUnit * quantity;

    document.getElementById('totalPrice').textContent = `Total Price: ₹${totalPrice}`;
}

function placeOrder() {
    // Placeholder for order placing logic
    document.getElementById('orderStatus').textContent = 'Order placed successfully!';

    // Redirect to confirmation page
    setTimeout(() => {
        window.location.href = 'confirmation.html';
    }, 2000);
}
