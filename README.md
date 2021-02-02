# Password Generator

![image](https://user-images.githubusercontent.com/64618290/98434213-8be7e580-2082-11eb-93a1-88a46c36dd32.png)
## Description
This app, viewable <a href='https://koldenblue.github.io/password-generator/'>here</a>, generates a random password anywhere from 8 to 128 characters in length. Characters can be alphanumeric or special characters, depending on user input. The app uses the prompt feature of web browsers to prompt the user for desired parameters. An array of ASCII characters is populated, with the character set being dependent upon user input. Finally, the app chooses random characters from the array to build the password.

## Usage
Simply visit the <a href='https://koldenblue.github.io/password-generator/'>deployed website</a>, click the "Generate Password" button, and answer the prompts.

## Discussion and Potential Improvements
The app is fairly basic in terms of interface. However, given the self-contained nature of the web page, it could be easily incorporated into a larger interface. Possible improvements to the actual code could include further compartmentalization of functions. For example, getting user input, populating the character array, and building a password could all be separate functions. More compartmentalized functions would be further increase portability to other applications. For now, the program is short enough that the single generatePassword() function can be modified for future use without much difficulty.

