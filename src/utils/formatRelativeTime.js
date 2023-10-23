function formatRelativeTime(date) {
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
        return secondsAgo + (secondsAgo === 1 ? ' second ago' : ' seconds ago');
    }

    if (timeDifference < hour) {
        const minutesAgo = Math.round(timeDifference / minute);
        return minutesAgo + (minutesAgo === 1 ? ' minute ago' : ' minutes ago');
    }

    if (timeDifference < day) {
        const hoursAgo = Math.round(timeDifference / hour);
        return hoursAgo + (hoursAgo === 1 ? ' hour ago' : ' hours ago');
    }

    if (timeDifference < week) {
        const daysAgo = Math.round(timeDifference / day);
        return daysAgo + (daysAgo === 1 ? ' day ago' : ' days ago');
    }

    if (timeDifference < month) {
        const weeksAgo = Math.round(timeDifference / week);
        return weeksAgo + (weeksAgo === 1 ? ' week ago' : ' weeks ago');
    }

    if (timeDifference < year) {
        const monthsAgo = Math.round(timeDifference / month);
        return monthsAgo + (monthsAgo === 1 ? ' month ago' : ' months ago');
    }

    const yearsAgo = Math.round(timeDifference / year);
    return yearsAgo + (yearsAgo === 1 ? ' year ago' : ' years ago');
}

export default formatRelativeTime;
