import React, { useState } from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {
  const [selectedGroceryId, setSelectedGroceryId] = useState(0)
  // const [selectedBoozeId, setSelectedBoozeId] = useState("")


  /*
  **** REMINDER **** 
  ** This is an idea of what state WOULD look like as an object. This is not code you will ever see in regard to State***
 let groceryListState = {
   selectededGroceryId: 1,
   setSelectedGroceryId = (id) =>{
     this.selectededGroceryId = id
   },
   selectBoozeId:null, 
   setSelectedBoozeId = (id) => {
     this.selectededBoozeId = id
   }  
   }
*/
  const groceryList = props.groceries.map(grocery => {
    const selectGroceryFunction = () => {
      debugger
      return setSelectedGroceryId(grocery.id)
    }

    let selectedStatus = false
    if (selectedGroceryId === grocery.id){
      selectedStatus = true
    } 

    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        selectedStatus={selectedStatus}
        selectGroceryFunction={selectGroceryFunction}
      />
    )
  })


  return(
    <ul>
      {groceryList}
    </ul>
  )
}

export default GroceryList
