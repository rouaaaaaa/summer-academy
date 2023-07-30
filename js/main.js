const quantityButtons = document.querySelectorAll('.quantity-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const likeButtons = document.querySelectorAll('.like-btn');


let totalPrice = 0;


quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.getAttribute('data-id');
        const quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (button.textContent === '+') {
            quantity++;
        } else if (button.textContent === '-' && quantity > 1) {
            quantity--;
        }
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });
});


deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.getAttribute('data-id');
        const itemElement = button.parentElement;
        const itemPrice = 10; 
        const quantity = parseInt(itemElement.querySelector('.quantity').textContent);
        totalPrice -= itemPrice * quantity;
        itemElement.remove();
        updateTotalPrice();
    });
});

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('red');
    });
});

function updateTotalPrice() {
    const items = document.querySelectorAll('.item');
    let newTotalPrice = 0;
    items.forEach(item => {
        const itemPrice = 10; 
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        newTotalPrice += itemPrice * quantity;
    });
    totalPrice = newTotalPrice;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}