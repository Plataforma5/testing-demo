function add(...values) {
  let suma = 0;

  values.forEach((num) => {
    suma += num;
  });

  return suma;
}

module.exports = add;
