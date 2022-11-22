const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function double(itemsObject) {
  return itemsObject.map((value) => {
    return { quantity: value.quantity * 2, price: value.price * 2 };
  });
}

function filter(itemsObject) {
  return itemsObject.filter((value) => {
    return value.quantity > 2 && value.price > 300;
  });
}

function totalValue(itemsObject) {
  return itemsObject.reduce((total, value) => {
    return (total += value.quantity * value.price);
  }, 0);
}

console.log(double(itemsObject));
console.log(filter(itemsObject));
console.log(totalValue(itemsObject));

//---------------------------------------
const string = ` Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return
The Sum Of  All The Elements In  An Array  `;

function format(str) {
  return (
    str
      //replace the non-alphabet characters
      .replace(/[^a-zA-Z ]/g, " ")
      .split(" ")
      .filter((value) => value != "")
      .join(" ")
      .toLowerCase()
  );
}

console.log(format(string));

//---------------------------------------
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function merge(first, second) {
  //uuid is unique
  //Not change the original arr
  //double pointer (traditional way)
  let ptr1 = 0,
    ptr2 = 0;
  first.sort((a, b) => a.uuid - b.uuid);
  second.sort((a, b) => a.uuid - b.uuid);
  let res = [];
  while (ptr1 < first.length && ptr2 < second.length) {
    let temp;
    if (first[ptr1].uuid == second[ptr2].uuid) {
      temp = {
        uuid: first[ptr1].uuid,
        name: first[ptr1].name,
        role: second[ptr2].role,
      };
      ptr1++, ptr2++;
    } else if (first[ptr1].uuid < second[ptr2].uuid) {
      temp = { uuid: first[ptr1].uuid, name: first[ptr1].name, role: null };
      ptr1++;
    } else {
      temp = { uuid: second[ptr1].uuid, name: null, role: second[ptr2].role };
      ptr2++;
    }
    res.push(temp);
  }

  while (ptr1 < first.length) {
    let temp = {
      uuid: first[ptr1].uuid,
      name: first[ptr1].name,
      role: null,
    };
    res.push(temp);
    ptr1++;
  }

  while (ptr2 < second.length) {
    let temp = {
      uuid: second[ptr1].uuid,
      name: null,
      role: second[ptr1].role,
    };
    res.push(temp);
    ptr2++;
  }
  return res;
}

console.log(merge(first, second));
