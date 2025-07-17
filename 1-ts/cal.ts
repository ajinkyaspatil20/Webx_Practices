function calculator( input1: any, input2: any, operator: string ): number | string | never {
  if (typeof input1 !== "number" || typeof input2 !== "number") {
    if ( typeof input1 === "string" && typeof input2 === "string" && operator === "+" ) {
      return input1 + input2;
    } else { 
        throwError(
        "Invalid input types. Both inputs must be numbers or strings."
      );
    }
  }

  switch (operator) {
    case "+":
      return input1 + input2;
    case "-":
      return input1 - input2;
    case "*":
      return input1 * input2;
    case "/":
      if (input2 === 0) {
        throwError("Division by zero is not allowed.");
      }
      return input1 / input2;
    default:
      throwError("Invalid operator. Supported operators are +, -, *, /.");
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

try {
  const result1 = calculator(2, 3, "+");
  console.log("Result 1:", result1);

  const result2 = calculator("Rob", "Stark", "+");
  console.log("Result 2:", result2);

  const result4 = calculator(2, 3, "-");
  console.log("Result 4:", result4);

  const result5 = calculator(2, 3, "*");
  console.log("Result 5:", result5);

  const result6 = calculator(7, 3, "/");
  console.log("Result 6:", result6);

  const result7 = calculator(2, 0, "/");
  console.log("Result 7:", result7);

  const result3 = calculator(1, "2", "*");
  console.log("Result 3:", result3);
} catch (error) {
  console.error("Error:", error.message);
}
