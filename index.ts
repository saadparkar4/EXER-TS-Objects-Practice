/*****************************************************************
🎬 Part 1: Creating a Movie Object

Imagine you're building a streaming platform like Netflix or Shahid.

You need to describe a movie using an object. The movie has the following details:

- Title: "Everything Everywhere All at Once"
- Director: "Daniel Kwan"
- Release Year: 2022
- Genre: "Science Fiction"

✅ Task 1: Create an interface called `Movie` that defines the shape of a movie object.
           The interface should include the following required properties:
           - title (string)
           - director (string or array of strings)
           - releaseYear (number)
           - genre (string)

           And the following optional properties (use the `?` symbol):
           - duration (number)
           - rating (string)
           - reviews (array of review objects)

✅ Task 2: Create a variable named `movie` and assign it an object that matches the Movie interface.

✅ Task 3: Access the movie’s title using dot notation, and access the release year using bracket notation. 
           (You can log them using `console.log`)
******************************************************************/

/*****************************************************************
🛠️ Part 2: Updating the Movie Object

Now let’s say the movie got updated information and we want to add more details.

✅ Task 4: Add a new property to the `movie` object called `duration` and set it to 139 (minutes).

✅ Task 5: Add another property called `rating` and set it to "R".

✅ Task 6: Update the `releaseYear` from 2022 to 2023 since the movie had a new release.
******************************************************************/

/*****************************************************************
📚 Part 3: Making the Object More Advanced

Let’s make our movie object even more flexible and realistic!

✅ Task 7: Change the `director` property so that it stores an array of two strings:
           ["Daniel Kwan", "Daniel Scheinert"]

✅ Task 8: Add a new property called `reviews` to the movie object.
           This should be an array of objects where each review has:
           - reviewer (string)
           - comment (string)

           Start with one review:
           {
             reviewer: "Film Critic",
             comment: "A wild, genre-bending masterpiece."
           }

✅ Task 9: Create a separate `Review` interface to describe the structure of each review.
           Then, update the `Movie` interface to use this `Review[]` for the `reviews` property.
******************************************************************/

/*****************************************************************
🎁 Part 4: Index Signatures

Sometimes we want to create objects where the keys are not fixed ahead of time.
Index signatures allow us to define flexible object structures in TypeScript.

--- 
📺 Task 10: Platforms with Boolean Values

✅ Step 1: Modify the interface to allow for index signature so we can add new keys and values

✅ Step 2: Add a new key named 'FilmStudio' and the value should be a string (i.e "Paramount", "Pixar"...etc)

✅ Step 3: Add a new key named 'Cast' and the value should be a string array of the names of the actors in the movie (["Robin Williams", "Ryan Reynolds"])


**/

// TASK 1 - ✅ Task 1: Create an interface called `Movie` that defines the shape of a movie object.
//  The interface should include the following required properties:
//  - title (string)
//  - director (string or array of strings)
//  - releaseYear (number)
//  - genre (string)

//  And the following optional properties (use the `?` symbol):
//  - duration (number)
//  - rating (string)
//  - reviews (array of review objects)

interface movie {
	title: string;
	director: string | string[];
	releaseYear: number;
	genre: string;
	duration?: number;
	rating?: string;
	reviews?: {};
}

// TASK 2 - ✅ Task 2: Create a variable named `movie` and assign it an object that matches the Movie interface.

const movie: movie = {
	title: "Everything Everywhere All at Once",
	director: ["Daniel Kwan"],
	releaseYear: 2022,
	genre: "Science Fiction",
	// duration: 165,
	// rating: "",
	// reviews: { reviewer: "", comment: "" },
};

//TASK 3 - ✅ Task 3: Access the movie’s title using dot notation, and access the release year using bracket notation.
// (You can log them using `console.log`)

console.log(`${movie.title}, ${movie["releaseYear"]}`);

//TASK 4 - ✅ Task 4: Add a new property to the `movie` object called `duration` and set it to 139 (minutes).

function addDuration(movie: movie, duration: number): movie {
	movie.duration = duration;
	return movie;
}

console.log(addDuration(movie, 139));

// TASK 5 - ✅ Task 5: Add another property called `rating` and set it to "R".

function addRating(movie: movie, rating: string): movie {
	movie.rating = rating;
	return movie;
}

console.log(addRating(movie, "R"));

//TASK 6 - ✅ Task 6: Update the `releaseYear` from 2022 to 2023 since the movie had a new release.

function updateReleaseYear(movie: movie, releaseYear: number): movie {
	movie.releaseYear = releaseYear;
	return movie;
}

console.log(updateReleaseYear(movie, 2023));

//TASK 7 - ✅ TASK 7: Change the `director` property so that it stores an array of two strings: ["Daniel Kwan", "Daniel Scheinert"]

function addSecondDirector(movie: movie, director: string[]): movie {
	movie.director = Array.isArray(movie.director) ? [movie.director[0], director[1]] : [movie.director[0], director[1]];
	//  spread operators to fetch previous/existing values of the array to append additional values or original || Array.isArray

	return movie;
}
console.log(addSecondDirector(movie, ["Daniel Kwan", "Daniel Scheinert"]));

// TASK 8 - ✅ Task 8: Add a new property called `reviews` to the movie object.
// This should be an array of objects where each review has:
// - reviewer (string)
// - comment (string)

// Start with one review:
// {
//   reviewer: "Film Critic",
//   comment: "A wild, genre-bending masterpiece."
// }

function addReviews(movie: movie, reviews: string[]): movie {
	movie.reviews = Array.isArray(movie.reviews) ? movie.reviews.push(reviews) : reviews;
	//  spread operators to fetch previous/existing values of the array to append additional values or original || Array.isArray

	return movie;
}
console.log(addReviews(movie, ["Film Critic", "A wild, genre-bending masterpiece"]));

// TASK 9 - ✅ Task 9: Create a separate `Review` interface to describe the structure of each review.
//  Then, update the `Movie` interface to use this `Review[]` for the `reviews` property.

interface review {
	reviewer: string;
	comments: string;
}

interface review extends movie {
	reviews?: review[];
}

//TASK 10 -
/**
 * 
 * Sometimes we want to create objects where the keys are not fixed ahead of time.
Index signatures allow us to define flexible object structures in TypeScript.

--- 
📺 Task 10: Platforms with Boolean Values

✅ Step 1: Modify the interface to allow for index signature so we can add new keys and values

✅ Step 2: Add a new key named 'FilmStudio' and the value should be a string (i.e "Paramount", "Pixar"...etc)

✅ Step 3: Add a new key named 'Cast' and the value should be a string array of the names of the actors in the movie (["Robin Williams", "Ryan Reynolds"])
 */

//Step 1
interface movie {
	[key: string]: string | number | string[] | undefined | {};
}

//Step 2
movie.filmStudio = "Paramount";
console.log(movie);
// console.log("TEST", (movie.filmStudio = "Paramount"));
// console.log("test20", movie.filmStudio);

//Step 3
movie.cast = ["Robin Williams", "Ryan Reynolds"];
console.log(movie);
