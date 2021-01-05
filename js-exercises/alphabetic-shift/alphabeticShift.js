const alphabeticShift = input => {
  const result = [];
  for (const letter of input) {
    result.push(String.fromCharCode(letter.charCodeAt(0) + 1));
  }
  return result.join('');
};

export { alphabeticShift };