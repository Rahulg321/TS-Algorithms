function addBinary(a: string, b: string): string {
  let result = [];
  let carry = 0;

  let maxLength = Math.max(a.length, b.length);

  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    let bitA = Number(a[i]);
    let bitB = Number(b[i]);

    let total = bitA + bitB + carry;

    carry = Math.floor(total / 2);
    let resultBit = total % 2;

    result.push(resultBit);
  }

  if (carry) {
    result.push(carry);
  }

  result.reverse();

  return result.join("");
}
