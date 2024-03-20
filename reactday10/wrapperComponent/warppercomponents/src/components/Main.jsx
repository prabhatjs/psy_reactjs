import React from 'react'
import Card from './Card'
import TextData from './TextData'
import MapData from './MapData'
import HeadingData from './HeadingData'

function Main() {
  return (
    <div>
    {/* wrapper is same    */}
     <Card innerComponent={<HeadingData/> }></Card>
        <Card innerComponent={<TextData/> }></Card>
        <Card innerComponent={<MapData/> }></Card>
    </div>
  )
}

export default Main