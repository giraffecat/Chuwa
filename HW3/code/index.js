/*
Question 1
Given the following array and implement the table dynamically
*/
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function generateTable(tableInfo) {
  const head = tableInfo.tableHeader;
  const content = tableInfo.tableContent;
  const tbl = document.createElement("table");
  const thead = document.createElement("tr");
  // tableHeader
  for (let i = 0; i < head.length; i++) {
    const cell = document.createElement("th");
    const cellText = document.createTextNode(`${head[i]}`);
    cell.appendChild(cellText);
    thead.appendChild(cell);
  }
  tbl.appendChild(thead);
  //tableContent
  for (let i = 0; i < content.length; i++) {
    const row = document.createElement("tr");
    for (let item in content[i]) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`${content[i][item]}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }
  const tableNode = document.querySelector(".table");
  tableNode.appendChild(tbl);
}

generateTable(tableInfo);

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
function generateOl(list) {
  const ol = document.createElement("ol");
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    const liText = document.createTextNode(`${list[i]}`);
    li.appendChild(liText);
    ol.appendChild(li);
  }
  const listNode = document.querySelector(".list");
  listNode.appendChild(ol);
}

function generateUl(list) {
  const ol = document.createElement("ul");
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    const liText = document.createTextNode(`${list[i]}`);
    li.appendChild(liText);
    ol.appendChild(li);
  }
  const listNode = document.querySelector(".list");
  listNode.appendChild(ol);
}

generateOl(list);
generateUl(list);
/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function generateDropDownList(dropDownList) {
  const select = document.createElement("select");
  for (let i = 0; i < dropDownList.length; i++) {
    const option = document.createElement("option");
    const optionText = document.createTextNode(`${dropDownList[i].content}`);
    option.setAttribute("value", `${dropDownList[i].value}`);
    option.appendChild(optionText);
    select.appendChild(option);
  }
  const selectNode = document.querySelector(".select");
  selectNode.appendChild(select);
}

generateDropDownList(dropDownList);
