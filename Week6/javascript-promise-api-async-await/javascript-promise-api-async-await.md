We've learned how to use the [Fetch API][fetch-api-article] to handle for the asynchronous process of sending HTTP requests using JavaScript code, awaiting the response from the server, and processing that response. Now, let's learn about the code working behind the scenes of the `fetch() ` method -- JavaScript _Promises_ -- and how they provide us with an eloquent tool for working with asynchronous code.

### Learning Goals

- Identify the need for special handling of asynchronous JavaScript code
- Review the purpose of _callback functions_
- Demonstrate the ways in which Promises, and the `async/await` keywords, are an improved way of working with asynchronicity
- Construct a Promise to handle for the asynchronous reading of a file

### Getting Started

```no-highlight
et get javascript-promise-api-async-await
cd javascript-promise-api-async-await
code .
```

### Handling Asynchronous Code

As JavaScript developers, we should know that JavaScript is a _single-threaded_ language, meaning that it can only process _one thing at a time_. This is great when we have a simple file that can process a lot of things quickly from top to bottom, without needing to pause to do some extra work. But as we know from our exploration of the Fetch API, some things can take a bit of time -- and may or may not be successful when processing! This is the challenge of _asynchronous code_: we need to be able to handle for situations where an asynchronous process will take some time to get back to us, and may or may not be successful.

The challenge here is that, with JavaScript being a single-threaded language, we don't want the processing of any asynchronous code to lock up the user's experience or the current "thread" of execution. Rather, we want our code to be able to continue processing the rest of the JS file, but make sure it doesn't move forward with the part of the code that depends specifically on the result of the asynchronous process.

In other words, let's say we wanted to have an application that:

1. Logs a greeting to the console
2. Reads a file of data
  - Once it has that data, log it to the console
3. Regardless of anything having to do with the file reading, logs a message to the console that says "We hope you're having a wonderful day!"

We need a way to write our JavaScript code such that the logs in #1 and #3 happen in their own time, no matter what happens with the file. However, the log in #2 should _only_ try to print out _if_, and _when_, we have successfully retrieved the data from our file.

This is where asynchronous programming comes in. It's a very important thing to be able to handle in JavaScript, and the syntax we have for processing this kind of code has come quite a long way! 


### Callback Functions

In the past, the only way to handle asynchronous code was to use _callback functions_. As a refresher, **callback functions** are functions that are passed into other functions as an argument. A callback function is not executed *immediately* - it is "called back" at some specific point inside the receiving function. We've used callback functions plenty of times before, most frequently in some built-in JavaScript functions such as `forEach`, as shown below:

```javascript
const numbers = [1, 2, 3, 4]

numbers.forEach(number => {
  console.log(number)
})
```

Above, we're handing our arrow function in as an argument to `forEach`, so that as we iterate through our array of numbers, it will call our callback function for each individual number and `console.log` that number.

Callback functions give us the power to make sure we don't call one function until a specific point inside of another function, which gives us some control over the timing of certain functions being called. However, as we know from Fetch, there's also the possibility that our asynchronous code might fail! For example, if we're fetching data from a server, that server might fail to provide us with the data we're looking for. Or, to use our example of reading a file, the file might not exist and our program may not be able to read it.

The solution, then, is to use `if` statements to make sure each of our callback functions only get called if and when the prior callback function succeeds. The problem with this approach is that we end up with a bunch of different callback functions nested inside a bunch of different `if` statements, which just leads to a massive nested mess resulting in memes like the below!

![Image of the "Pyramid of Doom" - highly nested callback functions][pyramid-of-doom-image]

In order to understand what we mean here, let's look at an even simpler version of this by taking _code_ out of the picture and thinking of a real-world example: say, going to a restaurant. When we go to a restaurant, we're going to follow a series of steps over the course of our evening out:

1. Go up to the host, put our name in for a table, and wait for the table to be ready
2. Be seated at our table and decide what we want to eat, wait for our waiter to arrive so we can order
3. Place our order, wait for our food to be cooked
4. Once our food arrives, enjoy a delicious meal

The complication with this order of operations is that each of these steps depends on the step above it, and each of them _takes time_. We can't be seated at our table until a table has become available, so there's a waiting period that needs to happen between steps 1 and 2. And if _any_ of the steps failed to happen, we would not be able to continue on with our evening! If there are no tables available at the restaurant, we won't be able to sit and order food. If the power goes out and our food can't be cooked, it doesn't matter if we already ordered - we're certainly not going to be able to eat our meal.

