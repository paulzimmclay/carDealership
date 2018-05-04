/* 
 Total profit for 2017
 */
const arrayOfProfit = []
const grossProfit = cars.forEach((item) => {
  arrayOfProfit.push(item.gross_profit)
})
const totalProfit = arrayOfProfit.reduce((a, b) => a + b)

console.log(`The total profit for the year is ${totalProfit}`)

/* 
In which month did they sell the most cars?
 */

const monthArray = []
const monthHolder = cars.forEach(item => {
  
  // const months = monthArray.push(new Date(item.purchase_date).getMonth())
  // months.forEach((month) => {

  })
})
console.log(monthArray)



/* 
Which salesperson sold the most cars?
 */

/* 
// Which salesperson made the most profit?
 */

/* 
// Which model was the most popular?
*/

/* 
Which bank provided the most loans to our customers?
 */