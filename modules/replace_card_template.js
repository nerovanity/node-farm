module.exports = ((temp, product) => {
            let output = temp.replace(/{product_name}/g, product.productName);
            output = output.replace(/{image}/g, product.image);
            output = output.replace(/{q}/g, product.quantity);
            output = output.replace(/{price}/g, product.price);
            output = output.replace(/{nutrients}/g, product.nutrients);
            output = output.replace(/{des}/g, product.description);
            output = output.replace(/{from}/g, product.from);
            output = output.replace(/{id}/g, product.id);
            if(!product.organic){
            output = output.replace(/{organic}/g,"not-organic");
            }
            return output;
    });
