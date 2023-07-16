// below is all the validation for updating and deleting one of the shifts

const mainFormWrapper = document.querySelectorAll('.mainFormWrapper');

for (let form of mainFormWrapper) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const promptVal = prompt('Enter admin pin:');

        if (promptVal === null) {
            document.location.reload();
        } else if (promptVal !== '2424' && promptVal !== '1234') {
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