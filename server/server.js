const express = require("express");
const path = require("path");
const app = express();

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, "files")));

// serve images from project root /images bc it didnt work before properly with images not loading
app.use("/images", express.static(path.join(__dirname, "../images")));

// Configure a 'get' endpoint for data..
app.get("/movies", function (req, res) {
  // Part 1: Remove the next line and replace with your code

  const movies = [
    {
      Title: "Snatch",
      Released: "2000-01-01",
      Runtime: 104,
      Genres: ["Crime", "Comedy"],
      Directors: ["Guy Ritchie"],
      Writers: ["Guy Ritchie"],
      Actors: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"],
      Plot: "In the underbelly of London, merciless gangsters, boxing promoters, amateur thieves and violent bookmakers try to retrieve a precious diamond stolen from an Antwerp jeweller.",
      Poster: "/images/snatch.jpg",
      Metascore: 73,
      imdbRating: 8.3,
    },
    {
      Title: "The Shawshank Redemption",
      Released: "1994-09-23",
      Runtime: 142,
      Genres: ["Drama"],
      Directors: ["Frank Darabont"],
      Writers: ["Stephen King", "Frank Darabont"],
      Actors: ["Tim Robbins", "Morgan Freeman"],
      Plot: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
      Poster: "/images/shawshankredemption.jpg",
      Metascore: 80,
      imdbRating: 9.3,
    },
    {
      Title: "Good Will Hunting",
      Released: "1997-12-05",
      Runtime: 126,
      Genres: ["Drama", "Romance"],
      Directors: ["Gus Van Sant"],
      Writers: ["Matt Damon", "Ben Affleck"],
      Actors: ["Matt Damon", "Robin Williams", "Ben Affleck"],
      Plot: "Will Hunting, a janitor at MIT, is a mathematical genius and a bad mf. Circumstances and behaviour force him to join therapeutic sessions, where he confronts his past, re-evaluates his present and thinks of his future.",
      Poster: "/images/goodwillhunting.jpg",
      Metascore: 70,
      imdbRating: 8.3,
    },
    {
      Title: "American Gangster",
      Released: "2007-11-02",
      Runtime: 157,
      Genres: ["Crime", "Drama"],
      Directors: ["Ridley Scott"],
      Writers: ["Steven Zaillian"],
      Actors: ["Denzel Washington", "Russell Crowe"],
      Plot: "Frank is a powerful drug lord whose booming drug trade is being undermined by crooked law enforcement officers and smaller street crews. Detective Roberts is the only cop who is willing to tackle him - nobody owns him though.",
      Poster: "/images/americangangster.jpg",
      Metascore: 76,
      imdbRating: 7.8,
    },
  ];
  res.json(movies);
});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");
