import { Vehicle } from '../Vehicle.js'

class Bmw extends Vehicle {
    constructor(make, color) {
        super(make, color)
        this.power = 120,
            this.wheels = 3,
            this.fromZero = 12.3,
            this.totaled = false
    }


}


export { Bmw }