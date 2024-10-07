import React from 'react'
import Header from './Header'
import CardPizza from './cardpizza'
import { pizzas } from '../../assets/js/pizzas'

export default function Home() {
  return (
    <div>
<Header/>

<div className="home">
      <h1>Nuestras Pizzas</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            img={pizza.img}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
        ))}
      </div>
    </div>

    </div>
  )
}
