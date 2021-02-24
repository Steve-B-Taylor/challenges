function chkPropmpt(msg) {
    chkPrompt = true
    let messageCheck
    while (chkPrompt === true) {
        let chkMsg = parseInt(prompt(msg))
        if (isNaN(chkMsg) || (chkMsg < 1)) {
            alert("ERROR:  This must be a number (more than 1).")
        } else {
            messageCheck = chkMsg
            chkPrompt = false
        }
        
        return messageCheck
    }
}

function main() {

    let numStudents = chkPropmpt('How many students are in the class today?')
    if (numStudents > 1 && numStudents < 10) {
        console.log(`Welcome, students! Get yourselves ready to learn some JavaScript!`);
    } else if (numStudents >= 10) {
            console.log(`Welcome, students! Please settle in two to a table, and prepare to learn some JavaScript!`);
    } else {
        console.log(`Welcome, student! Get yourself ready to learn some JavaScript!`);
    }

    if (numStudents > 1) {
        while (numStudents > 0) {
            console.log(`Hello Student #${numStudents}!`)
            numStudents--
        }
    }
}

main()
