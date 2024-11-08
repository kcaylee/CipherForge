function cipherForge() {
    alert("Welcome to CipherForge, where your digital key awaits.");

    const userName = prompt("Please, tell us your name:");
    const numLetters = parseInt(prompt("How many letters would you like in your password?"), 10);
    const numNumbers = parseInt(prompt("How many numbers would you like in your password?"), 10);
    const numSymbols = parseInt(prompt("How many symbols would you like in your password?"), 10);

    if (isNaN(numLetters) || isNaN(numNumbers) || isNaN(numSymbols)) {
        alert("Please enter valid numbers for each component.");
        return;
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";

    let passwordChars = [];

    // Add letters
    for (let i = 0; i < numLetters; i++) {
        passwordChars.push(letters.charAt(Math.floor(Math.random() * letters.length)));
    }

    // Add numbers
    for (let i = 0; i < numNumbers; i++) {
        passwordChars.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
    }

    // Add symbols
    for (let i = 0; i < numSymbols; i++) {
        passwordChars.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
    }

    // Shuffle to maximize randomness
    passwordChars = passwordChars.sort(() => Math.random() - 0.5);

    // Build the final password string
    const password = passwordChars.join("");

    // Display the password
    alert("=".repeat(50) + "\n" +
          `${userName}, your forged key is ready!\n` +
          `Your new password: ${password}\n` +
          "=".repeat(50));
}

// Call the function
cipherForge();
