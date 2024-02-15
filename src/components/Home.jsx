import React from 'react'
import { Banner } from './Banner'
import { Products } from './Products'
import { Benefits } from './Benefits'
import { Special } from './Special'
import { Instagram } from './Instagram'

export const Home = () => {
  
  return (
    <main>
        <Banner />
        <Products />
        <Special />
        <Benefits />
        <Instagram />
    </main>
  )
}
