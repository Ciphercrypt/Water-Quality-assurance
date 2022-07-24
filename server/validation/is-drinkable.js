
const axios = require('axios');



const FindDrinkability = (data) => {

 
  
  const result=   new Promise((resolve, reject) => {

 
        axios.post('localhost:5000/predict', {
            ph: data.PH,
            conduct: data.conduct,
            turbidity:data.turbidity
          })
          .then((response) => {
            resolve(response);
            
          }, (error) => {
            reject(error);
          });
        
    })

    return result;
 


 
}

module.exports = FindDrinkability;
