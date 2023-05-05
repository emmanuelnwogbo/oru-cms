function hasQuotedCsvFormat(csv) {
    const delimiter = ',';
    const quote = '"';
    let lines = csv.split('\n');
  
    // Check if the first line has quoted values
    if (!lines[0].includes(quote)) {
      return false;
    }
  
    // Check if the number of quotes is even in each row
    for (let i = 0; i < lines.length; i++) {
      let numQuotes = lines[i].split(quote).length - 1;
  
      if (numQuotes % 2 !== 0) {
        return false;
      }
    }
  
    // Check if the delimiter appears inside quotes
    for (let i = 0; i < lines.length; i++) {
      let insideQuotes = false;
      let fields = lines[i].split(delimiter);
  
      for (let j = 0; j < fields.length; j++) {
        if (fields[j].startsWith(quote)) {
          insideQuotes = true;
        }
  
        if (fields[j].endsWith(quote)) {
          insideQuotes = false;
        }
  
        if (insideQuotes && fields[j].includes(delimiter)) {
          return false;
        }
      }
    }
  
    return true;
  }

  export default hasQuotedCsvFormat;