const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to CipherForge, where your digital key awaits.");

readline.question("Please, tell us your name: ", (userName) => {
    readline.question("How many letters would you like in your password? ", (numLetters) => {
        readline.question("How many numbers would you like in your password? ", (numNumbers) => {
            readline.question("How many symbols would you like in your password? ", (numSymbols) => {
                
                // Convert inputs to integers
                numLetters = parseInt(numLetters, 10);
                numNumbers = parseInt(numNumbers, 10);
                numSymbols = parseInt(numSymbols, 10);

                if (isNaN(numLetters) || isNaN(numNumbers) || isNaN(numSymbols)) {
                    console.log("Please enter valid numbers for each component.");
                    readline.close();
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
                console.log("\n" + "=".repeat(50));
                console.log(`${userName}, your forged key is ready!`);
                console.log(`Your new password: ${password}`);
                console.log("=".repeat(50));

                readline.close();
            });
        });
    });
});

