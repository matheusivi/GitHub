import ORM from './orm_Mestre.js'

class Animal extends ORM{
    constructor(){
        super()
    }
}

const animal1 = new Animal()
animal1.criar(1, { animal:'cachorro'})
console.log(animal1.listarMemoria())

