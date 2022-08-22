function pangrams(s) {
    // Write your code here
    let letters = s.toLowerCase().match(/[a-z]/g);
    let alphabet = [...new Set(letters)]
    
    if (alphabet.length === 26) {
        return "pangram"
    } else {
        return "not pangram"
    };
}