# Lord of the Rings JavaScript SDK

This is a simple and lightweight JavaScript SDK for the [One API](https://the-one-api.dev/).
This document describes the architectural decisions made in the LOTR SDK.
Below are the content of the document

### Content
- [What is the class structure?](#class-structure)
- [What are the methods?](#methods)
- [What is the expected input and output for each method?](#getallmovies)
- [How are errors handled?](#error-handling)
- [How is Testing setup?](#testing)
- [How is authentication handled?](#authentication)

## Class Structure
The Lord of the Rings JavaScript SDK is written using the ES6 class syntax and consists of a single class called `LOTRClass`. The primary reason for using a class instead of a function is that a class gives you the ability to have multiple methods that can be called from the same object. This is useful for creating an SDK that provides a consistent way to interact with a given API. It can also help organize code and make it easier to debug.

## Methods
The following methods are available for use in the `LOTRClass`:
- `getAllMovies`
- `getMovieById`
- `getQuotesByMovieId`

### getAllMovies
This method takes no parameters and returns an object containing an array list of movies.

> Input: 
`None`

> Output:
`Object containing an array list of movies.`

### getMovieById
This method takes the ID of the movie as a parameter and returns an object with details of the specific movie.

> Input:
`Movie ID`

> Output:
`Object containing details of the movie.`

### getQuotesByMovieId
This method takes the ID of the movie as a parameter and returns an object with an array list of quotes from the specific movie.

> Input:
`Movie ID`

> Output:
`Object containing an array list of quotes from the movie.`

## Error Handling
The class called `LOTRClassError` extends the default error class and covers for errors that may occur as a result of calls not getting to the server or calls not being authorized.

## Testing
The jest module is used to test the SDK and it has 100% test coverage for all the methods, accounting for both the truthy and falsy paths.

## Authentication
Authentication for the LOTRClass is handled via the `YOUR_API_KEY` parameter. Setup an account to get your API key [here](https://the-one-api.dev/account).