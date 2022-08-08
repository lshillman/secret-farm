
function makeTheChart(animals){ 
    if(!animals){
        return;
    }
    const ctx = document.getElementById('notAnimal').getContext('2d');
let animalcounterORG = {};
let animalcounterManu = {};
animals.forEach(animal => {
    for(let key in animal){
        if(key ==='type'){     
            if(!(animal[key] in animalcounterManu)){
                animalcounterManu[animal[key]] = (animal.food_manufactured *1);
                animalcounterORG[animal[key]] = (animal.food_organic *1);
            }else{
                animalcounterManu[animal[key]] +=(animal.food_manufactured*1);
                animalcounterORG[animal[key]] += (animal.food_organic *1);
            }
        }
    }
});

let titleArray = [];
let manuValues = [];
let orgValues = [];
for(let key in animalcounterORG){
    titleArray.push(key.toLowerCase());
    orgValues.push(animalcounterORG[key])
}
for(let key in animalcounterManu){
    manuValues.push(animalcounterManu[key])
}
const animalChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: titleArray,
        datasets: 
        [{
            label: 'Organic Food Cost',
            data: orgValues,
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ]
          },{
            label: 'Manufactured Food Cost',
            data: manuValues,
            backgroundColor: [
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                ,
              ]
          }
        ]  
    },
    options:{
        responsive: true,
        maintainAspectRatio: false
    },
})
}

makeTheChart(chartData)
