// below is all the validation for updating and deleting one of the shifts

const deleteForm = document.querySelectorAll('.deleteForm');

for (let form of deleteForm) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const promptVal = prompt('Enter admin pin:');

        if (promptVal === null) {
            document.location.reload();
        } else if (promptVal !== '1991') {
            alert('Pin Incorrect.');
            document.location.reload();
        } else {
            alert('Shift updated.');
            const form = event.target.closest('form');
            if (form) {
                form.submit(); // Submit the form that triggered the event
            }
        }
    });
}