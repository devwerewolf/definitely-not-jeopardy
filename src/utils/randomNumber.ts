export function randomNumber(min: number = 0, max: number = 2) {
  return Math.floor(Math.random() * max) + min;
}