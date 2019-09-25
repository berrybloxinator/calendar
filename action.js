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
let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

//https://www.geeksforgeeks.org/how-to-get-the-number-of-days-in-a-specified-month-using-javascript/
function daysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function populateCalendar(days) {
    let tempDate = currentDate;
    tempDate.setMonth(currentDate.getMonth() - 1);
    console.log(tempDate);
    let tempDay = newDate.getDay();

    for (let i = 0; i < tempDay; i++) {
        $(`#td${i}`).html('test');
    }

    for (let i = 0; i < days; i++) {
        if (tempDay > 34) {
            $('#table-body').append(`
                <tr>
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

    for (let i = 0; i < restOfDays; i++) {
        $(`#td${tempDay}`).html(i + 1);
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
    console.log('left');
}

function clickRight() {
    console.log('right');
}