export function milliseconds(value) {
  return value;
}

export function seconds(value) {
  return 1000 * value;
}

export function minutes(value) {
  return 1000 * 60 * value;
}

export function years(value) {
  return 1000 * 60 * 60 * 24 * 365 * value;
}

export function bettinas(value) {
  const money = 1042000 - 1520; // Comecei com R$ 1.520,00 e agora tenho R$ 1.042.00,00
  const time = years(3); // Comecei com 19 anos e agora tenho 22
  const bettinaAppreciation = money / time;
  return bettinaAppreciation * value; 
}