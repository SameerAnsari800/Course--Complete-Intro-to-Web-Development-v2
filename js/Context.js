const me = {
    Name: {
        fisrt: "sameer",
        last: "ansari"
    },
    location: {
        streetNumber: 500,
        street: "siwanchi gate",
        city: "jodhpur",
        state: "Rajasthan",
        country: "India",
   
        getCityAndState() {
            return `${this.city},${this.state}`
       }
    },
    getAddress() {
        return `${this.Name.fisrt} ${this.Name.last} ${this.location.streetNumber} ${this.location.street} ${this.location.city} ${this.location.state} ${this.location.country}`;
    }
};
console.log(me.getAddress());
console.log(me.location.getCityAndState());
