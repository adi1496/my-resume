const getMonthYear = () => {
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

    const date = new Date();

    return `${monthNames[date.getMonth()]}-${date.getFullYear()}`;
}


const utils = {
    getMonthYear: getMonthYear
}

export default utils;