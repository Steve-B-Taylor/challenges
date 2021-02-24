let addressBook = {
  "Mark Zuckerberg": "markymark@example.com",
  "Grace Hopper": "foundABug@example.com",
  "Alan Turing": "alanTheMachine@example.com",
  "Sister Mary Kenneth Keller": "theOGDoctor@example.com",
  "Ada Lovelace": "kindaCalledThisWholeComputerThing@example.com",
  "Bill Gates": "noBlueScreens@example.com"
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function findit() {
  let foundName = true
  while (foundName != false) {
    let finder=prompt("Enter a name to search: ")

    if (finder === null) {
      finder = ''
    } else {
      finder = toTitleCase(finder)
    }

    if (finder.toLowerCase() === 'exit') {
      console.log('Exiting...')
      foundName = false
    } else if (addressBook[finder]) {
        foundName = false
        return addressBook[finder]
    } else {
      addRecord=confirm(`${finder} is not on my list, would you like to add them?`)
      if (addRecord) {
        address=prompt('Enter the email address')
        addressBook.finder=address
        foundName = true
        return addressBook.finder
      } else {
        console.log("OK, I won't add it")
        foundName = false
      }
    }
  }
}

function main() {
  console.log(findit())
}

main()