const ctx = document.getElementById('myChart').getContext('2d');

// When you click on a farm you will recieve an array of all animals in the form of
// req.body.animals or something similar

//potentisl info recived to calculate data with 

// {
// 	"id": 1,
// 	"name": "Lukes Farm",
// 	"description": "Has chickens and cats",
// 	"user_id": 4,
// 	"animals": [
// 		{
// 			"id": 1,
// 			"type": "cow",
// 			"name": "Cowboy",
// 			"breed": "Highland Cattle",
// 			"farm_id": 1,
// 			"food_organic": "150.00",
// 			"food_manufactured": "100.00",
// 			"output": "meat"
// 		},
// 		{
// 			"id": 5,
// 			"type": "cow",
// 			"name": "Sky",
// 			"breed": "Milk cow",
// 			"farm_id": 1,
// 			"food_organic": "150.00",
// 			"food_manufactured": "100.00",
// 			"output": "milk"
// 		},

    // 			"id": 5,
    // 			"type": "chicken",
    // 			"name": "Sky",
    // 			"breed": "egg chicken",
    // 			"farm_id": 1,
    // 			"food_organic": "50.00",
    // 			"food_manufactured": "30.00",
    // 			"output": "eggs"
    // 		}
// 	]
// }
// need to take this and graph Animals and cost
// Would be nice to total cows and chickens and display the graph of total cost per type of animal
//on click of farm name needs to load this chart and list animals
// on click redirects to specific farm page user/farm/:id
// this route fetches to api below
// so hit route api/farms/:id/animal
// 



// resize will have chart fit to container
// mychart.resize()

// function addData(chart, label, data){
//     chart.data.labels.push(label);
//     chart.data.datasets.array.forEach(dataset => {
//         dataset.data.push(data)
//     });
//     chart.update();
// };
// function removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop();
//     });
//     chart.update();
// };
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
// var organicFood =[];
// var manuFood = [];
// var animalArr =[];
var animalcounterORG = {};
var animalcounterManu = {};

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
console.log(animalcounterORG)
console.log(animalcounterManu)
