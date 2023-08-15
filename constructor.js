function Car(name,marka) {
    this.name=name;
    this.marka=marka;
    this.start = function(){
        console.log(`${this.name} started`);
    }
    console.log(this);
}

const car1 = new Car("Honda","CRV")
const car2 = new Car("BMW","F-30")

car2.start()




// const car1 = {
//     name: "Honda",
//     marka: 'CRV',
// };

// const car2 ={
//     name:"Hunday",
//     marka:"Sonata",
// }
