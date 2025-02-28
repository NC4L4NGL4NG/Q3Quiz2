function toggleSection(id) {
            var section = document.getElementById(id);
            section.classList.toggle('hidden');
        }
        function submitInfo() {
            alert("Information submitted successfully!");
        }
        function showPrice() {
            var seatPrice = parseFloat(document.getElementById('seatType').value);
            var discount = parseFloat(document.getElementById('ticketOption').value);
            var finalPrice = seatPrice * discount;
            document.getElementById('price').textContent = finalPrice.toFixed(2);
            alert("Your ticket price is " + finalPrice + ". Proceed to the next section.");
        }
        function printTicket() {
            alert("Printing your ticket...");
        }
