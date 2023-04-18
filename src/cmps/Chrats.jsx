import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export function Charts({ data }) {
  return (
    <section className='chars-container'>
        <h3 className='chart-h3' htmlFor="">BTC price: </h3>
      <Sparklines data={data.values.map((test) => test.y)}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </section>
  )
}
