import axios from "axios";
import LOTRClassError from "./LOTRClassError.js";
import * as constants from "./constants.js";

/**
 * This is an SDK for interacting with the Lord of the Rings API.
 * More information about this API can be found at https://the-one-api.dev/v2.
 * - Setup an account to get your token https://the-one-api.dev/account.
 */
export default class LOTRClass {
  constructor(token = null) {
    this.token = token;
  }

  /**
   * @returns All the Lord of the Rings movies.
   */
  async getAllMovies() {
    let config = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let response = await axios
      .get(`${constants.BASE_URL}${constants.MOVIE_BASE_ENDPOINT}`, config)
      .catch((error) => {
        if (error.response) {
          throw new LOTRClassError(
            error.response.status,
            error.response.data.message
              ? error.response.data.message
              : error.response.data
          );
        } else {
          throw new LOTRClassError("ERROR", error.message);
        }
      });

    return { movies: response.data.docs, total: response.data.total };
  }

  /**
   * @param id This is the id of the movie to retrieve.
   *
   * @returns An object with details of one of the Lord of the Rings movie with the specified id.
   */
  async getMovieById(id) {
    let config = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let response = await axios
      .get(
        `${constants.BASE_URL}${constants.MOVIE_BASE_ENDPOINT}/${id}`,
        config
      )
      .catch((error) => {
        if (error.response) {
          throw new LOTRClassError(
            error.response.status,
            error.response.data.message
              ? error.response.data.message
              : error.response.data
          );
        } else {
          throw new LOTRClassError("ERROR", error.message);
        }
      });

    return response.data;
  }

  /**
   *  @param id - This is the id of the movie with quotes to retrieve.
   *
   * @returns Lord of the Rings movie quotes found in the movie with the specified id.
   */
  async getQuotesByMovieId(id) {
    let config = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let response = await axios
      .get(
        `${constants.BASE_URL}${constants.MOVIE_BASE_ENDPOINT}/${id}${constants.QUOTE_BASE_ENDPOINT}`,
        config
      )
      .catch((error) => {
        if (error.response) {
          throw new LOTRClassError(
            error.response.status,
            error.response.data.message
              ? error.response.data.message
              : error.response.data
          );
        } else {
          throw new LOTRClassError("ERROR", error.message);
        }
      });

    return {
      quotes: response.data.docs,
      limit: response.data.limit,
      page: response.data.page,
      pages: response.data.pages,
      total: response.data.total,
    };
  }
}
