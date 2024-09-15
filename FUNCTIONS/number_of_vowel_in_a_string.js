/*
functs[i]on count_vowel(s) {
    for(let s[i] = 0; i < s.length; i++){
        let count = 0;
        if(s[i] === 'a' || s[i] === 'e'||
            s[i] === 'i' || s[i] === 'o'||
            s[i] === 'u'){
               count++;
            }
    }
    console.log(count);
}   */
// let ans = count_vowel('shivam');

const vowel = (s) => {
    let count = 0
   for(let i = 0; i < s.length; i++){
    if(s[i] === 'a' || s[i] === 'e'|| s[i] === 'i' || s[i] === 'o'||s[i] === 'u')
        {
           count++;
        }
    }
    return count;
}

let ans = vowel('shivam');

console.log(ans);
