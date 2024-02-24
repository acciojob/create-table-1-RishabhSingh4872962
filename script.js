const table=document.getElementById("sampleTable");
 
function insert_Row() {
	const tableRow=document.createElement("tr");
	const tableData1=document.createElement("td");
	tableData1.append("New Cell1");
	const tableData2=document.createElement("td");
	tableData2.append("New Cell2");
	tableRow.appendChild(tableData1);
	tableRow.appendChild(tableData2);
	table.appendChild(tableRow)
}
