function marsExploration(s) {
    // Write your code here
    const signals = s.match(/.{1,3}/g);
    let count = 0;
    signals.filter(v => v !=="SOS").forEach(signal => {
        console.log(signal);
        const [first, sec, third] = signal.split("");
        if (first !== 'S') count++;
        if (sec !== 'O') count++;
        if (third !== 'S') count++;
    });
    return count;
}