const parseCsvWithQuotes = async (csv) => {
    const delimiter = ',';
    const quote = '"';
    let rows = [];
    let fields = [];
    let insideQuotes = false;
  
    for (let i = 0; i < csv.length; i++) {
      const char = csv[i];
  
      if (char === delimiter && !insideQuotes) {
        fields.push('');
      } else if (char === quote) {
        insideQuotes = !insideQuotes;
      } else if (char === '\n' && !insideQuotes) {
        rows.push(fields);
        fields = [];
      } else {
        fields[fields.length - 1] += char;
      }
    }
  
    rows.push(fields);
  
    return rows;
  }

  export default parseCsvWithQuotes;
  