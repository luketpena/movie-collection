# Movie Collection
This is a simple applciation that allows users to add and remove genres, organized by genres inputted by the user.

## Installation
Use the npm package manager to install all the dependencies listed in 'package.json'.
```bash
npm install
```

## Database
This project was created using a PostgreSQL database hosted in Postico. Table creation queries and test data inserts are listed in the database.sql file included in this project.

## Getting Started
In your terminal, start the server:
```bash
npm run server
```
Then get the client started:
```bash
npm run client
```

## Usage
The header lets the user switch between adding movies and genres to mark those movies with.

On the movie interface, the user can input information about a movie and submit it to the database. Movies are listed below on cards in a gallery-style layout with their details on the option to remove them.

The genre interfaces simply prompts you to enter a genre name and submit that data. Genres are listed below along with the number of films in that genre and the option to remove a genre. 
NOTE: The interface prevents you from removing genres with movies assigned to them. This is because in the database, the movie table references the genre table id. All movies of that genre must be removed before the genre can be deleted.

## Thank You
I'd like to thank my Prime instructors, Mary and Dev. And my family for okay with me coding in corners of the house during the holidays.
