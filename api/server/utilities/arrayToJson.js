const arrayToJson = async (arr) => {
  const headers = arr[0];
  const data = arr.slice(1);
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      if (headers[j] !== '-1') {
        obj[headers[j]] = data[i][j];
      } else {
        const name = data[i][j];
        const prevHeader = headers[j - 1];
        const prevValue = obj[prevHeader];
        obj[prevHeader] = `${prevValue} (${name})`;
      }
    }

    result.push(obj);
  }

  return result;
}

export default arrayToJson;