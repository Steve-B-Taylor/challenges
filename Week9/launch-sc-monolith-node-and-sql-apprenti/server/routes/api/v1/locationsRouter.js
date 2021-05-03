import express from "express"
import Location from "../../../models/Location.js"

const locationsRouter = new express.Router()

// locationsRouter.get("/", async (req, res) => {
//   try {
//     //get and return the list of locations using the model
//     const locations = await Location.findAll()
//     res.json({ locations: locations })
//   } catch (error) {
//     console.log(error)
//     res.json({ errors: error })
//   }
// })

locationsRouter.get("/:id", async (req, res) => {
  try {
    //get and return a single location using the model
    const location = await Location.findById(req.params.id)
    location.Adventures = await location.Adventures()
    return res.status(200).json({ location: location })
  } catch (error) {
    console.log(error)
    res.json({ errors: error })
  }
})

// locationsRouter.post("/", async (req, res) => {
//   try {
//     //save the posted data to the database and return it, with the id it was given in the database, to the front end.
//     const formData = req.body
//     const newLocation = new Location(formData)
//     if (await newLocation.save()) {
//       return res.status(201).json({ location: newLocation })
//     } else {
//       return res.status(422).json({ errors: newLocation.errors })
//     }
//   } catch (error) {
//     console.log(error)
//     res.json({ errors: error })
//   }
// })

export default locationsRouter
