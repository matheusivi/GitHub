import ORM from './orm_Mestre.js'

class Pessoa extends ORM{
   constructor(){
    super()
   }
}

const pessoa1 = new Pessoa()
pessoa1.criar(1 , { nome: 'matheus'})
pessoa1.up(1, {nome: 'Pedro'})
pessoa1.criar(2, {nome: 'João'})
pessoa1.criar(3, {nome: 'vanessa'})
console.log(pessoa1.listarMemoria())




