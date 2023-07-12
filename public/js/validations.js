// below is all the validation for updating and deleting one of the shifts

const mainFormWrapper = document.querySelector('.mainFormWrapper');

mainFormWrapper.addEventListener('submit', function (event) {
    event.preventDefault();
    const promptVal = prompt('Enter admin pin:');

    if (promptVal === null) {
        alert('No admin pin entered, exiting.');
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