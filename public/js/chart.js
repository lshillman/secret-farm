const animals= [
    {
        "id": 1,
        "type": "cow",
        "name": "Cowboy",
        "breed": "Highland Cattle",
        "farm_id": 1,
        "food_organic": "150.00",
        "food_manufactured": "100.00",
        "output": "meat"
    },
    {
        "id": 5,
        "type": "cow",
        "name": "Sky",
        "breed": "Milk cow",
        "farm_id": 1,
        "food_organic": "150.00",
        "food_manufactured": "100.00",
        "output": "milk"
    },
    {
        "id": 6,
        "type": "cow",
        "name": "doby",
        "breed": "Milk cow",
        "farm_id": 1,
        "food_organic": "150.00",
        "food_manufactured": "100.00",
        "output": "milk"
    },
    {
        "id": 7,
        "type": "cow",
        "name": "velma",
        "breed": "Milk cow",
        "farm_id": 1,
        "food_organic": "150.00",
        "food_manufactured": "100.00",
        "output": "milk"
    },
    {
        "id": 8,
        "type": "chicken",
        "name": "raisin",
        "breed": "egg chicken",
        "farm_id": 1,
        "food_organic": "50.00",
        "food_manufactured": "20.00",
        "output": "egg"
    },
    {
        "id": 9,
        "type": "cow",
        "name": "grape",
        "breed": "milk",
        "farm_id": 1,
        "food_organic": "150.00",
        "food_manufactured": "100.00",
        "output": "egg"
    },
    {
        "id": 10,
        "type": "chicken",
        "name": "peel",
        "breed": "egg chicken",
        "farm_id": 1,
        "food_organic": "50.00",
        "food_manufactured": "29.99",
        "output": "egg"
    }
];

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


const ctx = document.getElementById('notAnimal').getContext('2d');
let titleArray = [];
let manuValues = [];
let orgValues = [];
for(let key in animalcounterORG){
    titleArray.push(key);
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
            data: orgValues
          },{
            label: 'Manufactured Food Cost',
            data: manuValues
          }
        ]
    },
   
})
