
            function checkInput()
            {
                var userInput,sbox,text;
                userInput =Number( document.getElementById("input").value);
                sbox = document.getElementById("selecBox").value;
                if(isNaN(userInput)||userInput == "")
                {
                text = "not a valid input";
                document.getElementById("input").value = text;
                }
                else
                {
                text = userInput.toString(sbox);
                document.getElementById("input").value = text;
                }
            }