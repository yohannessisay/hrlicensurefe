const XLSX = require("xlsx");

function transformSheets(sheets) {
  let content = [];
  let content1 = [];
  let tmplist = [];

  for (let key in sheets) {
    tmplist.push(XLSX.utils.sheet_to_json(sheets[key]).length);
    content1.push(XLSX.utils.sheet_to_json(sheets[key]));
  }

  // Instead of deleting rows, you might want to filter them if needed
  content1[0] = content1[0].filter((item) => item !== undefined);

  let maxLength = Math.max(...tmplist);

  // Perform row and column conversion
  for (let y = 0; y < maxLength; y++) {
    content.push({});
    for (let x = 0; x < tmplist.length; x++) {
      try {
        const rowData = content1[x][y] || {};
        if (!("__EMPTY_4" in rowData)) {
          rowData["__EMPTY_4"] = "";
        }
        Object.assign(content[y], rowData);
      } catch (error) {
        content[y]["__EMPTY_4"] = "Empty";
      }
    }
  }

  content.unshift({});
  for (let key in sheets) {
    content[0][key] = key;
  }

  return content;
}

export { transformSheets as default };
