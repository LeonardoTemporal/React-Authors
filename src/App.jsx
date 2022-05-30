import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import authors from './json/authors.json'

const arrayColors = [
  '#3C75AC', '#A37F01', '#2A6BD6', '#4D5C92', '#EC6C15', '#648C02', '#5B16D2', '#20C869', '#9E5D0C', '#9A8935', '#DD6437', '#1B99EF', '#EA5B12', '#3A03B9', '#4FC885', '#1389CB', '#7FCF0C', '#9CF32C', '#0EF1E8', '#0EF1E8', '#179261', '#CA3EDD', '#143745', '#AE6BA8', '#E3D2B7', '#71462C', '#8FC8A7', '#23EBAB', '#EC6D4C', '#7C4762', '#8482B5', '#B25CC1', '#3DEAC8', '#578704', '#A24581', '#18E3AE', '#2EEC70', '#A393AE', '#D35262', '#4AF2D5', '#01C7B4', '#03C77A', '#737B01', '#DF70DB', '#79A4FA', '#281B10', '#E46845', '#48BE35', '#D6399B', '#F43451', '#E2CF1F', '#8868EF', '#105580', '#10BF79', '#581ACC', '#B295AE', '#5B8A82', '#27C644', '#B5403F', '#5444CB', '#C85A8F', '#769D22', '#6897F4', '#1AFDA7', '#FD065A', '#009080', '#124186', '#23818E', '#4BEA8F', '#82D003', '#D90E34', '#56A456', '#41D3D6', '#76250B', '#2FBD4A', '#89948D', '#61DD8C', '#FE2CCA', '#B50706', '#575DCD', '#98D986', '#A1FAEA', '#A01BC3', '#32EDAA', '#745D59', '#745D59', '#BE2BA8', '#B0141A', '#40A4BC', '#073A53', '#0B88CF', '#041DC1', '#16BB75', '#A9F0DA', '#189ADA', '#58BC6E', '#2D7CE5', '#6C9AB2', '#68CF85', '#DC98EA', '#7F9ECC', '#D81D99']


function App() {
  


  const createNumberRandom = array => {
    return Math.floor(Math.random() * authors.length)
  }

  const getElemetRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }


   let indexAuthorRandom = createNumberRandom(authors)

   let indexColorRandom = createNumberRandom(arrayColors)

   const [authorRandom, setauthorRandom] = useState(authors[indexAuthorRandom])

   const [colorRandom, setcolorRandom] = useState(arrayColors[indexColorRandom])

   
   const reset = () => {
    setauthorRandom(getElemetRandom(authors))
    setcolorRandom(getElemetRandom(arrayColors))

   }

   const appStyle = {
     backgroundColor: colorRandom,
     height: '100vh',
   }

  return (
    <div style={appStyle} className="App">
      <Card
      authorRandom={authorRandom}
      colorRandom={colorRandom}
      reset={reset}
      />
    </div>
  )
}

export default App
