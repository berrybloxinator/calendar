const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];

let currentDate = new Date();
let monthName = monthNames[currentDate.getMonth()];
let day = dayNames[currentDate.getDay()];
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let monthNum = currentDate.getMonth();

//https://www.geeksforgeeks.org/how-to-get-the-number-of-days-in-a-specified-month-using-javascript/
function daysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function removeElement(element) {
    $(`${element}`).remove();
}

function resetGrayedOut() {
    for (let i = 0; i < 42; i++) {
        $(`#td${i}`).removeClass('grayedOut');
    }
}

function populateCalendar(days) {
    let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let tempDay = newDate.getDay();
    let tempDate = new Date(year, monthNum - 1, 1);
    tempDate.setDate(daysInMonth(tempDate.getMonth(), tempDate.getFullYear()) - (tempDay - 1));
    let tempGetDate = tempDate.getDate();

    for (let i = 0; i < tempDay; i++) {
        $(`#td${i}`).html(tempGetDate).addClass('grayedOut');
        tempGetDate++;
    }

    for (let i = 0; i < days; i++) {
        if (tempDay === 35) {
            $('#table-body').append(`
                <tr id='remove'>
                    <td id='td35'></td>
                    <td id='td36'></td>
                    <td id='td37'></td>
                    <td id='td38'></td>
                    <td id='td39'></td>
                    <td id='td40'></td>
                    <td id='td41'></td>
                </tr>
            `);
        }
        $(`#td${tempDay}`).html(i + 1);
        tempDay++;
    }

    let restOfDays = 42 - tempDay;

    console.log(restOfDays, tempDay);

    for (let i = 0; i < restOfDays; i++) {
        $(`#td${tempDay}`).html(i + 1).addClass('grayedOut');
        tempDay++;
    }
}

function load() {
    $('#month').html(`${monthName} ${year}`);
    $('#day-name').html(day);
    $('#day-num').html(date);

    let days = daysInMonth(monthNum, year);

    populateCalendar(days);
}

function clickLeft() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    $('#month').html(`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`);
    removeElement('#remove');
    resetGrayedOut();
    let days = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    populateCalendar(days);
}

function clickRight() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    $('#month').html(`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`);
    removeElement('#remove');
    resetGrayedOut();
    let days = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    populateCalendar(days);
}