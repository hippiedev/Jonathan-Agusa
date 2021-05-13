---
path: /blog/a-react-useeffect-guide-for-beginners
date: 2021-05-13T20:30:23.952Z
title: A React.useEffect guide for beginners
description: In this article, I'll be explaining what the useEffect hook is and
  how to use in your app.
thumb: ../images/featured/jim.jpg
---
`useEffect` hook is a very useful and powerful tool, especially when used properly. Unfortunately for me, understanding how to use it was a bit difficult for me at first, so that's the purpose of me writing this article. So Let's get started then!

## useEffect and side effects

`useEffect` is basically used for handling side effects in your functional component. *But what are side effects?* Side effects are basically anything that affects something outside of the scope of the current function that's being executed. A very typical example of side effects are *API requests*.

`useEffect` hooks are used in place of lifecycle methods `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`.

useEffects takes in two arguments:

```javascript
useEffect(callback, [dependencies]);
```

* `callback` is the callback function containing the side-effect logic. `useEffect` executes the callback function after React has committed the changes to the screen.

  `dependencies` is an optional array of dependencies. `useEffect()` executes `callback` only if the dependencies have changed between renderings.