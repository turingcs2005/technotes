# Sequelize with ESM

At the time of writing, 
- Sequelize has not yet fully implemented TypeScript. Check out the official [Sequelize documentation on TypeScript](https://sequelize.org/docs/v6/other-topics/typescript/). 
- Sequelize CLI still uses CommonJS. Sequelize CLI provides cli utilities for creating models and generating migrations, among other things.

You have 3 options:
- Use CommonJS: the old way.
- Use ESM without TypeScript: you need to either manually create model files and migration files, or use sequelize cli to create these files and then edit the source code.
- TypeScript: use <mark>sequelize-typescript</mark> to bridge the gap as recommended by the official documentation. Again, you need to either manually create model files and migration files, or use sequelize cli to create these files and then edit the source code.

## ESM without TypeScript
1. Install packages
<pre class="command-line">npm i sequelize<code></code></pre>
<pre class="command-line">npm i -D @types/sequelize sequelize-cli<code></code></pre>
Installing type declaration is optional, as code below do not use TypeScript.

2. Connect to SQL database (using PostgreSQL as example) <br>
Create directories and file <mark>postgresql/db/connection.mjs</mark> to establish connection
```javascript
import { Sequelize } from "sequelize";
import dotenv from "dotenv"; 
dotenv.config();

const { POSTGRESQL_USER, POSTGRESQL_DATABASE, POSTGRESQL_PASSWORD } = process.env;

// connect to PostgreSQL database 
const PostgreSQL_Connection_String = `postgres://${POSTGRESQL_USER}:${POSTGRESQL_PASSWORD}@localhost:5432/${POSTGRESQL_DATABASE}`;
const sequelize = new Sequelize(PostgreSQL_Connection_String, {
   logging: false
});

async function connectToPostgreSQL() {
   try {
      await sequelize.authenticate();
      console.log('Successfully connected to PostgreSQL database!');
   } catch (e) {
      console.log('Error occured while trying to connect PostgreSQL database: ', e);
   }
}

connectToPostgreSQL();

export { sequelize };
```

3. Create a model<br>
If you are creating a model for an existing SQL table, make sure that your model matches the data in that table. (A model does not have to use all columns in an existing table&mdash;a subset of columns will do.) <br>
Create directory and file <mark>postgresql/models/user.model.mjs</mark> and define your model
```javascript
import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../db/connection.mjs";

class User extends Model {
   get fullName() {
      return [this.firstName, this.lastName].join(' ');
   }
}

User.init({
id: {
   type: DataTypes.INTEGER,
   autoIncrement: true,
   primaryKey: true,
   comment: 'Primary key'
},

firstName: {
   type: DataTypes.STRING,
   allowNull: false
},

lastName: {
   type: DataTypes.STRING,
   allowNull: false
}  
}, {
   sequelize,
   modelName: 'User'
});

await User.sync(); // create empty table if it does not yet exist

export { User };
```

4. Consume a model
```javascript
import { sequelize } from "../db/connection.mjs";
import { Op } from "sequelize";
import { User } from "../models/user.model.mjs";

// 1. build, save and create
const user1 = User.build({  // use build() instead of new keyword to instantiate a model class
    firstName: 'Joe',
    lastName: 'Biden'
});

try {
    await user1.save();
    console.log('User has been saved to SQL database.');
} catch(e) {
    console.log('Error occurred saving user to SQL database: ', e);
}

// create = build + save
try {
    await User.create({
        firstName: 'Kamala',
        lastName: 'Harris'
    });
    console.log('User has been saved to SQL database.');
} catch(e) {
    console.log('Error occurred saving user to SQL database: ', e);
}

// toJSON() to log an instance
console.log(user1.toJSON());

// 2. update
// update a single field
user1.firstName = 'Hunter';

// update multiple fields
user1.set({
    firstName: 'Bill',
    lastName: 'Clinton'
});

await user1.save()

console.log(user1.toJSON());

// 3. delete records in a table
await User.destroy({
    where: { 
        [Op.and]: [
            { firstName: 'Bill' },
            { lastName: 'Clinton' }
        ]
    },
    // restartIdentity: true, // reset primary key
    // casecase: true         // delete records in child tables with foreign-key reference
});

// delete all records in a table
// method 1
await User.destroy({
    truncate: true
});

await sequelize.close();
```


