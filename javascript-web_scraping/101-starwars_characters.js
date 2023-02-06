#!/usr/bin/node
const request = require("request");

const movieID = process.argv[2];

const options = {
  method: "GET",
  url: `https://swapi.dev/api/films/${movieID}/`,
  headers: {
    "User-Agent": "request",
    "Content-Type": "application/json"
  }
};

request(options, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const characters = data.characters;
    characters.forEach((char) => {
      const options = {
        method: "GET",
        url: char,
        headers: {
          "User-Agent": "request",
          "Content-Type": "application/json"
        }
      };
      request(options, (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          const data = JSON.parse(body);
          console.log(data.name);
        }
      });
    });
  }
});
