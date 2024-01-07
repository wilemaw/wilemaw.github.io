fetch("https://my.api.mockaroo.com/cars.json?key=84a7bd90").then((data) => {
    return data.json();
}).then((completedata) => {
    let data1="";
    completedata.map((values)=>{
        data1+=`<table id = "table_row">
        <tr>
        <td>${values.id}</td>
        <td>${values.first_name}</td>
        <td>${values.last_name}</td>
        <td>${values.email}</td>
        <td>${values.gender}</td>
        <td>${values.Factory}</td>
        <td>${values.Model}</td>
        <td>${values.Year}</td>
        <td>${values.VIN}</td>
        </tr>
        </table>`
        
    });
    document.getElementById("table_row").innerHTML=data1;
    
 })