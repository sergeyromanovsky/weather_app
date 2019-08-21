const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const getTodaysDate = () => {
    const date = new Date();
    const today = `${days[date.getDay()]},\u00A0 ${monthNames[date.getMonth()]} ${date.getDate()}`;
    return today;
};

export { days, monthNames };
