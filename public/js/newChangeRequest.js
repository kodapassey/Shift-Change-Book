const addShift = document.querySelector('#addShift');
const removeShift = document.querySelector('#removeShift');

const allShifts = document.querySelector('#allShifts');

let shiftInfoArray = [];

addShift.addEventListener('click', function () {
    const newShiftDiv = document.createElement('div');
    newShiftDiv.classList.add('newShiftDiv');

    newShiftDiv.innerHTML = `
        <ul class="row shift">
            <li class="col-lg-3 col-sm-12">
                <label for="dateRequest">Date of Shift:</label>
                <input type="date" name="dateRequest" id="dateRequest" placeholder='mm/dd/yyyy' required>
            </li>
            <li class="col-lg-3 col-sm-12">
                <label for="startTime">Shift Start Time:</label>
                <input type="time" name="startTime" id="startTime" required>
            </li>
            <li class="col-lg-3 col-sm-12">
                <label for="endTime">Shift End Time:</label>
                <input type="time" name="endTime" id="endTime" required>
            </li>
            <li class="col-lg-3 col-sm-12 removeBtn">
                <button type="button" class="removeShift">Remove Shift</button>
            </li>
        </ul>
    `;

    allShifts.appendChild(newShiftDiv);

    const removeShiftButton = newShiftDiv.querySelector('.removeShift');
    removeShiftButton.addEventListener('click', function () {
        const divToRemove = newShiftDiv;
        divToRemove.remove();

        // remove the corresponding shift info from the shiftInfoArray
        const indexToRemove = Array.from(allShifts.children).indexOf(newShiftDiv);
        shiftInfoArray.splice(indexToRemove, 1);
    });

    const shiftInfo = {
        date: '',
        startTime: '',
        endTime: ''
    };

    // update the shift info in the array whenever a change is made to the input fields
    const dateInput = newShiftDiv.querySelector('#dateRequest');
    const startTimeInput = newShiftDiv.querySelector('#startTime');
    const endTimeInput = newShiftDiv.querySelector('#endTime');

    dateInput.addEventListener('input', function () {
        shiftInfo.date = dateInput.value;
    });

    startTimeInput.addEventListener('input', function () {
        shiftInfo.startTime = startTimeInput.value;
    });

    endTimeInput.addEventListener('input', function () {
        shiftInfo.endTime = endTimeInput.value;
    });

    shiftInfoArray.push(shiftInfo);
});