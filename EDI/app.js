var xmlhttp = new XMLHttpRequest();
var url = "https://my.api.mockaroo.com/cars.json?key=84a7bd90";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var data_final = JSON.parse(this.responseText);
        gen = data_final.map(function(elem){
            return elem.gender;
        });
    var obj={};
    data_final.forEach(function(item) {
    obj[item.gender]? obj[item.gender]++ : obj[item.gender] = 1;
    
    });
    console.log(obj)
    const keys = Object.keys(obj);
    console.log(keys)
    

        const ctx = document.getElementById('canvas');
        const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: keys,
        datasets: [{
            label: 'Gender',
            data: obj,
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}
}


