# Emoji in comments and console.log()

A colored text message with an emoji quickly draws a developer's attetion to what is happening. As an app runs, messages printed on the console&mdash;both browser console on the front end and Node.js console on the back end&mdash;provide valuable information on what is happening. While debugging, a developer can quickly zone in on a bug based on such messages.

To enter an emoji, install **:emojisense:** Visual Studio Code extention and press : to trigger emoji entry.

Emoji examples:

- 👍: good
- 👎: bad
- 💩: messy
- 🐛: bugs
- 🐌: inefficient
- 🔥: attention

___

## 1. Source code comment

Visual Studio Code is based on Chromium browser and can display emoji's natively. Below is an example of TypeScript comment with an emoji:

```typescript
// 🥭 connect to MongoDB database
```

___

## 2. Front end console.log()

Your Chrome browser has built-in support for emoji. Code below prints out a colored message with an emoji. Press F12 to view it in browser console.

```typescript
  ngOnInit(): void { 
    console.log('%c 👍 emoji component instantiated.', 'background: green; color: white')
  }
```

You may use such messages for:

- Component instantiation
- Service calls
- API calls to the back end
- Errors or warnings

___

## 3. Back end console.log()

Starting with version 16.0.0, Node.js supports emoji natively. To use color, however, you will need a package such as chalk.

<pre><code class="command-line">npm i chalk</code></pre>

Code below (in TypeScript) prints out a message with an emoji in bold font and cyan color:

```typescript
import chalk from 'chalk';  // use color in console.log()

// 🥭 connect to MongoDB database
const MongoDB_Connection_String = "mongodb://localhost/techdoc";
async function connectToMongoDB(connectionString: string) {
    mongoose.connect(connectionString);
    console.log(chalk.bold.cyan('✌️ MongoDB database successfully connected!'));
}
```

You may use such messages for:

- Database connection/disconnection
- Database operations
- API calls
- Errors or warnings

