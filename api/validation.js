const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

module.exports = (req, res) =>{
    if(req.method === 'POST'){
        const {originalPrice, newPrice, productId} = req.body;

        if(!originalPrice || !newPrice || !productId){
            return res.status(422).json({error: "Please add all the fields"})
        }

        //transform the string to number, pick the first two numbers after the comma and transform it to a number
        const originalPriceNumber = parseFloat(originalPrice);
        const newPriceNumber = parseFloat(newPrice);

        //calculate if the new price is higher than 10% of the original price
        const newPriceIsHigher = newPriceNumber > originalPriceNumber * 1.1;

        // if the new price is higher than 10% of the original price, set a variable called aproved to false and manualAproveNeed to true
        const manualAproveNeed = newPriceIsHigher ? true : false;
        const aproved = newPriceIsHigher ? false : true;

        database.sM.create({
            data: {
                originalPrice: originalPriceNumber,
                newPrice: newPriceNumber,
                productId,
                manualAproveNeed,
                aproved
            }
        }).then(response => {
            return res.status(200).json(response)
        }).catch(error => {
            return res.status(500).json({error: "Something went wrong"})
        })
    }

    if(req.method === 'GET'){
        return res.status(200).json({message: "Hello World"})
    }
}