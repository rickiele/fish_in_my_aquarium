/* imports FishDataProvider.js file */
import { useFish } from './FishDataProvider.js'

/* Executing function - putting it into a variable called allTheFish */
const allTheFish = useFish()

console.log("all the fish?", allTheFish)