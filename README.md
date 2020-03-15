# react-usetoggle

Very simple hook for React to have a named boolean in a useState hook.

# Quick Start

This is a [Node.js](https://nodejs.org/en/) package available through the [npm registry](https://nodejs.org/en/).
Installation into your project is done with the [`npm install` command](https://docs.npmjs.com/downloading-and-installing-packages-locally): 

To install: 

    npm install --save @koenbrouwer/react-usetoggle


### Usage:

    const [state, toggleState] = useToggle(); // defaults to false
    
You can also give it another default initial state:
    
    const [state, toggleState] = useToggle(true); // defaults to true
    
If you don't give it a default value, it will default to `false`, or the boolean you feed it.
And then`toggleState()` will toggle the value from `true` to `false`, or `false` to `true`.

# Contributing

Feel free to open an issue or a pull request in the [repo on GitHub](https://github.com/KoenBrouwer/react-usetoggle/pulls)!

# License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
