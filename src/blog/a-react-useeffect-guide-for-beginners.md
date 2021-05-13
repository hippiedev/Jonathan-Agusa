---
path: /blog/a-react-useeffect-guide-for-beginners
date: 2021-05-13T22:21:52.301Z
title: A React.useEffect guide for beginners
description: In this article, I'll be explaining what the useEffect hook is and
  how to use in your app.
thumb: ../images/featured/jim.jpg
---
`useEffect` hook is a very useful and powerful tool, especially when used properly. Understanding how to use it was a bit difficult for me at first, so that's the purpose of me writing this article. So Let's get started then!

## useEffect and side effects

`useEffect` is basically used for handling side effects in your functional component. *But what are side effects?* Side effects are basically anything that affects something outside of the scope of the current function that's being executed. A very typical example of side effects are *API requests*.

`useEffect` hooks are used in place of lifecycle methods `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`.

useEffects takes in two arguments:

```javascript
useEffect(callback, [dependencies]);
```

`callback` is the callback function containing the side-effect logic. `useEffect` executes the callback function after React has committed the changes to the screen. While `dependencies` is an optional array of dependencies. `useEffect` executes `callback` only if the dependencies have changed between renderings.

## Using the useEffect hook

Let's create a simple `Example` functional component:

```javascript
function Example() {
  return <div/>;
}
```

Just a plain ol' functional component. It is strictly prohibited to make side effects directly in the body of the component, so that's where `useEffect` is going to come in. For our examples, we are going to be making logs to our `console` to see when the effect is executed.

```javascript
import { useEffect } from 'react';

const Example = () => {
    useEffect(() => {
        console.log('render [Example]'); //Runs after every render
    });

    return <div />;
};
```

If you run this, the effect (`console.log`) is going to be executed after the component has been rendered. By default, in the absence of dependencies, useEffect runs after every render.

```javascript
import { useEffect } from 'react';

function Example() {
  useEffect(() => {
      console.log('render [Example]'); //Runs once after initial render
  }, []);
}
```

Having an empty array as dependency is going to make your effect run once after each inital render. So if you run this, the effect is going to be executed after the component has been rendered.