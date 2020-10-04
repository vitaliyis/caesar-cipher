# Caesar cipher cli

This is a command line application. It encrypts and decrypts text with Caesar's cipher.
This application encrypts and decrypts only Latin alphabet's letters.
All other characters remain unchanged.

## How to install
1. Download it from the repository.
2. Run the command line in folder with application
3. Enter the command "npm install" and wait for the installation process to complete.
4. Application is ready to start.

## Ho to use
In command line you need to enter "node caesar-cli" and options:
1. -s, --shift: a shift. This is step of encryption/decryption. Step must have a number.
2. -i, --input: an input file. This is file with text for encryption/decryption
3. -o, --output: an output file. This is file for writing results of encryption/decryption
4. -a, --action: an action encode/decode. Encryption/decryption.

Options -s or --shift and -a or --action are required.
If you didn't enter input and output files, the text for encryption/decryption you can
enter in command line and to get result also in command line.

## Usage example
node caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

node caesar_cli -a encode -s 7

node caesar-cli.js -s 1  -a decode -i input.txt -o output.txt
