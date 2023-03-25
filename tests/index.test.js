import LOTRClass from "../src/LOTRClass.js";
import LOTRClassError from "../src/LOTRClassError.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

describe("LOTRClass", () => {
  let lotrClass;
  let token;

  describe("getAllMovies", () => {
    let mockResponse;

    it("should return a total number of 8 movies", async () => {
      token = process.env.TOKEN;
      lotrClass = new LOTRClass(token);

      const response = await lotrClass.getAllMovies(token);
      expect(response.total).toEqual(8);
    });

    it("should throw an error when unauthorized", async () => {
      lotrClass = new LOTRClass();

      await expect(lotrClass.getAllMovies(token)).rejects.toThrow(
        LOTRClassError
      );
    });
  });

  describe("getMovieById", () => {
    it("should return a movie with a valid id", async () => {
      token = process.env.TOKEN;
      lotrClass = new LOTRClass(token);
      const result = await lotrClass.getMovieById("5cd95395de30eff6ebccde5d");
      expect(result).toReturn;
    });

    it("should throw an error with an invalid id", async () => {
      token = process.env.TOKEN;
      lotrClass = new LOTRClass(token);

      await expect(lotrClass.getMovieById("randomID")).rejects.toThrow(
        LOTRClassError
      );
    });
  });

  describe("getMovieById", () => {
    it("should return the total number of pages of quotes for the specified movie", async () => {
      token = process.env.TOKEN;
      lotrClass = new LOTRClass(token);
      const result = await lotrClass.getQuotesByMovieId(
        "5cd95395de30eff6ebccde5d"
      );
      expect(result.pages).toBe(88);
    });

    it("should throw an error with an invalid id", async () => {
      token = process.env.TOKEN;
      lotrClass = new LOTRClass(token);

      await expect(lotrClass.getQuotesByMovieId("randomID")).rejects.toThrow(
        LOTRClassError
      );
    });
  });
});
