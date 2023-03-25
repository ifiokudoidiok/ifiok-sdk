# Lord of the Rings JavaScript SDK

This is a simple and lightweight Javascript SDK for the [One API](https://the-one-api.dev/).

More information about this API can be found [here](https://the-one-api.dev/v2)

## Installation

The SDK can be installed using npm or yarn:

```bash
$ npm install ifiok-sdk

$ yarn add ifiok-sdk
```

### Authentication

To access the data from the sdk, you need to provide you `YOUR_API_KEY`.
Setup an account to get your API key [here](https://the-one-api.dev/account)

### Quick Start

```js
import LOTRClass from "ifiok-sdk";

const lortlib = new LOTRClass(`YOUR_API_KEY`);
```

That's it!

## Usage

### Examples

To call the async `getAllMovies` method which returns an object with an array list of movies:

```jsx
import React from "react";
import LOTRClass from "ifiok-sdk";

function App() {
  const lortlib = new LOTRClass(`YOUR_API_KEY`);

  const [movies, setMovies] = React.useState(null);

  async function getMovies() {
    const output = await lortlib.getAllMovies();
    setMovies(output);
  }

  React.useEffect(() => {
    getMovies();
  }, []);

  return <div>{console.log(movies)}</div>;
}
```

To call the async `getMovieById` method which takes in the id of the movie and returns an object with details of the specific movie:

```jsx
import React from "react";
import LOTRClass from "ifiok-sdk";

function App() {
  const lortlib = new LOTRClass(`YOUR_API_KEY`);

  const [movie, setMovie] = React.useState("");

  async function getMovie(id) {
    const output = await lortlib.getMovieById(id);
    setMovie(output);
  }

  React.useEffect(() => {
    getMovie(`MOVIE_ID`);
  }, []);

  return <div>{console.log(movie)}</div>;
}
```

To call the async `getQuotesByMovieId` method which takes in the id of the movie and returns an object with an array list of quotes from the specific movie:

```jsx
import React from "react";
import LOTRClass from "ifiok-sdk";

function App() {
  const lortlib = new LOTRClass(`YOUR_API_KEY`);

  const [quote, setQuote] = React.useState("");

  async function getQuoteByMovieId(id) {
    const output = await lortlib.getQuotesByMovieId(id);
    setQuote(output);
  }

  React.useEffect(() => {
    getQuoteByMovieId(`MOVIE_ID`);
  }, []);

  return <div>{console.log(quote)}</div>;
}
```
## Support

For any additional support, please contact us at [support@ifiok-sdk.com](www.ifiokudoidiok.com).