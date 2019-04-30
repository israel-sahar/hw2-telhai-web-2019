const COMMA_INDEX = 44, DOT_INDEX = 46, NUM_LOW = 49, NUM_HI = 57, LET_HI_LOW = 65, LET_HI_HI = 90, LET_LOW_LOW = 97, LET_LOW_HI = 122
const MIN_LEN = 5, MAX = 16

var len = Math.floor(Math.random() * MAX) + MIN_LEN;
var randomSt = "";

var randomChar;

/*check if the ascii value right*/
function checkRange(value) {
    if (value == DOT_INDEX || value == COMMA_INDEX || (value >= NUM_LOW && value <= NUM_HI) || (value >= LET_HI_LOW && value <= LET_HI_HI) || (value >= LET_LOW_LOW && value <= LET_LOW_HI)) {
        return true;
    }
    return false;
}

/*Replace Char by index */
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}



/*create the string*/
for (let index = 0; index < len; index++) {
    randomChar = Math.floor(Math.random() * (79)) + 44;
    if (checkRange(randomChar)) {
        randomSt = randomSt + String.fromCharCode(randomChar)
    }
    else {
        index--;
    }
}
document.getElementById("encrypted-text").innerHTML = randomSt;

function strtoCheck() {
    var temp = ""
    var changeSt = ""
    var IndextoReplace = [];
    for (let index = 0; index < len; index++) {

        asciiVal = randomSt.charCodeAt(index)
        if ((asciiVal >= LET_HI_LOW && asciiVal <= LET_HI_HI) || (asciiVal >= LET_LOW_LOW && asciiVal <= LET_LOW_HI)) {

            if ((asciiVal >= LET_HI_LOW && asciiVal <= LET_HI_HI)) {
                asciiVal = asciiVal + 3
                if (asciiVal > 90)
                    asciiVal = (asciiVal % 90) + 64
            }
            else {
                asciiVal = asciiVal + 3
                if (asciiVal > 122)
                    asciiVal = (asciiVal % 122) + 96
            }
            changeSt = changeSt + String.fromCharCode(asciiVal)
        }
        else {
            if (asciiVal >= NUM_LOW && asciiVal <= NUM_HI) {
                changeSt = changeSt + Math.abs(10 - parseInt(randomSt[index]))
            }
            else {
                IndextoReplace.push(index)
                changeSt = changeSt + randomSt[index]
            }
        }
    }

    for (let index = 0; index < IndextoReplace.length; index++) {
        temp = changeSt[len - IndextoReplace[index] - 1]
        changeSt = replaceAt(changeSt, len - IndextoReplace[index] - 1, changeSt[IndextoReplace[index]])
        changeSt = replaceAt(changeSt, IndextoReplace[index], temp)
    } 
    return changeSt
}

function CheckUserInput(input)
{
    
    if(document.getElementById(input).value===strtoCheck())
    {
        window.location.href ="../page-2/page-2.html"      
    }
    else
    {
        console.log(strtoCheck())
        document.getElementById(input).value=""
        document.getElementById(input).placeholder="ההתחברות נכשלה - נסה שוב"
    }
}
