// Closures
// Encapsulates and maintains variable state for the object of the function.
// https://jsfiddle.net/mikeferrari/km93rkj8/3/

let beer = function() {
  let beer = '';
  
  return {
    setBeer(brand) {
        beer = brand;
      },
      getBeer() {
        return beer;
      }
  }
};

let mybeer = beer();

mybeer.setBeer('Weihenstephaner')
console.log(
mybeer.getBeer()
)
