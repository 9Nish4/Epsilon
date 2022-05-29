let sortDirection =false;
var cookies = [
    { "name": "Chocolate Chip", "price": "$2.49", "category": "Standard" },
    { "name": "Sugar", "price": "$1.79", "category": "Standard" },
    { "name": "Snickerdoodle", "price": "$2.49", "category": "Standard" },
    { "name": "Oatmeal Raisin", "price": "$2.99", "category": "Standard" },
    { "name": "Peanut Butter", "price": "$2.99", "category": "Standard" },
    { "name": "White Chocolate Macadamia", "price": "$3.99", "category": "Premium" },
    { "name": "Red Velvet", "price": "$3.49", "category": "Premium" },
    { "name": "Black and White", "price": "$3.49", "category": "Premium" },
    { "name": "Triple Chocolate", "price": "$3.99", "category": "Premium" },
    { "name": "White Chocolate Coconut Divine", "price": "$5.99", "category": "Signature" },
    { "name": "Dark Chocolate Pistachio Sea Salt", "price": "$5.49", "category": "Signature" },
    { "name": "Brown Butter Bourbon Spice", "price": "$5.49", "category": "Signature" },
    { "name": "Bacon Chocolate Chip", "price": "$5.99", "category": "Signature" },
]
 
window.onload = () =>{
    formTable(cookies);
}

function formTable(cookies){
    var table= document.getElementById("details");
    for(let i=0;i<cookies.length;i++){
        var row =`
            <td>${cookies[i].name}</td>
            <td>${cookies[i].price}</td>
            <td>${cookies[i].category}</td>
           
        
        `
        table.innerHTML += row;
    }
}

function sortColumn(columnName){
    const dataType =typeof cookies[0][columnName];
    sortDirection =!sortDirection;

   
switch(dataType) {
  case 'number':
  sortNumberColumn(sortDirection, columnName);
  break;
  case 'string':
  sortTextColumn(sortDirection, columnName);
  break;
 }
 formTable(cookies);
}
function sortNumberColumn(sort, columnName){
    cookies= cookies.sort((p1, p2) =>{
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName];
    }); 
}




function sortTextColumn(sort, columnName) {
    cookies = cookies.sort((p1, p2) => {
  return sort ? (p1[columnName] > p2[columnName]) - (p1[columnName] < p2[columnName]) : (p2[columnName] > p1[columnName]) - (p2[columnName] < p1[columnName])
 });
}

