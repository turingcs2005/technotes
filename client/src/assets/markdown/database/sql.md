# SQL
### SQL Tips
- Use JavaScript (sequelize) in your projects as much as you can, as the syntax is clearer and the code much more concise. 
- Use raw SQL when sequelize library does not provide what you need.
- For sophisticated data manipulation, consider using a different language such as Python.
- Changing default lenghth of a character field (MS SQL's default varchar length is 225)
	- Option 1: execute SQL query to change column data type. (For PostgreSQL, use varchar(1000) instead of nvarchar(1000)).
	```sql
	-- change default column width from 225 to 1000 characters
	ALTER TABLE [dbo].[TABLE_NAME]
	ALTER COLUMN [COLUMN_NAME] nvarchar(1000)
	```
	- Option 2: use sequelize
	```javascript
	/* set column width to 1000 characters */
	type: Sequelize.STRING(1000)
	```
---
### PostgreSQL Setup
1. Request a Linux administrator to set up a PostgreSQL user account
2. Install PostgreSQL extension (by Chris Kolkman) in Visual Studio Code (VSC)
3. Create a new connection with the extension (default port of PostgreSQL is 5432)
4. Optionally, you may install pgAdmin4 (GUI) if you find VSC extension insufficient
5. Open a new SQL query and click on 'Select Postgres Server' on VSC's bottom bar. Select your database and execute your query.
---
### SQL Training Materials
There are tons of materials out there on SQL, but [SQL Cookbook](https://www.oreilly.com/library/view/sql-cookbook-2nd/9781492077435/) (2nd edition, 2020) is pretty good.
