# MongoDB and Mongoose
1. Install packages
<pre class="command-line"><code>npm i mongodb mongoose</pre>
You do not need to install type declaration for mongodb or mongoose, as both packages have type declaration already bundled.

2. Connect to MongoDB database
In your <mark>app.mts</mark> file, add
```typescript
// connect to a MongoDB database
const MongoDB_Connection_String = 'mongodb://localhost';
async function connectToMongoDB(connectionString: string) {
	mongoose.connect(connectionString);
	console.log('MongoDB database successfully connected!');
}

try {
	await connectToMongoDB( MongoDB_Connection_String );
} catch(e) {
	console.log('Error occured while connecting to MongoDB: ', e);
}
```

3. Define a model
Create directories and file <mark>/mongodb/models/student.model.mts</mark>. Add code to your model file
```typescript
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    school: String,
    grade: Number
});

const Student = mongoose.model('Student', studentSchema);

export { Student };
```

4. Create routes
Create directories and file <mark>/mongodb/routes/student.router.mts</mark>. Add code to your router file
```typescript
import express from "express";
const router = express.Router();
import { Student } from "../models/student.model.mjs"; // note that file extension is .mjs, the compiled file 

// get all students
router.get('/getStudents', async (req, res) => {
    try {
        const data = await Student.find({});
        console.log('Successfully retrieved all students!');
        res.status(200).json(data);
    } catch (e) {
        console.log('Error occured while retrieving students: ', e);
        res.status(400).json({ "error": e});
    }
});


// post a student
router.post('/addStudent', async (req, res) => {
    try {
        await Student.create(req.body);
        console.log('A new student has been added to database succuessfully!');
        res.status(200).json(req.body);
    } catch(e) {
        console.log('Error occured while saving student to database: ', e);
        res.status(400).json({"error": e});
    }
});

export { router };
```

5. Use router
In your <mark>app.mts</mark> file, add code
```typescript
import { router as studentRouter } from "./mongodb/routes/student.router.mjs";
app.use('/api', studentRouter);
```

