/* Information to take into account:
Entre 0 y 12,570        0%
Entre 12,571 y 50,270   20%
Entre 50,271 y 125,140  40%
Over 125,141            45%
*/

export function bandSalary(input) {
  if (input >= 125141) {
        return (
      (input - 125141) * 0.55 +
      (125140 - 50270) * 0.6 +
      (50270 - 12570) * 0.8 +
      12570
    );
  } else if (input >= 50270) {
    return (input - 50270) * 0.6 + (50270 - 12570) * 0.8 + 12570;
  } else if (input >= 12570) {
    return (input - 12570) * 0.8 + 12570;
  } else {
    return input;
  }
}
