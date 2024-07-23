const textbox = document.querySelector("textarea")
const checkbtn =document .querySelector("#check-btn")
const vowelcountshow =document.querySelector("#vowel-count")
vowelcountshow.innerHTML = 0

checkbtn.addEventListener('click',() => {
    let count = 0
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(let letter of textbox.nodeValue.toLowerCase){
        if(vowels.includes(letter)){
            count++;
        }
    }
    vowelcountshow.innerHTML = count
})
