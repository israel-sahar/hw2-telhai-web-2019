
            function ConvertBase(val, base1, base2) {
                if (typeof(val) == "number") {
                    return parseInt(String(val)).toString(base2);
                } else {
                    return parseInt(val.toString(), base1).toString(base2)
                };
            }
            
            function checkInput()
            {
                var userInput,sbox,text;
                userInput =Number( document.getElementById("input").value);
                sbox = document.getElementById("selectFromBox").value;
                if(isNaN(userInput)||userInput == "")
                {
                text = "not a valid input";
                document.getElementById("input").value = "";
                document.getElementById("input").placeholder = text;
                }
                else
                {
                text = userInput.toString(sbox);
                document.getElementById("inputOut").value = ConvertBase(document.getElementById("input").value,document.getElementById("selectFromBox").value,document.getElementById("selectToBox").value)
                }
            }