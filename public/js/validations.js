// below is all the validation for updating and deleting one of the shifts

const deleteForm = document.querySelectorAll('.deleteForm');

for (let form of deleteForm) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const promptVal = prompt('Enter admin pin:');

        if (promptVal === null) {
            document.location.reload();
        } else if (promptVal !== '2323' && promptVal !== '1234' && promptVal !== '2424') {
            alert('Admin pin incorrect... Please try again');
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