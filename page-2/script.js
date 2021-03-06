function isNumber(val, base) {
    do{
        if(val%10>=base) return false;
        val=val/10;
    }while(val!=0);

    return true;
}
function ConvertBase(val, base1, base2) {
    if (typeof (val) == "number") {
        return parseInt(String(val)).toString(base2);
    } else {
        return parseInt(val.toString(), base1).toString(base2)
    };
}

function checkInput() {
    var userInput, sbox, text;
    userInput = Number(document.getElementById("input").value);
    if (isNaN(userInput) || userInput == "" || !isNumber(userInput,Number(document.getElementById("selectFromBox").value))) {
        text = "not a valid input";
        document.getElementById("input").value = "";
        document.getElementById("input").placeholder = text;
        document.getElementById("inputOut").value=""
        document.getElementById("inputOut").placeholder="The answer is:"
    }
    else {
        document.getElementById("inputOut").value = ConvertBase(document.getElementById("input").value, document.getElementById("selectFromBox").value, document.getElementById("selectToBox").value)
    }
}