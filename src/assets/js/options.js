import {myjson} from './data.js' 




let holidayList = myjson;

function getHolidaysFromContinent(holidayList, continent) {
    return holidayList.filter(holiday => holiday.Continent === continent);
}
function getHolidayByType(holidayList, type) {
    return holidayList.filter(holiday => holiday.Category === type);
}

let africaHoliday = getHolidaysFromContinent(holidayList, "Africa");



console.log(africaHoliday)

// export {africaHoliday};