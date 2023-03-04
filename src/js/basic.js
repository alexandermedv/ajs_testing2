export default function health(person) {
  let result = '';

  if (parseInt(person['health']) > 50) {
    result = 'healthy';
  } else if (parseInt(person['health']) < 15) {
    result = 'critical';
  } else {
    result = 'wounded';
  }

  return result;
}