This is a fantastic example of a need for asynchronous handling - and these same kinds of situations are important to be able to handle for in our applications. Before Promises, we didn't have an eloquent way to handle for this. Instead, we had to use our callback functions and `if` statements, and our code would end up looking something like this:

```javascript
putNameInWithHost(tableIsReady => {
  if(tableIsReady) {
    getSeatedAtTable(waiterHasArrived => {
      if(waiterHasArrived) {
        placeOrder(foodIsReady => {
          if(foodIsReady) {
            eatDeliciousFood()
          }
        })
      }
    })
  }
})
```

We can see how this is a bit of a nightmare to navigate: it's hard to read, and if an error occurs, it's very difficult to figure out where things went wrong (did we not get a table, or was our top choice of meal sold out for the night?) Because it's such a mess, this structure is colloquially known as **callback hell**, or **the Pyramid of Doom** (silly and dramatic, we know, but spend a few hours debugging it and you'll understand why).

Luckily for us, JavaScript developers have built a tool called the [_Promise API_][mdn-promises] to provide us with a better way to deal with this complexity.

### Making Promises

Promises are an object, or class, that's built into JavaScript, and has attributes and methods that are set up to be able to handle for the timing, and the uncertainty, of asynchronous code. They give us a way to write the code above that allows us to avoid the heavily-nested pattern. Instead, Promises allow us to chain our callback functions using functions called `then()` and `catch()`, which makes our code much more readable!

> **Note:** `then()` and `catch()` syntax are the "old" version of `async/await` syntax. For the purposes of learning about Promises, their different states, and how they handle asynchronous code, using `then()` and `catch()` syntax can make it a little easier to conceptualize and talk about. However, once we have a grasp on how promises are processed, we will review the newer `async/await` syntax at the bottom of this article and how we can refactor `then()`/`catch()` to use `async/await` instead!

A simple Promise looks something like this:

```javascript
new Promise((resolve, reject) => {
  // do something asynchronously

  if (successful) {
    resolve()  // .then() is executed
  } else {
    reject()   // .catch() is executed
  }

})
.then(handleSuccess())  // process data, add elements to the DOM, etc...
.catch(handleError())   // show user an error message, retry network request, etc...
```

What's happening here?

First, we use the constructor to make a new Promise. Every new Promise needs to be given a callback function as its argument, as so:

```javascript
new Promise(callbackFunction)
```

We'll make this callback function an arrow function. As predetermined by the Promise API, this callback function needs to be given two arguments: `resolve` and `reject`:

```javascript
new Promise((resolve, reject) => {
  // the guts of our callback function
})
```

`resolve` and `reject` are keywords provided by the Promise API. We don't need to define them: we just need to know how to use them. The Promise API promises us that if we call `resolve()` anywhere inside of our callback function, it will move us on to a chained `.then()` function. If we call `reject()`, it will instead move us on to our `.catch()` statement.

Knowing this, we can add an `if` statement into our callback function, to end up with something like this:

```javascript
new Promise((resolve, reject) => {
  if (
    // things go as we hoped, we successfully read a file or get a table at the restaurant
  ) {
    resolve()   // .then() is executed
  } else {
    reject()   // .catch() is executed
  }
})
.then(() => {
  // here, we can continue on to our next step: logging the file contents, or sitting at our restaurant table
})
.catch(() => {
  // here, we can choose to log our error so that we can debug what went wrong
})
```

The key items to note in this example are...

* `Promise`, `resolve`, `reject`, `then`, and `catch` are all defined by the JavaScript Promise API and specific keywords we will need to use.
* `resolve`, and `reject` are functions, which should be called to trigger `.then()` and `.catch()`, respectively.
  * We can hand arguments in to these functions to pass them on to our `.then()` or `.catch()` calls. For example, we could call `resolve(fileData)` to have access to the data from our file inside of our `.then()`, or `reject(error)` to hand an error to our `.catch()`
* We need to write code to decide what happens inside of our `.then()` and `.catch()` callback functions.

### The Stages of a Promise

Often, we will use Promises to define a function that needs to handle something asynchronous. In fact, _this is what's happening behind the scenes in the Fetch API!_ JavaScript developers used Promises to define the `fetch()` method for us, so that it could handle our asynchronous HTTP requests. Our `fetch()` method _promises_ that it's going to go request something from a server for us, and will get back to us with results, whether it's successful or not.

Let's come back to our restaurant example to explore this idea. We could define our `putNameInWithHost()` function using a Promise. Of course this is all pseudocoded, but it should illustrate the usage of our Promise API keywords of `Promise`, `resolve`, and `reject`:

