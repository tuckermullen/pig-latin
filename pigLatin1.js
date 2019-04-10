const pigLatin = () => {
    var input = document.getElementById("userInput").value.split(" ") //get input from html and split into seperate words
    var end = [] //output array
    for (let x = 0; x < input.length; x++){ //loop each word in array
        let temp = input[x].split("") //split the word into seperate letters
        for (let y = 0; y < temp.length; y++){ //loop each letter in word
            if(temp[0] === 'e'|| temp[0] === 'a' || temp[0] === 'i' || temp[0] === 'o' || temp[0] === 'u'|| temp[0] === 'E' || temp[0] === 'A' || temp[0] === 'I' || temp[0] === 'O'|| temp[0] === 'U'){
                end.push(temp.toString() + "way" + " ") //if first letter is vowel, add word to output array and break the word loop
                break;
            }else if (temp[0] !== 'e'|| temp[0] !== 'a' || temp[0] !== 'i' || temp[0] !== 'o' || temp[0] !== 'u'|| temp[0] !== 'E' || temp[0] !== 'A' || temp[0] !== 'I' || temp[0] !== 'O'|| temp[0] !== 'U'){
                if ((temp[0] === "q" || temp[0] === "Q") && (temp[1] === "u")) {
                        temp.push(temp[0])
                        temp.push(temp[1])
                        temp.shift(temp[0])
                        temp.shift(temp[0])
                        end.push(temp + 'ay' + " ") //if first and second letters are 'qu' then push to end of word, remove from start of word, push to output array.  break the word loop
                        break;
                } else{
                        temp.push(temp[0]) //if not vowel and not 'qu' then add first letter to end and remove first letter from word.  this is how the code updates the letter to be checked
                        temp.shift(temp[0])

                }//end of ifelse
            }
        }
    }
    var result = end.join("").replace(/,/g, "").toLowerCase()
    result = result.substring(0, 1).toUpperCase() + result.substring(1) //= result.subs
    document.getElementById("outPig").innerHTML = result
    //update html instead of return
    //console.log(end.join("").replace(/,/g, ""))
    //return end.join("").replace(/,/g, "");
}
//pigLatin(sentance)
//document.getElementById("outPig").innerHTML =
//console.log()
