function exportData() {
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("thobaymautable");

  /* Declaring array variable */
  var rows = [];

  //iterate through rows of table
  for (var i = 0, row; row = table.rows[i]; i++) {
    //rows would be accessed using the "row" variable assigned in the for loop
    //Get each cell value/column from the row
    column1 = sanitize(row.cells[0].innerText);
    column2 = sanitize(row.cells[1].innerText);
    column3 = sanitize(row.cells[2].innerText);
    column4 = sanitize(row.cells[3].innerText);
    column5 = sanitize(row.cells[4].innerText);

    /* add a new records in the array */
    rows.push(
      [
        column1,
        column2,
        column3,
        column4,
        column5
      ]
    );

  }
  csvContent = "data:text/csv;charset=utf-8,";
  /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
  rows.forEach(function (rowArray) {
    row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  /* create a hidden <a> DOM node and set its download attribute */
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Stock_Price_Report.csv");
  document.body.appendChild(link);
  /* download the data file named "Stock_Price_Report.csv" */
  link.click();
}

function sanitize(str) {
  return convertCommaNumberToNumber(str);
}

function convertCommaNumberToNumber(str) {
  var pattern = /^[0-9,]*$/g;
  if (pattern.test(str)) {
    return str.split(',').join('');
  }

  return str;
}
