const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];

function load() {
    let d = new Date();
    let month = monthNames[d.getMonth()];
    let day = dayNames[d.getDay()];
    let date = d.getDate();

   $('#month').html(`${month} ${d.getFullYear()}`);
   $('#day-name').html(day);
   $('#day-num').html(date);
}