// Script para calcular el presupuesto dinámico
const form = document.getElementById('budget-form');
const productSelect = document.getElementById('product');
const deadlineInput = document.getElementById('deadline');
const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
const totalBudgetSpan = document.getElementById('total-budget');

// Función para calcular el presupuesto
function calcularPresupuesto() {
    let total = 0;

    // Sumar el precio del producto seleccionado
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    total += parseFloat(selectedOption.getAttribute('data-price')) || 0;

    // Aplicar descuento según el plazo
    const plazo = parseInt(deadlineInput.value, 10);
    if (!isNaN(plazo)) {
        if (plazo >= 30) {
            total *= 0.9; // 10% de descuento
        } else if (plazo >= 15) {
            total *= 0.95; // 5% de descuento
        }
    }

    // Sumar el costo de los extras seleccionados
    extrasCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value) || 0;
        }
    });

    // Actualizar el total en la interfaz
    totalBudgetSpan.textContent = `$${total.toFixed(2)}`;
}

// Escuchar cambios en el formulario para recalcular el presupuesto dinámicamente
form.addEventListener('input', calcularPresupuesto);

// Validación y envío del formulario
form.addEventListener('submit', event => {
    event.preventDefault();

    // Validar que los campos de contacto estén completos y sean válidos
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const termsAccepted = document.getElementById('terms').checked;

    const nameValid = /^[a-zA-Z]{1,15}$/.test(name);
    const surnameValid = /^[a-zA-Z ]{1,40}$/.test(surname);
    const phoneValid = /^[0-9]{9}$/.test(phone);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nameValid || !surnameValid || !phoneValid || !emailValid || !termsAccepted) {
        alert('Por favor, completa todos los campos correctamente y acepta las condiciones de privacidad.');
        return;
    }

    alert('Formulario enviado correctamente.');
    form.reset();
    calcularPresupuesto(); // Resetear el presupuesto
});
