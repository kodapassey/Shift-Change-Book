const newShiftBtn = document.querySelector('#newShift');
const newShiftModal = document.querySelector('#newShiftModal');
const cancelModalBtn = document.querySelector('#cancelModalBtn')
const noCurrentShiftsBtn = document.querySelector('#noCurrentShiftsBtn');
const form = document.querySelector('#shiftForm');
const nonModalDiv = document.querySelector('.nonModalDiv');

// const deleteForms = document.querySelectorAll('.deleteForm');


document.addEventListener("DOMContentLoaded", function () {
    newShiftBtn.addEventListener('click', function () {
        newShiftModal.style.display = 'block';
        nonModalDiv.classList.add("modal-blur");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    noCurrentShiftsBtn.addEventListener('click', function () {
        newShiftModal.style.display = 'block'
        nonModalDiv.classList.add("modal-blur");
    });
});

cancelModalBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    event.stopPropagation();
    newShiftModal.style.display = 'none'
    nonModalDiv.classList.remove("modal-blur");
})

// function for checking if the admin pin is correct

// Attach an event listener to the form's submit event
form.addEventListener("submit", function (event) {
    const pin = document.querySelector('input[name="pin"]').value;
    console.log(pin);

    // Prevent the default form submission behavior
    event.preventDefault();

    if (pin !== '2323' && pin !== '1234' && pin !== '2424') {
        alert('Admin Pin Incorrect.');
        document.location.reload();
        return;
    } else {
        console.log("Form is about to be submitted");
    }

    // Submit the form programmatically
    form.submit();
});

