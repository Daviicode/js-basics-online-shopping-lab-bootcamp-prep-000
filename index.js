var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random()*100)
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var newArray = [];
    for (var i = 0; i < cart.length; i++) {
      var name = Object.values(cart[i])[0];
      newArray.push(name + " at $" + cart[i].itemPrice)
    }
    
    var myString = "In your cart, you have ";
    if (newArray.length === 1) {
      myString += newArray + "."
    } else if (newArray.length === 2) {
      myString += (newArray[0] + "," + " and " + newArray[1] + ".")
    } else if (newArray.length > 2) {
      var lastElement = newArray.pop()
      var otherItem = newArray.join(", ")
      myString += (otherItem + ", and " + lastElement + ".")
    }
    return myString
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t;
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) === item) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart;
    }
    return "That item is not in your cart."
    return cart;
  }
}


function placeOrder(cardNumber) {
  if (cardNumber === null) {
    console.log ('Sorry, we don\'t have a credit card on file for you.')
  } else if (cardNumber !== null) {
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } 
  
}