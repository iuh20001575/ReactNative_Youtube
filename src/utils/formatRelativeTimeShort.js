function formatRelativeTimeShort(date) {
    const currentDate = new Date();
    const timestamp = date.getTime();
    const currentTimestamp = currentDate.getTime();
    const timeDifference = currentTimestamp - timestamp;

    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (timeDifference < minute) {
        const secondsAgo = Math.round(timeDifference / 1000);
        return secondsAgo + 's ago';
    }

    if (timeDifference < hour) {
        const minutesAgo = Math.round(timeDifference / minute);
        return minutesAgo + 'm ago';
    }

    if (timeDifference < day) {
        const hoursAgo = Math.round(timeDifference / hour);
        return hoursAgo + 'h ago';
    }

    if (timeDifference < week) {
        const daysAgo = Math.round(timeDifference / day);
        return daysAgo + 'd ago';
    }

    if (timeDifference < month) {
        const weeksAgo = Math.round(timeDifference / week);
        return weeksAgo + 'w ago';
    }

    if (timeDifference < year) {
        const monthsAgo = Math.round(timeDifference / month);
        return monthsAgo + 'm ago';
    }

    const yearsAgo = Math.round(timeDifference / year);
    return yearsAgo + 'y ago';
}

export default formatRelativeTimeShort;
