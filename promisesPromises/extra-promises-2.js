// This is Promises Practice II

// Write your solutions in this file. To test your solutions, get into your terminal, navigate to the folder with this file and run node extra-promises.js. If you don't have node on your computer, you can always run your solutions in the browser.

// Consider this function:

function findProduct(name){
  var products = [
    {
      name: "cup",
      price: 2.99
    },
    {
      name: "monitor",
      price: 199.99
    },
    {
      name: "rubber duck"
    }
  ]

  var product = products.find(function(product){
    return name == product.name

  })

  return new Promise (function(resolve, reject){
    if(product){
      resolve(product)
    } else {
      reject('Product not found')
    }
  })
}

// Write a calls to this function logging the product on success and error on failure.
// Write both a call that succeeds and one that fails

// Your code here:


// Now, consider this function:

function describeProduct(product){
  return new Promise (function(resolve, reject){
    if(product.price){
      resolve(`The ${product.name} costs ${product.price}.`)
    } else {
      reject(`No price for ${product.name}`)
    }
  })
}

// Write a calls to this function logging the result on success and error on failure.
// Write both a call that succeeds and one that fails

// Your code here:


// Finally, write a call that chains the result of the first function to a call to the second

// Your code here:
