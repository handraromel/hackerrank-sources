function timeConversion(s) {
    // Write your code here
    const ampm = s.slice(-2);
    const hours = Number(s.slice(0, 2));
    let time = s.slice(0, -2);
    if (ampm === 'AM') {
        if (hours === 12) {
            return time.replace(s.slice(0, 2), '00');
        }
        return time
    } else if (ampm == 'PM') {
        if (hours != 12) {
            return time.replace(s.slice(0, 2), String(hours + 12));
        }
        return time;
    }
}
