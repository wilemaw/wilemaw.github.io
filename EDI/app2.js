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
    var obj={}
    data_final.forEach(function(item) {
    obj[item.gender]? obj[item.gender]++ : obj[item.gender] = 1;
    
    });
    console.log(obj)
    const keys = Object.keys(obj);
    const vals = Object.values(obj)
    console.log(keys)
    

        const ctx = document.getElementById('canvas');
        const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: keys,
        datasets: [{
            label: 'Gender',
            data: vals,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
            hoverOffset: 4
        }]
        },
    })
}
}


