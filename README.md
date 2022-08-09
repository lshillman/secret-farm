# OnlyFarms: Simple Farm Modeling & Budgeting

 [![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

## Check out the deployed app on [heroku](https://onlyfarms.herokuapp.com/)

OnlyFarms is a simple, user-friendly, and *free*  tool for modeling your farm and viewing the cost differences between organic and manufactured livestock feed.

---
**Table of Contents**
* [Technologies](#technologies)
* [Installation](#installation)
* [User stories](#user-stories)
* [CSS framework](#css-framework)
* [UX wireframes](#ux-wireframes)
* [Credits](#creditscontact)
* [License](#license)
---


## Technologies

Aside from vanilla HTML, CSS, and JS, OnlyFarms uses the following technologies:

| Tool | Purpose |
|------|---------|
| [Axure RP](https://www.axure.com/) | Rapid UX prototyping
| [Skeleton](http://getskeleton.com/) | CSS ~~framework~~ "boilerplate"
| [Chart.js](https://www.chartjs.org/) | Pretty graphs
| [Node.js](https://nodejs.org/en/) | back-end JavaScript runtime environment
| [Express.js](https://expressjs.com/) | web application framework
| [MySQL](https://www.mysql.com/) | database
| [Sequelize](https://www.npmjs.com/package/sequelize) | ORM
| [Express Handlebars](https://www.npmjs.com/package/express-handlebars) | semantic templating
| [Express Session](https://www.npmjs.com/package/express-session) | manage sessions and cookies
| [Bcrypt](https://www.npmjs.com/package/bcrypt) | password hashing
| [dotenv](https://www.npmjs.com/package/dotenv) | store environment variables


## Installation

No installation needed! Simply go to the [deployed app on heroku](https://onlyfarms.herokuapp.com).

Alternatively, clone this repo and run `npm install` to install all dependencies. Create the required database by logging into mysql and running `source schema.sql`. Create a file called .env for your environment variables `DB_NAME`, `DB_USER`, and `DB_PASSWORD` and set them to the apprpriate values. After that, `npm run seed` will create example farms and animals for you. Run `npm start` and go to your local root. You should now be able to create an account or log into one of the seed users:

![demo of logging into OnlyFarms](./docs/readme_assets/OnlyFarms.gif)

## User stories

OnlyFarms is targeted at people who manage small farm budgets, on a scale where manually entering every animal on the farm isn't egregious. The following are a selection of important user stories for your reading delight; you can see all of them on the [project board](https://github.com/users/lshillman/projects/2).

### As a user, I want to create an account so that I can use OnlyFarms to model my farm and make a budget.

The JS governing account creation:

````javascript
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
````

### As a new user, I want to create a farm so that I can populate it with animals
details

````javascript
// create a farm
router.post('/', async (req, res) => {
    try {
      const dbFarmData = await Farm.create({
        name: req.body.name,
        description: req.body.description,
        user_id: req.session.userId,
      });  
        res.status(200).json(dbFarmData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});
````

### As a user, I want to enter my farm animals so that I can keep track of their associated costs

The api route that creates an animal:

````javascript
// create an animal
router.post("/", async (req, res) => {
  try {
    const dbAnimalData = await Animal.create({
      type: req.body.type,
      name: req.body.name,
      breed: req.body.breed,
      farm_id: req.body.farm_id,
      food_organic: req.body.food_organic,
      food_manufactured: req.body.food_manufactured,
    });
    res.status(200).json(dbAnimalData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
````

### As a user, I want to see an easily-digestible visualization of my animals' costs.

This function takes in the json response of all animal information and breaks it into objects with keys of animal type and values of food cost, then breaks each of these into arrays for Chart.js to interpret properly and display on the page.

````javascript
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
````

## CSS framework

Because we were shooting for a very particular look and feel, We started with the [Skeleton](http://getskeleton.com/) ~~framework~~ boilerplate, which promised to do the heavy lifting of making our pages responsive while also getting out of our way and allowing us to mostly build our own framework around it.


## UX wireframes

Main article: [design docs](https://github.com/lshillman/secret-farm/tree/main/docs#design-artifacts)

We started out with a collaborative wireframe in Google Slides, and then translated that into a robust Axure prototype. This was extremely useful in helping us concentrate on just the development, when the time came.


## Credits/contact

OnlyFarms was built with love by
* [Luke](https://github.com/lshillman)
* [Matt](https://github.com/fiaschettima)
* [Greg](https://github.com/gregmarz)
* [Sufi](https://github.com/sufyaanvaidya)

in August 2022.



## License

OnlyFarms uses the MIT License. Use it as you wish, but you have to redistribute the license and can't hold us liable for anything.
