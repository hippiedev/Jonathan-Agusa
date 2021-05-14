---
path: /blog/a-react-useeffect-guide-for-beginners
date: 2021-05-14T19:21:14.913Z
title: A React.useEffect guide for beginners
description: In this article, I'll be explaining what the useEffect hook is and
  how to use in your app.
thumb: ../images/featured/jim.jpg
---
The `useEffect` hook is a very useful and powerful tool, especially when used properly. Understanding how to use it was a bit difficult for me at first, so that's the purpose of me writing this article. So Let's get started then!

## useEffect and side effects

`useEffect` is basically for handling side effects in your functional component. *But what are side effects?* Side effects are basically anything that affects something outside of the scope of the current function that's being executed. A very typical example of side effects are *API requests*.

`useEffect` hooks are used in place of lifecycle methods `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`.

useEffects takes in two arguments:

```javascript
useEffect(callback, [dependencies]);
```

`callback` is the callback function containing the side-effect logic. `useEffect` executes the callback function after React has committed the changes to the screen. While `dependencies` is an optional array of dependencies. `useEffect` executes `callback` only if the dependencies have changed between renderings.

## Using the useEffect hook

1. This effect going to be executed after the component has been rendered. By default, in the absence of dependencies, useEffect runs after every render.

```javascript
import { useEffect } from 'react';

const Example = () => {
    useEffect(() => {
        console.log('render [Example]'); //Runs after every render
    });

    return <div />;
};
```

2. Having an empty array as dependency is going to make your effect run once after each inital render. So if you run this, the effect is going to be executed after the component has been rendered.

```javascript
import { useEffect } from 'react';

function Example() {
  useEffect(() => {
      console.log('render [Example]'); //Runs once after initial render
  }, []);
}
```

3. When the dependency has props or state values, the effect runs only *when there is a dependency value change*.

```javascript
import { useEffect } from 'react';

function Example() {
  useEffect(() => {
      //Runs once after initial render
      // and after every rendering ONLY IF `prop` or `state` changes
      console.log('render [Example]');
  }, [prop, state]);
}
```

## Invoking side effects on componentDidMount

To do this, all you have to do is use an empty array dependency:

```javascript
import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    // Runs once, after mounting
    document.title = 'Greetings page';
  }, []);

  return <div>{message}</div>;
}

```

`useEffect(..., [])` was supplied with an empty array as a dependencies argument. When configured in such a way, the `useEffect()` is going to execute the callback *just once*, after initial mounting.

## Invoking side effects on componentDidUpdate

Each time the side-effect uses props or state values, you must indicate these values as dependencies:

```javascript
import { useEffect } from 'react';

function MyComponent({ prop }) {
  const [state, setState] = useState();

  useEffect(() => {
    // Side-effect uses `prop` and `state`
  }, [prop, state]);

  return <div>....</div>;
}
```

The `useEffect(callback, [prop, state])` invokes the `callback` after the changes are being committed to DOM and *if and only if* any value in the dependencies array `[prop, state]` has changed.

Using the dependencies argument of `useEffect()` you control when to invoke the side-effect, independently from the rendering cycles of the component. Again, *that’s the essence of `useEffect()` hook.*

Let’s improve the `Greet` component by using `name` prop in the document title:

```javascript
import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    document.title = `Greetings to ${name}`; 
  }, [name]);

  return <div>{message}</div>;
}
```

`name` prop is mentioned in the dependencies argument of `useEffect(..., [name])`. `useEffect()` hook runs the side-effect after initial rendering, and on later renderings only if the `name` value changes.

```javascript
// First render
<Greet name="Eric" />   // Side-effect RUNS

// Second render, name prop changes
<Greet name="Stan" />   // Side-effect RUNS

// Third render, name prop doesn't change
<Greet name="Stan" />   // Side-effect does NOT RUN

// Fourth render, name prop changes
<Greet name="Butters"/> // Side-effect RUNS
```





## Fetching data

`useEffect()` can perform data fetching side-effect.

The following component `FetchEmployeesByQuery` fetches the employees list over the network. The `query` prop filters the fetched employees:

```javascript
import { useEffect, useState } from 'react';

function FetchEmployeesByQuery({ query }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(
        `/employees?q=${encodeURIComponent(query)}`
      );
      const fetchedEmployees = await response.json(response);
      setEmployees(fetchedEmployees);
    }
    fetchEmployees();
  }, [query]);

  return (
    <div>
      {employees.map(name => <div>{name}</div>)}
    </div>
  );
}
```

`useEffect()` starts a fetch request by calling `fetchEmployees()` async function after the initial mounting.

When the request completes, `setEmployees(fetchedEmployees)` updates the `employees` state with the just fetched employees list.

On later renderings, if the `query` prop changes, `useEffect()` hook starts a new fetch request for a new `query` value.

Note that the `callback` argument of `useEffect(callback)` cannot be an `async` function. But you can always define and then invoke an `async` function inside the callback itself:

```javascript
function FetchEmployeesByQuery({ query }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {  // <--- CANNOT be an async function
    async function fetchEmployees() {
      // ...
    }
    fetchEmployees(); // <--- But CAN invoke async functions
  }, [query]);

  // ...
}
```

To run the fetch request once when the component mounts, simply indicate an empty dependencies list: `useEffect(fetchSideEffect, [])`

## Conclusion

* `useEffect` hook is a mechanism for making side effects in functional components. Side effects should not be caused directly in components body or `render` function, but should always be wrapped in a callback passed to `useEffect`.
* By default `useEffect` callback (and corresponding cleanup) is ran on initial render and every rerender as well as on dismount. If you want to change that behaviour, add an array of values as a second argument to the `useEffect`. Then the effects will be ran only on mount and unmount of the component or if the values in that array changed. If you want to trigger the effects *only* on mount and unmount, simply pass an empty array.