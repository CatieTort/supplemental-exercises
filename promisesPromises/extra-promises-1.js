// This is Promises Practice I

// Write your solutions in this file. To test your solutions, get into your terminal, navigate to the folder with this file and run node extra-promises.js. If you don't have node on your computer, you can always run your solutions in the browser.

// Consider this function:

function findMovie(title){
  var movies = [ "Jaws", "E.T,", "Alien"]
  let movie = movies.find(function(el){
    return title == el
  })

  return new Promise (function(resolve, reject) {
    if(movie){
      resolve(movie)
    } else {
      reject('Title not found')
    }
  })
}

// Write a calls to this function logging the movie on success and error on failure.
// Write both a call that succeeds and one that fails

// Your code here:


// Now, consider this function:

function buyTicket(movie){
  return new Promise (function(resolve, reject){
    if(movie){
      resolve('Bought ticket for ' + movie)
    } else {
      reject('No movie found')
    }
  })
}

// Write a calls to this function logging the result on success and error on failure.
// Write both a call that succeeds and one that fails

// Your code here:


// Finally, write a call that chains the result of the first function to a call to the second

// Your code here:
