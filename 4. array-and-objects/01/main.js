var myPenguin = {
    character_name : "penguins",
    origin : "penguin island",
    author : "Anatole France"
};

myPenguin.favoriteFoods = ["fish" , "krill" , "shrimp"] ;


console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push("snal");

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = "pineapples";

var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] ; 

for(let i=0 ;i<myPenguin.favoriteFoods.length ; i++)
{
      console.log(myPenguin.favoriteFoods[i]);
}




