import date from 'date-and-time';

const month_map = {
    1: "Januwoowee",
    2: "Febuwoowee",
    3: "Mwooch",
    4: "Apwoo",
    5: "Mwee",
    6: "Jwoon",
    7: "Joowee",
    8: "Wooweest",
    9: "Septembwee",
    10: "Octobwee",
    11: "Novembwee",
    12: "Decembwee"
}

const weekday_map = {
    0: "Twoosday",
    1: "Weednesday",
    2: "Thwoorsday",
    3: "Fweeday",
    4: "Swooterday",
    5: "Swoonday",
    6: "Mwoonday"
}

const get_offset = (year, month) => {
    var day_of_week = new Date(year + 1900, month, 1).getDay()
    
    switch(day_of_week) {
        case 0: return 2
        case 1: return 1
        case 2: return 0
        case 3: return 6
        case 4: return 5
        case 5: return 4
        case 6: return 3
    }

}

const get_last_day_of_month = (year, month) => {
    var d = new Date(year + 1900, month + 1, 0)
    console.log(d)
    return d
}

const get_date_diff_days = (d1, d2) => {
    var d1t = new Date(d1.getYear(), d1.getMonth(), d1.getDate())
    var d2t = new Date(d2.getYear(), d2.getMonth(), d2.getDate())

    return date.subtract(d1t, d2t).toDays()
}

const from_gregorian_to_weewoo = (g_date_o) => {
    var g_date = date.addHours(g_date_o, -10)
    var offset = get_offset(g_date.getYear(), g_date.getMonth())
    if(g_date.getDate() > offset) {
        return {year: g_date.getYear() + 1900, month: g_date.getMonth() + 1, day: g_date.getDate() - offset, hours: g_date.getHours(), minutes: g_date.getMinutes(), seconds: g_date.getSeconds()}
    } else if(g_date.getMonth() > 0) {
        offset = get_offset(g_date.getYear(), g_date.getMonth() - 1)
        var ldopm = get_last_day_of_month(g_date.getYear(), g_date.getMonth() - 1)
        var delta = get_date_diff_days(g_date, ldopm)
        return {year: g_date.getYear() + 1900, month: g_date.getMonth(), day: ldopm.getDate() + delta - offset, hours: g_date.getHours(), minutes: g_date.getMinutes(), seconds: g_date.getSeconds()}
    } else {
        offset = get_offset(g_date.getYear() - 1, 11)
        var ldopm = get_last_day_of_month(g_date.getYear() - 1, 11)
        var delta = get_date_diff_days(g_date, ldopm)
        return {year: g_date.getYear() - 1 + 1900, month: 12, day: ldopm.getDate() + delta - offset, hours: g_date.getHours(), minutes: g_date.getMinutes(), seconds: g_date.getSeconds()}
    }
}

const today_in_weewoo = () => {
    var d = new Date()
    return from_gregorian_to_weewoo(d)
}

const stringify_weewoo_date = (weewoo) => {
    return weekday_map[(weewoo.day - 1) % 7] + ", " + month_map[weewoo.month] + " " + weewoo.day + ", " + weewoo.year
}

const stringify_weewoo_time = (weewoo) => {
    var td = new Date(1970, 1, 1, weewoo.hours, weewoo.minutes, weewoo.seconds)
    return date.format(td, "h:mm:ss A")
}

export {
    from_gregorian_to_weewoo,
    today_in_weewoo,
    stringify_weewoo_date,
    stringify_weewoo_time
}