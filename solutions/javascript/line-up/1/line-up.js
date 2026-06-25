//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {
  let suffix = "";
  const lastTwo = position % 100;
  const rest = position % 10;
  if (lastTwo >= 11 && lastTwo <= 13) {
    suffix = "th";
  } else if (rest === 1 && position !== 11) {
    suffix = "st";
  } else if (rest === 2 && position !== 12) {
    console.log("rest is: " + rest);
    suffix = "nd";
  } else if (rest === 3 && position !== 13) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return (
    name +
    ", you are the " +
    position +
    suffix +
    " customer we serve today. Thank you!"
  );
};

format("Gustavo", 112);
