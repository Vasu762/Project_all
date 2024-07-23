const woedTextarea =document.querySelector(".words")
const countbtn =document.querySelector(".count-btn")
const wordCount =document.querySelector(".word-count span")


const countWords = () => {
    let words =woedTextarea.value
    let wordTrimmed =words.replace(/\s+/g, " ").trim()

    let splitWords =wordTrimmed.split(" ")
    console.log(splitWords);

    let numberOdwords =splitWords.length

    if(splitWords[0] ==""){
        numberOdwords =0
    }

    wordCount.innerHTML =numberOdwords
}

countbtn.addEventListener("click",countWords)