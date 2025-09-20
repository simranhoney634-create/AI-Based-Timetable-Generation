function exportCSV() {
  let table = document.getElementById("timetable");
  let rows = [];
  for (let i = 0; i < table.rows.length; i++) {
    let cells = table.rows[i].cells;
    let row = [];
    for (let j = 0; j < cells.length; j++) {
      row.push(cells[j].innerText);
    }
    rows.push(row.join(","));
  }
  let csvContent = rows.join("\n");
  let blob = new Blob([csvContent], { type: "text/csv" });
  let url = window.URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "timetable.csv");
  a.click();
}
function generateTimetable() {
  alert("AI timetable generated (demo).");
}
