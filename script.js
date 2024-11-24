document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const size = document.getElementById('smoothieSize').value;
    const flavor = document.getElementById('smoothieFlavor').value;
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(extra => extra.value);
    const customerName = document.getElementById('customerName').value;

    // Calculate price
    let price = 0;
    if (size === 'small') price = 5;
    if (size === 'medium') price = 7;
    if (size === 'large') price = 9;

    // Add extras price
    if (extras.includes('protein')) price += 2;
    if (extras.includes('spinach')) price += 1;
    if (extras.includes('almondMilk')) price += 1.5;

    // Update the order summary
    const orderDetails = `Customer: ${customerName}, Size: ${size}, Flavor: ${flavor}, Extras: ${extras.join(', ') || 'None'}`;
    const orderPrice = `Total Price: $${price.toFixed(2)}`;
    document.getElementById('orderDetails').textContent = orderDetails;
    document.getElementById('orderPrice').textContent = orderPrice;
    document.getElementById('customerNameSummary').textContent = `Customer Name: ${customerName}`;

    // Display appropriate image based on flavor
    const imageWrapper = document.getElementById('smoothieImageWrapper');
    const image = document.getElementById('smoothieImage');
    if (flavor === 'banana') {
        image.src = 'banana-smoothie.jpg'; 
    } else if (flavor === 'strawberry') {
        image.src = 'strawberry-smoothie.jpg';
    } else if (flavor === 'mango') {
        image.src = 'mango-smoothie.jpg';
    }

    // Show the order summary
    document.getElementById('orderSummary').classList.remove('hide');
});
