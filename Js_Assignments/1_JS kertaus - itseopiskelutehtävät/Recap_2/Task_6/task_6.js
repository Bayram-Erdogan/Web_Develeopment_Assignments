let movies = [];
let count = Number(prompt('How many movies do you want to rate?'));

for (let i = 1; i <= count; i++) {
  let title = prompt('Enter title for movie ' + i + ':');
  let rating = Number(prompt('Enter rating (1-5) for this movie:'));

  let movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

movies.sort(function (a, b) {
  return b.rating - a.rating;
});

let topMovie = movies[0];

let movieList = document.getElementById('movieList');

for (let movie of movies) {
  let li = document.createElement('li');
  li.textContent = movie.title + ' - Rating: ' + movie.rating;
  movieList.appendChild(li);
}

let topMovieElement = document.getElementById('topMovie');

if (topMovie) {
  topMovieElement.textContent =
    topMovie.title + ' (Rating: ' + topMovie.rating + ')';
} else {
  topMovieElement.textContent = 'No movies entered.';
}
