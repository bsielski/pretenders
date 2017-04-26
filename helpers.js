const generateElement = (tagName, attributes={}) => {
  let element = document.createElement(tagName)
  if (Object.keys(attributes).length>0) {
    let keys = Object.keys(attributes)
    keys.forEach( item => {
      if (item != "textNode") {
          element.setAttribute(item, attributes[item])
      }
    })
      if (attributes.textNode != undefined) {
      let textNode = document.createTextNode(attributes["textNode"])
      element.appendChild(textNode)
    }
  }
  return element
}

const test = (testedFunction, args, expected) => {
    const result = testedFunction.apply(null, args)
    let messagePart1
    if (result === expected) {
	messagePart1 = ". "
    }
    else {
	messagePart1 = "F "
    }
    const messagePart2 = "test of " + testedFunction.name + ", expected: " + expected + " is: " + result
    return messagePart1 + messagePart2 
}
