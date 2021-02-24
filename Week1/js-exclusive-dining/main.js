function resetValid() {
    valid = false;
}

function question(msg, correctResponse) {
    resetValid();
    while (valid == false) {
        let query = prompt(msg).toLowerCase();
        switch (query) {
            case "yes":
                if (correctResponse == 'yes') {
                    console.log('Great!');
                    valid = true;
                } else {
                    console.log('Unfortunately we will not be able to seat you.');
                    valid = false;
                }
                return valid;
            case "no":
                if (correctResponse == 'no') {
                    console.log('Great!');
                    valid = true;
                } else {
                    console.log('Unfortunately we will not be able to seat you.');
                    valid = false;
                }
                return valid;
            default:
                console.log('I did not recognize that answer (\'yes\' or \'no\')?');
                valid = false;
                break;
        }
    }
}

function main() {
    resetValid();
    while (valid == false) {
        var partySize = parseInt(prompt('Welcome! How many people are in your party?'));
        if (Number.isInteger(partySize)) {
            valid = true;
        } else {
            alert('That does not appear to be a valid number, please try again.')
            valid = false;
        }
    }
    if (partySize > 8) {
        alert('We do not have room for your party, please come back another time.')
        return;
    }
    console.log('We have room!');

    question('Are all members of your party 21 or over? (\'yes\' or \'no\')', 'yes');
    if (valid == false) {
        return;
    }

    question('Do all members of your party have valid ID? (\'yes\' or \'no\')', 'yes');
    if (valid == false) {
        return;
    }

    question('Is anyone in your party wearing jeans? (\'yes\' or \'no\')', 'no');
    if (valid == false) {
        return;
    }

    console.log('Let me lead you to your table!');


}

main();