import { Audi } from './cars/Audi.js'
import { Bmw } from './cars/Bmw.js'
import { Mb } from './cars/Mb.js'
import { Harley } from './moto/Harley.js'
import { Kawasaki } from './moto/Kawasaki.js'
import { Suzuki } from './moto/Suzuki.js'
import { Iveco } from './truck/Iveco.js'

const trakker = new Iveco('Iveco Trakker', 'Brown')


const fxdr = new Harley('Harley Davidson f114 FXDR', 'Black')
const ninja = new Kawasaki('Kawasaki Ninja', 'Green')
const hayabusa = new Suzuki('Suzuki Hayabusa', 'Black')



const quattro = new Audi('Audi A4', 'Black')
const kregzde = new Bmw('Bmw 325', 'Purple')
const krokodilas = new Mb('Mercedes Benz', 'Grey')

quattro.discription()
quattro.speed()

kregzde.discription()
kregzde.speed()

krokodilas.discription()
krokodilas.speed()


fxdr.discription()
fxdr.speed()

ninja.discription()
ninja.speed()

hayabusa.discription()
hayabusa.speed()


trakker.discription()
trakker.speed()