```javascript
const putNameInWithHost = () => {
  return new Promise((resolve, reject) => {
    // put name in at host stand
    // receive a buzzer for when your table is ready
    if(tableIsReady) {
      resolve()
    } else if (noTableIsAvailable) {
      reject(new Error("Sorry, we don't have a table for you"))
    }
  })
}
```

There are a number of stages that our Promise goes through as it is processed.

- **Pending** - Our Promise is pending when we've put our name in, but don't have a table yet. In our real-world example, it's as if we were given a buzzer so we can know when our table is ready, but it hasn't gone off yet! The buzzer is basically a "promise" that we will get a table _eventually_, but not quite yet.
- **Settled** - Once our Promise `resolve`s or `reject`s, it is considered settled. This can have one of two outcomes:
  - _Resolved_ or _Fulfilled_: Our Promise is considered "resolved" or "fulfilled" if it was able to complete successfully. In the example above, our Promise is resolved if the buzzer goes off, we walk up to the host stand, and are told that our table is ready.
  - _Rejected_: Our Promise is considered "rejected" if it was not able to complete successfully. In the example above, our Promise is rejected if the buzzer goes off, we walk up to the host stand, and they tell us the very sad news that they forgot about a large party happening in the restaurant, and they're so sorry, but they can't seat us tonight.

When our Promise is finally settled, if it `resolve`s, it will allow us to move on with our evening, but if it `reject`s, we will need to call it an early night and skip dinner! In code, when we reach `resolve()`, we will move on to our next `.then()` scenario. But if we reach `reject()`, we will instead skip our `.then()` entirely and head to our `.catch()`.

### Promise Chaining

The wonderful thing about this structure of a Promise is that it allows us as developers to chain callback functions AFTER the asynchronous bit, rather than creating nested mess by handing callback functions in as arguments. And what's really lovely is that we can continue to chain one Promise after another! Our program will continue to work through each of the subsequent `.then()` blocks until it reaches the last one. If anything at all goes wrong, it will skip all remaining `.then()` calls and go right to our `.catch()`. This means that our nested restaurant example from above would look more like this:

```javascript
putNameInWithHost()
.then(tableIsReady => {
  return getSeatedAtTable()
})
.then(waiterHasArrived => {
  return placeOrder()
})
.then(foodIsReady => {
  return eatDeliciousFood()
})
.catch(error => {
  // if ANY of the above steps failed, it will skip the rest of them and come down here, where we can `console.log` what went wrong
})
```
This pattern, called a _promise chain_, makes our code far more readable, allowing us to see where asynchronous things happen and where things continue or fail. Each of our `.then()` chains returns another Promise, so we can continue to chain one situation after another until we've reached our final step.

Note that in each of our `.then()` blocks, we're making sure to `return` the next piece of our code. This is _extremely_ important, as it allows each `.then()` block to return _another Promise_, which is of course why we're able to continue chaining more `.then()` calls after it! 

### Creating our own Promise to Read a File

Let's create an actual working Promise in code. If you look in your editor, you'll see that we have two JSON files in your root directory: `books.json`, which has our books from our [Fetch article][fetch-api-article], and `invalidFormat.json`, which purposefully has some syntax errors in it. We're going to use Promises, and the `fs.readFile` method (which is asynchronous, unlike the `fs.readFileSync` you may have seen before), to attempt to read these files.

Open up the `myPromise.js` file in your root directory and input the following code:

```javascript
// myPromise.js

import fs from "fs"

const read = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(data)
      }
    })
  })
}
```

Here, we've defined a method called `read` which takes in a filename. It returns a `new Promise`, which we know will let us chain `.then()` and `.catch()` calls after invoking it!

