function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
