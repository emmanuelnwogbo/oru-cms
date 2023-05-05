const doubleQuoteCsvtoJson = async (csv) => {
    const delimiter = ',';
    const quote = '"';
    let lines = csv.split('\n');
    let headers = lines[0].split(delimiter);
    let data = [];
  
    // Loop over rows (excluding the header row)
    for (let i = 1; i < lines.length; i++) {
      let fields = lines[i].split(delimiter);
      let record = {};
  
      // Loop over fields in the current row
      for (let j = 0; j < fields.length; j++) {
        let value = fields[j];
  
        // If the value is enclosed in quotes, remove them
        if (value.startsWith(quote) && value.endsWith(quote)) {
          value = value.slice(1, -1);
        }
  
        // Add the field to the current record object
        record[headers[j]] = value;
      }
  
      // Add the current record object to the data array
      data.push(record);
    }
  
    return data;
  }

  export default doubleQuoteCsvtoJson;
  