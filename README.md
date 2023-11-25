# Day 1
## ```Rules of JSX```

###  Return a single root element:
- To return multiple elements from a component, wrap them with a single parent tag. For example, we can use a <div>. If we don’t want to add an extra <div> to wer markup, we can write <> and </> instead. This empty tag is called a Fragment.

### ```Close all the tags```
- JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />.

### ```camelCase all most of the things!```
- For example, instead of stroke-width we use strokeWidth.


# Day 2
## ```All about JSX```

- JSX attributes inside quotes are passed as strings.
- Curly braces let we bring JavaScript logic and variables into wer markup.
- They work inside the JSX tag content or immediately after = in attributes.
- ```{{ and }}``` is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.

# Day 3
## ```Props```

- Props let us  think about parent and child components independently. For example, we can change the person or the size props inside Profile without having to think about how Avatar uses them. Similarly, we can change how the Avatar uses these props, without looking at the Profile.

- We can think of props like “knobs” that we can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to wer component! React component functions accept a single argument, a props object.

- To pass props, add them to the JSX, just like we would with HTML attributes.

- To read props, use the function Avatar({ person, size }) ```destructuring syntax```.

- We can specify a default value like size = 100, which is used for missing and undefined props.

- We can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!

- Nested JSX like ``` <Card><Avatar /></Card>``` will appear as Card component’s children prop.

- Props are read-only snapshots in time: every render receives a new version of props.

- We can’t change props. When we need interactivity, we’ll need to set state.
- ```Props are read only i.e they are not changed dynamically```

# Day 4
## ```Conditional Rendering```
- Conditional rendering in React is the process of displaying different content or components based on certain conditions. It allows we to control what appears in wer user   interface dynamically, depending on variables, state, or other factors. This helps we build more interactive and responsive user interfaces by showing or hiding elements as needed.

# Day 5
## ```List Conditional Rendering```
- We'll use ```filter()```  and ```map()```  with React to filter and transform the array of data into an array of components.
- ```Example 1: ```
- ```const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];```
- ```const result = words.filter((word) => word.length > 6);```
- ```console.log(result); Expected output: Array ["exuberant", "destruction", "present"] ```
- ```Example 2: ```
- const array1 = [1, 4, 9, 16];
- const map1 = array1.map((x) => x * 2);
- console.log(map1);
- Expected output: Array [2, 8, 18, 32]
- ```Pitfall```-> Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:
- However, we must write return explicitly if your => is followed by a { curly brace!}
- ```const listItems = chemists.map(person => { // Curly brace
  return <li>...</li>;
   }); ```
- We need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:
 ```<li key={person.id}>...</li>```

 # Day 6
 ## ```Events``` 