We make sure to pass in our required arguments of `resolve` and `reject` when making our new Promise, and inside of our Promise, we attempt to read our file by calling `fs.readFile()` and handing in our filename, encoding of "utf8", and a callback function (`readFile` hasn't caught up to the Promise game yet 😉) so that we can `reject()` if it encounters and error, and otherwise `resolve()` with the data. Handing the `data` in as an argument to `resolve()` allows us to pass that data on to any subsequent chained `.then()` blocks.

Now that we've defined our Promise, add the below to the bottom of your file:

```javascript
// myPromise.js

read("books.json")
.then(data => {
  console.log("Data retrieved!");
  const parsedData = JSON.parse(data)
  console.log(parsedData)
})
.catch((err) => {
  console.log("Something went wrong.")
  console.log(err)
})
```

We've set up our `.then()` to take in the data provided, parse it to a JS object, and log it to our console. Our `.catch()`, on the other hand, helpfully logs our error to us, should we encounter one. 

Go ahead and run `node myPromise.js` and you should see your data successfully print to the terminal!

Now, let's try to force our code to hit our `.catch()` block. Keep all of your code the same, except update the filename handed into the `read` method to the misspelled `book.json`:

```javascript
// myPromise.js

read("book.json")
.then(data => {
  console.log("Data retrieved!");
  const parsedData = JSON.parse(data)
  console.log(parsedData)
})
.catch((err) => {
  console.log("Something went wrong.")
  console.log(err)
})
```

This time, when we run `node myPromise.js`, we should see our error neatly print to our terminal, telling us that "Something went wrong", and giving us a very helpful error explaining that it couldn't find our file. It never even makes it to our `then()` block -- it just skips right over it and lands in our `.catch()`.

If we instead give it a file that exists, but with an error, we'll see something different yet again! Update your filename to `invalidFormat.json` this time and re-run `node myPromise.js`.

This time, we should still see our error -- but we also see our `console.log` telling us that the data was retrieved! Since it was able to find the file, we landed inside of our `.then()`, but it was when it failed to parse the file that our code failed. This, once again, skipped our program right out of our `.then()` and into our `.catch()`, telling us that there was an error parsing the file. This is one of the fantastic powers of Promises -- that they allow us to `catch` an error anywhere along the way.

### `async`/`await` Keywords

You may be wondering where the `async` and `await` keywords that we learned with Fetch have gone. Well, it turns out they are, put simply, the most recent "versions" of `.then()` and `.catch()`! 

While promise chaining was definitely an improvement from the highly nested callback hell that came before, JavaScript developers still didn't think it was as readable as it could be. We still needed different blocks of code for each of our `.then()` and `.catch()` calls, and each of those made our code a little harder to navigate.

`async` and `await` are the answer to that. They allow us to use Promises in a single line, without needing to chain. They feel a little more like English, in a way: we're able to tell our code to `await` a particular function finishing up before moving on! This cleans up our syntax even more, because we moved from nesting, to chaining, to being able to write our code very similarly to all of our other code - with each line evaluating without having to create all of these extensive blocks.

> Note: We can, in fact, use `.then()` and `.catch()` with `fetch()`. Rather than using `async/await` to wait for our data to be returned, we would chain `.then()` blocks each time we were previously calling `await` in our code.

To use `async/await` in our own Promise code, let's replace the code in `myPromise.js` with the below:

```javascript
// myPromise.js

import fs from "fs"

let read = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(data)
      }
    })
  })
}

try {
  const data = await read("books.json")
  console.log("Data retrieved!");
  const parsedData = JSON.parse(data)
  console.log(parsedData)
} catch(err) {
  console.log("Something went wrong.")
  console.log(err)
}
```

> Note: Top-level `await` calls (without being wrapped in an `async` function) are built into Node v14.8.0 and up. If you're getting syntax errors around the `await` keyword, make sure you're on a recent enough version of Node!

You'll notice that our `read` function is exactly the same: it's still creating a Promise in the same way. However, instead of using `.then()` and `.catch()` syntax below, we are able to use `await` when reading our file to make our code look a bit more linear!

The one thing we need to remember to include is our `try...catch` block. Since we no longer have our `.catch()` chained at the end, we need to be sure we have a way to catch our errors should anything go wrong!

### Why This Matters

Often, as JavaScript developers, we will need to handle for asynchronous functionality in our code - whether it's fetching data from a server, reading a file, waiting a certain amount of time before wanting something to pop up on your page, etc. Promises give us a wonderful tool to do that with readable, and more easily debuggable, syntax than the nested callbacks of yesteryear.

### In Summary

We now have an understanding of the Promise API - how to create Promises, what their stages are (pending and settled, resolved/fulfilled and rejected), and how they handle timing and error handling for multiple steps of asynchronous code using `.then()` and `.catch()`. We know how to apply the newer syntax of `async/await` in place of `.then()` and `.catch()`. And by understanding all of this, we have a deeper understanding of what's under the hood in the Fetch API!

### Resources
- [MDN Docs - Promise Object][mdn-promises]
- [MDN Docs - Using Promises][mdn-using-promises]

[fetch-api-article]: https://learn.launchacademy.com/lessons/fetch-and-express-with-async-await
[mdn-promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[mdn-using-promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
[pyramid-of-doom-image]: https://s3.amazonaws.com/horizon-production/images/pyramid-of-doom.jpg