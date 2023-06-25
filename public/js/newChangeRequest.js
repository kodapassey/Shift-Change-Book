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
            <input type="date" name="dateRequest" id="dateRequest" required>
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

    const removeShift = newShiftDiv.querySelector('.removeShift');
    removeShift.addEventListener('click', function () {
        const divToRemove = newShiftDiv;
        divToRemove.remove();

        // remove the corresponding shift info from the shiftInfoArray
        const indexToRemove = Array.from(allShifts.children).indexOf(newShiftDiv);
        shiftInfoArray.splice(indexToRemove, 1);
    });

    // add the shift info to the shiftInfoArray
    const shiftInfo = {
        date: newShiftDiv.querySelector('.date').value,
        startTime: newShiftDiv.querySelector('.startTime').value,
        endTime: newShiftDiv.querySelector('.endTime').value
    };

    shiftInfoArray.push(shiftInfo);

    // update the shift info in the array whenever a change is made to the input fields
    newShiftDiv.querySelectorAll('input').forEach(function (input) {
        input.addEventListener('input', function () {
            shiftInfo.date = newShiftDiv.querySelector('.date').value;
            shiftInfo.startTime = newShiftDiv.querySelector('.startTime').value;
            shiftInfo.endTime = newShiftDiv.querySelector('.endTime').value;
        });
    });
});