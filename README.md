# homework-3
Password Generator

For this project, JavaScript was written to the specifications given in the Develop/Readme.md file. The Assets folder contains an image corresponding to the project goal. The index.html and style.css files were provided, and have been completely unchanged.

<br>
<br>

![image](https://user-images.githubusercontent.com/64618290/88606894-af86a300-d032-11ea-968d-b14821a6f140.png)


The password generator page styling and layout was provided and left unchanged.

<br><br>

A JavaScript function, generatePassword(), was written in order to generate a random password anywhere from 8 to 128 characters in length. Characters can be alphanumeric or special characters, depending on user input. The function first prompts the user for desired parameters. It then populates an array with the appropriate characters. Finally, the function chooses random characters from the array to build the password.

Possible improvements to the program could include further compartmentalization of functions. For example, getting user input, populating the character array, and building a password could all be separate functions. One advantage of creating separate functions is that the compartmentalized functions would be more easily portable to other applications. For now, the program is short enough that the single generatePassword() function is fairly readable, and can still be modified for future use without too much difficulty.

