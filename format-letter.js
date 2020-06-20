function lowerCase(string) {
  return string.toLowerCase();
}

function sentenceCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function camelCase(string) {
  let arr = string.split(" ");
  return (
    lowerCase(arr[0]) +
    arr
      .slice(1)
      .map((letter) => sentenceCase(letter))
      .join("")
  );
}
