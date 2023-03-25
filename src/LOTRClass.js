import axios from "axios";
import LOTRClassError from "./LOTRClassError.js";
import * as constants from "./constants.js";

export default class LOTRClass {
  constructor(token = null) {
    this.token = token;
  }

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
