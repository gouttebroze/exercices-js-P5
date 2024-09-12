function printNumbers(n) { 
  let print = "";
  for (let i = 0; i < n; i++) {
    print = print + (i === 0 ? "" : " ") + (i + 1).toString();  
  }
  return print;
}

export default printNumbers
