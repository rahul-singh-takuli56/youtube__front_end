# Day 1
## Rules of JSX

###  Return a single root element:
- To return multiple elements from a component, wrap them with a single parent tag. For example, you can use a <div>. If you don’t want to add an extra <div> to your markup, you can write <> and </> instead. This empty tag is called a Fragment.

### Close all the tags
- JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />.

### camelCase all most of the things!
- For example, instead of stroke-width you use strokeWidth.


# Day 2
## All about JSX

- JSX attributes inside quotes are passed as strings.
- Curly braces let you bring JavaScript logic and variables into your markup.
- They work inside the JSX tag content or immediately after = in attributes.
- {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.

# Day 3
## Props 

- Props let you think about parent and child components independently. For example, you can change the person or the size props inside Profile without having to think about how Avatar uses them. Similarly, you can change how the Avatar uses these props, without looking at the Profile.

- You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to your component! React component functions accept a single argument, a props object.

- To pass props, add them to the JSX, just like you would with HTML attributes.

- To read props, use the function Avatar({ person, size }) ```destructuring syntax```.

- You can specify a default value like size = 100, which is used for missing and undefined props.

- You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!

- Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.

- Props are read-only snapshots in time: every render receives a new version of props.

- You can’t change props. When you need interactivity, you’ll need to set state.
- ```Props are read only i.e they are not changed dynamically```

# Day 4
## Conditional Rendering
- Conditional rendering in React is the process of displaying different content or components based on certain conditions. It allows you to control what appears in your user   interface dynamically, depending on variables, state, or other factors. This helps you build more interactive and responsive user interfaces by showing or hiding elements as needed.
