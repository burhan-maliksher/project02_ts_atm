#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// atm main function
async function atm() {
    const title = chalkAnimation.glitch(`'''''''''Welcome to M.B ATM'''''''''`);
    await animationTimer;
    title.stop();
    console.log(chalk.bgGrey(`                        Autor:'M.B'`));
    await userCredentials();
}
// animation timer
const animationTimer = new Promise((resolve) => {
    setTimeout(resolve, 2000);
});
// calling main function
atm();
// getting credentials from user and showing atm facilities
async function userCredentials() {
    const user = await inquirer.prompt([{
            type: "string",
            name: "userId",
            message: " Please Enter your User ID ",
            validate: userIdValidator
        },
        {
            type: "password",
            name: "userPassword",
            message: " Please Enter your 4 digit password ",
            validate: userPswdValidator
        },
        {
            type: "list",
            name: "atmFacilities",
            choices: ["Fast Cash", "Cash Withdraw", "Balance Inquirery", "Exit"]
        }
    ]);
    let userBalanceRandomly = Math.floor(Math.random() * 10000);
    switch (user.atmFacilities) {
        case "Fast Cash":
            const fastCash = await inquirer.prompt([{
                    type: "list",
                    name: "Fast_cash",
                    choices: [1000, 2000, 3000, 5000, 10000, 20000]
                }]);
            let fastcash = fastCash.Fast_cash;
            if (fastcash > userBalanceRandomly) {
                console.log(chalk.bgRed('your balance is low'));
            }
            else {
                switch (fastcash) {
                    case 1000:
                        userBalanceRandomly = userBalanceRandomly - fastcash;
                        console.log(chalk.bgBlue(`you have withdrawl: ${fastcash} Rs`));
                        console.log(chalk.bgBlue(`your remaning Balance: ${userBalanceRandomly} Rs`));
                        console.log(chalk.bgBlue("Thank you for using our Services"));
                        break;
                    case 2000:
                        userBalanceRandomly = userBalanceRandomly - fastcash;
                        console.log(chalk.bgBlue(`you have withdrawl: ${fastcash} Rs`));
                        console.log(chalk.bgBlue(`your remaning Balance: ${userBalanceRandomly} Rs`));
                        console.log(chalk.bgBlue("Thank you for using our Services"));
                        break;
                    case 3000:
                        userBalanceRandomly = userBalanceRandomly - fastcash;
                        console.log(chalk.bgBlue(`you have withdrawl: ${fastcash} Rs`));
                        console.log(chalk.bgBlue(`your remaning Balance: ${userBalanceRandomly} Rs`));
                        console.log(chalk.bgBlue("Thank you for using our Services"));
                        break;
                    case 5000:
                        userBalanceRandomly = userBalanceRandomly - fastcash;
                        console.log(chalk.bgBlue(`you have withdrawl: ${fastcash} Rs`));
                        console.log(chalk.bgBlue(`your remaning Balance: ${userBalanceRandomly} Rs`));
                        console.log(chalk.bgBlue("Thank you for using our Services"));
                        break;
                    case 10000:
                        userBalanceRandomly = userBalanceRandomly - fastcash;
                        console.log(chalk.bgBlue(`you have withdrawl: ${fastcash} Rs`));
                        console.log(chalk.bgBlue(`your remaning Balance: ${userBalanceRandomly} Rs`));
                        console.log(chalk.bgBlue("Thank you for using our Services"));
                        break;
                    case 20000:
                        userBalanceRandomly = userBalanceRandomly - fastcash;
                        console.log(chalk.bgBlue(`you have withdrawl: ${fastcash} Rs`));
                        console.log(chalk.bgBlue(`your remaning Balance: ${userBalanceRandomly} Rs`));
                        console.log(chalk.bgBlue("Thank you for using our Services"));
                        break;
                }
            }
            break;
        case "Cash Withdraw":
            const cashWithdraw = await inquirer.prompt([{
                    type: "number",
                    name: "Cash_withdraw",
                    message: "please enter amount to withdraw"
                }]);
            let withdraw = cashWithdraw.Cash_withdraw;
            if (withdraw > userBalanceRandomly) {
                console.log(chalk.bgRed('your balance is low'));
            }
            else {
                userBalanceRandomly = userBalanceRandomly - withdraw;
                console.log(chalk.bgBlue(`you have withdrawl: ${withdraw} Rs`));
                console.log(chalk.bgBlue(`your remaning Balance: ${userBalanceRandomly} Rs`));
                console.log(chalk.bgBlue("Thank you for using our Services"));
            }
            break;
        case "Balance Inquirery":
            console.log(chalk.bgBlue(`your current balance: ${userBalanceRandomly} Rs`));
            console.log(chalk.bgBlue("Thank you for using our Services"));
            break;
        case "Exit":
            console.log(chalk.bgBlue("Thank you for using our Services"));
            break;
    }
}
// user id validator
function userIdValidator(input) {
    let inputCheck = parseInt(input);
    if (!isNaN(inputCheck) || (input.length < 6) || (input.length > 11)) {
        if (!isNaN(inputCheck)) {
            const error = chalk.red(`please Enter Alphabets only`);
            return error;
        }
        else if (input.length < 6) {
            const error = chalk.red(`Please Enter minimum 6 Digits`);
            return error;
        }
        else {
            const error = chalk.red(`Maximum 11 Digits are allowed`);
            return error;
        }
    }
    return true;
}
// password validator
function userPswdValidator(input) {
    let inputToString = input.toString();
    let inputLen = inputToString.length;
    if (isNaN(input) || (inputLen < 4) || (inputLen > 4)) {
        if (isNaN(input)) {
            const error = chalk.red(`please Enter Number only`);
            return error;
        }
        else if (inputLen < 4) {
            const error = chalk.red(`Please Enter 4 Digits only`);
            return error;
        }
        else {
            const error = chalk.red(`Please Enter 4 Digits only`);
            return error;
        }
    }
    return true;
}