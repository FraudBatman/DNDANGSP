export class Calculation {
    public canCrit = false;
    public didCrit = false;
    public dieValue!: number[];
    public minValue = 0;
    public maxValue = 0;
    firstCalc = true;
    constructor(public formula: string) {
    }
    calculate(): number {
        this.dieValue = [];
        this.didCrit = false;
        let runningTotal = 0;

        this.getTokens().forEach(token => {
            runningTotal += this.calcToken(token);
        });

        //first calc used for min/max determining
        this.firstCalc = false;
        return runningTotal;
    }
    calcToken(token: string): number {
        let runningTotal = 0;

        //dice calculations
        if (token.includes("d")) {

            //canCrit rule
            if (token == "1d20") {
                this.canCrit = true;
            }

            let diceAmount = Number.parseInt(token.split("d")[0]);
            let diceSize = Number.parseInt(token.split("d")[1]);
            while (diceAmount > 0) {
                let lastDie = this.roll(diceSize);
                this.dieValue.push(lastDie);


                if (this.canCrit && (lastDie == 1 || lastDie == diceSize)) {
                    this.didCrit = true;
                }

                runningTotal += lastDie;
                if (this.firstCalc) {
                    this.minValue += 1;
                    this.maxValue += diceSize;
                }
                diceAmount--;
            }
        }
        //addition
        else if (token.includes("+")) {
            runningTotal += Number.parseInt(token.split("+")[1]);
            if (this.firstCalc) {
                this.minValue += Number.parseInt(token.split("+")[1]);
                this.maxValue += Number.parseInt(token.split("+")[1]);
            }
        }
        //subtraction
        else if (token.includes("-")) {
            runningTotal -= Number.parseInt(token.split("-")[1]);
            if (this.firstCalc) {
                this.minValue += Number.parseInt(token.split("-")[1]);
                this.maxValue += Number.parseInt(token.split("-")[1]);
            }
        }
        //number
        else if (Number.parseInt(token) != undefined) {
            runningTotal = Number.parseInt(token);
            this.minValue += Number.parseInt(token);
            this.maxValue += Number.parseInt(token);
        }
        // console.log(`Token: ${token} | Value: ${runningTotal}`)

        return runningTotal;
    }
    getTokens(): string[] {
        let returnValue = [] as string[];
        let formulaArray = [...this.formula.toLowerCase()];
        let currentToken = "";
        //editor's note: what the fuck
        if (formulaArray[0] == "+" || formulaArray[0] == "") {
            formulaArray.splice(0, 1)
        }

        formulaArray.forEach(element => {
            //plus minus rule
            if (currentToken == "+" && element == "-") {
                currentToken = "";
            }
            else if ("+-*/".includes(element)) {
                returnValue.push(currentToken);

                //start a new token
                currentToken = "";
            }
            currentToken += element;
        });

        //include the last token
        returnValue.push(currentToken);

        //editor's note: what the super fuck
        if (returnValue[0] == "")
            returnValue.splice(0, 1)

        return returnValue;
    }
    toString(): string {
        let returnValue = "";
        let diceIndex = 0;

        this.getTokens().forEach(token => {
            //dice stuff
            if (token.includes("d")) {
                returnValue += "("
                //get dice count
                let diceCount = Number.parseInt(token.split("d")[0]);
                while (diceCount > 0) {
                    returnValue += this.dieValue[diceIndex];
                    diceIndex++;
                    diceCount--;
                    if (diceCount > 0) {
                        returnValue += "+";
                    }
                }
                returnValue += ")";
            }
            else {
                returnValue += token;
            }
        });

        return returnValue;
    }
    roll(dieSize: number) {
        return Math.round(Math.random() * (dieSize - 1) + 1);
    }
}