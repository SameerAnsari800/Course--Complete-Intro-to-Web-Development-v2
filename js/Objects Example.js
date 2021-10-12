const person1 = {
    Name:"Brian Holt",
    ageRange:"25-35"
};
const person2 = {
    Name:"Jack",
    ageRange:"65-75"
};
function suggestMusic(person)
{
    if (person.ageRange === "25-35")
    {
        console.log("we think you all like draft pank");
    }
    else if(person.ageRange === "65-75")
    {
        console.log("you are obviously going t olike jonuy");
    } else {
        console.log("un,maybe try david bowie");
        
    }
}
suggestMusic(person1);
suggestMusic(person2);

const dog = {
    Name: "dog",
    Speak() {
        console.log("wroof wroff");
    }
};
dog.Speak();
