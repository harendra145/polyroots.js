// Sample JSON object with a root
const jsonobj = {
  "x": 4,
  "y": {
    "base": 10,
    "value": "100"  // string representation of number in base 10
  }
};

// Convert string number from base `b` to decimal integer
function convertBaseToDecimal(valueStr, base) {
  return parseInt(valueStr, base);
}

// Extract data
const xi = jsonobj.x;
const b = parseInt(jsonobj.y.base, 10);
const v = jsonobj.y.value;

// Convert root value to decimal
const yi = convertBaseToDecimal(v, b);

// Example arrays of known roots (xValues) and their values (yValues)
// For demonstration, add multiple points. Replace with your actual data.
const xValues = [1, 2, 3, xi];      // roots x-coordinates
const yValues = [2, 3, 5, yi];      // root values converted to decimal

// Point at which you want to evaluate polynomial
const central_value = 2.5;

// Lagrange interpolation function
function li(xValues, yValues, x) {
  const n = xValues.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    let term = yValues[i];
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        term *= (x - xValues[j]) / (xValues[i] - xValues[j]);
      }
    }
    result += term;
  }

  return result;
}

// Evaluate and print interpolated value at central_value
console.log("Interpolated result:", li(xValues, yValues, central_value));
