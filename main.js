//7. Income tax: Create a function that calculates income tax following the GovUk rules.
/* Information to take into account:
Entre 0 y 12,570        0%
Entre 12,571 y 50,270   20%
Entre 50,271 y 125,140  40%
Over 125,141            45%
*/
//import { lcm } from './utility.js'; // Add the name of the fucntion created
import inquirer from 'inquirer';

const validateNumber = input => {
  if (input >= 1) {
    return true;
  } else {
    return 'Error. Both numbers have to be greater than or equal to 0.';
  }
};

let firstInput = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message:
      'Enter your income before tax:',
    validate: validateNumber
  }
]);

console.log("firsInput is:", firstInput);