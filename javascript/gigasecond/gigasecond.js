export function gigasecond(birthdate) {
  return new Date(birthdate.getTime() + Math.pow(10, 12)); // 1 giga seconds == 1 peta milliseconds
}
