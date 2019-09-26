const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];

let currentDate = new Date();

//https://www.geeksforgeeks.org/how-to-get-the-number-of-days-in-a-specified-month-using-javascript/
function daysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function resetGrayedOut() {
    for (let i = 0; i < 42; i++) {
        $(`#td${i}`).removeClass('grayedOut');
    }
}

function click() {
    $('#month').html(`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`);
    $('#remove').css('visibility', 'hidden');
    resetGrayedOut();
    populateCalendar();
}

function populateCalendar() {
    let tempDay = currentDate.getDay();
    let tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    tempDate.setDate(daysInMonth(tempDate.getMonth(), tempDate.getFullYear()) - (tempDay - 1));
    let tempGetDate = tempDate.getDate();
    let restOfDays;

    for (let i = 0; i < tempDay; i++) {
        $(`#td${i}`).html(tempGetDate).addClass('grayedOut');
        tempGetDate++;
    }

    for (let i = 0; i < daysInMonth(currentDate.getMonth(), currentDate.getFullYear()); i++) {
        if (tempDay === 35) {
            $('#remove').css('visibility', 'visible');
            restOfDays = 42 - tempDay;
        }

        $(`#td${tempDay}`).html(i + 1);
        tempDay++;
    }

    if (tempDay < 35) {
        restOfDays = 35 - tempDay;
    }

    for (let i = 0; i < restOfDays; i++) {
        $(`#td${tempDay}`).html(i + 1).addClass('grayedOut');
        tempDay++;
    }
}

function load() {
    $('#month').html(`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`);
    $('#day-name').html(dayNames[currentDate.getDay()]);
    $('#day-num').html(currentDate.getDate());
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    populateCalendar();
}

function clickLeft() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    click();
}

function clickRight() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    click();
}