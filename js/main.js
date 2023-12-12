let total = 0;
let clearDisplay = false;
let screenDisplay = document.querySelector('#display')
//constructor
function MakeButton(id, screenApp) {
    this.id = id,
    this.screenApp = screenApp,
    this.displayOnScreen = function(data) {
        if (clearDisplay) {
            screenDisplay.innerText = ''
            clearDisplay = false;
        }
        screenDisplay.innerText += data
    },
    this.click = function() {
        document.querySelector(this.id).addEventListener('click', () => this.displayOnScreen(this.screenApp))
    }
    
   
}


//creating button ojects
let buttonSeven = new MakeButton('#seven', '7')
let buttonEight = new MakeButton('#eight', '8')
let buttonNine = new MakeButton('#nine', '9')
let buttonDivide = new MakeButton('#divide', ' / ')
let buttonFour = new MakeButton('#four', '4')
let buttonFive = new MakeButton('#five', '5')
let buttonSix = new MakeButton('#six', '6')
let buttonMultiply = new MakeButton('#multiply', ' * ')
let buttonOne = new MakeButton('#one', '1')
let buttonTwo = new MakeButton('#two', '2')
let buttonThree = new MakeButton('#three', '3')
let buttonAdd = new MakeButton('#add', ' + ')
let buttonZero = new MakeButton('#zero', '0')
let buttonPoint = new MakeButton('#point', ' . ')
let buttonMins = new MakeButton('#minus', ' - ')



//click events
buttonEight.click()
buttonSeven.click()
buttonNine.click()
buttonDivide.click()
buttonFour.click()
buttonFive.click()
buttonSix.click()
buttonMultiply.click()
buttonOne.click()
buttonTwo.click()
buttonThree.click()
buttonAdd.click()
buttonZero.click()
buttonPoint.click()
buttonMins.click()


//equal button 
function answer() {
    //click event
    document.querySelector('#equals').addEventListener('click', compute)

    //compute function

    function compute() {
        //can put an equation inside a template literal
        
        let equation = screenDisplay.innerText
        let answer = eval(equation)
         document.querySelector('#display').innerText = answer
         clearDisplay = true;


}
    
    }

    answer()

   

    



/*document.querySelector('#one').addEventListener('click', displayOnScreen)

function displayOnScreen() {
    document.querySelector('#display').innerText = '1'
}*/