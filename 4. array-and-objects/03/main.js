var myPenguin = {
    name : "penguins",
    origin : "penguin island",
    author : "Anatole France",
    canFly: false,
    sayHello: function () {
      console.log("reettik");
    }
};

myPenguin.outfit= {
    hat : "Baseball Cap", 
    shirt: "Hawaiian shirt",
    pants: "Cargo shorts",
    shoes:  "flip-flops"
};

var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch";

myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;

for(let clothes in  myPenguin.outfit)
{
    console.log(myPenguin.outfit[clothes]);
}
