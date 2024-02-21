# Prismjs for source code syntax highlighting

Syntax highlighting greatly improves source code readability. Here is an example:

```typescript
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
	roomNumber: {
		type: String,
		unique: true
	},
	roomType: String,
	capacity: Number,
	bookableBy: String  // some rooms are only bookable by members of the A&A
});

export const Room = mongoose.model('Room', roomSchema);
```