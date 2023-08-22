// ************* FIRST ATTEMPT *****
// let add = document.getElementById("add");

// let remove = document.getElementById("remove");

// let item = document.getElementById("tItem");

// add.addEventListener("click", function () {
//   let input = document.getElementById("input").value;

//   const li = document.createElement("li");

//   const node = document.createTextNode(input);

//   item.append(li, node);
// });

// remove.addEventListener("click", function () {
//   const li = document.createElement("li");

//   item.remove();
// });

let add = document.getElementById("add");
let remove = document.getElementById("remove");
let item = document.getElementById("tItem");

add.addEventListener("click", function () {
  let input = document.getElementById("input").value;

  if (input !== "") {
    const li = document.createElement("li");
    const node = document.createTextNode(input);
    li.appendChild(node);
    item.appendChild(li);
    document.getElementById("input").value = ""; // Clear the input field
  }
});

remove.addEventListener("click", function () {
  const liList = item.getElementsByTagName("li");

  if (liList.length > 0) {
    item.removeChild(liList[liList.length - 1]);
  }
});
