/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "alice", age: "22", profession: "designer" },
      { id: 5, name: "bob", age: "23", profession: "manager" },
      { id: 6, name: "charlie", age: "21", profession: "tester" },
    ];
    const combinedArray = arr.concat(newArray);
    console.log(combinedArray);
  }
  