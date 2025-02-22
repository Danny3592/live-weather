export function myLog(e) {
  const key = Object.keys(e)[0];
  const value = Object.values(e)[0];
  console.log(`${key} = `, value);
}
