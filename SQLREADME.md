# SQL Queries README

This README provides instructions for running SQL queries to retrieve specific information from a database using SQLFiddle.

## Prerequisites
- Access to SQLFiddle (http://sqlfiddle.com)
- Sample database schema provided in `shortenedschema.sql` and `fullschema.sql`
- SQL query solutions in `sqlsolutions.sql`

## Steps

### Step 1: Setting Up the Schema

1. Go to SQLFiddle (http://sqlfiddle.com).

2. Copy and paste the contents of `shortenedschema.sql` into the left panel (Schema Panel).

3. Click "Build Schema" to create the database schema.

   **Note:** If the schema is too large, consider using the smaller `shortenedschema.sql` file.

### Step 2: Running SQL Queries

#### Query 1: How many organizations do not have account plans?

1. Copy and paste the SQL query from `sqlsolutions.sql` (Query 1) into the right panel (SQL Query Panel).

2. Click "Run SQL" to execute the query.

#### Query 2: How many organizations have more than one account plan?

1. Copy and paste the SQL query from `sqlsolutions.sql` (Query 2) into the right panel (SQL Query Panel).

2. Click "Run SQL" to execute the query.

#### Query 3: List all organizations that have only one account plan.

1. Copy and paste the SQL query from `sqlsolutions.sql` (Query 3) into the right panel (SQL Query Panel).

2. Click "Run SQL" to execute the query.

#### Query 4: List all organizations that have the PASSWORDLESS feature set to true.

1. Copy and paste the SQL query from `sqlsolutions.sql` (Query 4) into the right panel (SQL Query Panel).

2. Click "Run SQL" to execute the query.

Note: JSON_EXTRACT does not work in sqlfiddle.

## Results

- The results for each query will be displayed in the "Output" panel.

That's it! You can use these instructions to run the provided SQL queries and retrieve the requested information from the database.
