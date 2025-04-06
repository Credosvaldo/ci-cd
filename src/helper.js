const options = [
  "Abaixo do peso",
  "Peso normal",
  "Sobrepeso",
  "Obesidade grau I",
  "Obesidade grau II",
  "Obesidade grau III",
];

const getOptionByValue = (value) => {
  if (value < 18.5) {
    return options[0];
  }

  if (value < 24.9) {
    return options[1];
  }

  if (value < 29.9) {
    return options[2];
  }

  if (value < 34.9) {
    return options[3];
  }

  if (value < 39.9) {
    return options[4];
  }

  return options[5];
};

export const calculate = (weight, height) => {
  const value = weight / (height * height);
  const option = getOptionByValue(value);
  return option
};
