export const getMovieList = (setMoviesFromApi, category) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${
      category ? category : "popular"
    }?api_key=d09a43e3fbd3d04d2631f0551bdedc80&language=en-US`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setMoviesFromApi(data.results);
    });
};
export const getMovieListByID = (id, setMoviesFromApi) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d09a43e3fbd3d04d2631f0551bdedc80&language=en-US`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setMoviesFromApi(data);
    });
};

export const searchedMovies = (name, setState, context) => {
let arr = []
 fetch(`https://api.themoviedb.org/3/search/movie?api_key=d09a43e3fbd3d04d2631f0551bdedc80&query=${name}`)
.then((res) => {
  return res.json();
})
.then((data) => {
  arr.push(...data.results)
  // console.log(arr)
  setState(arr)
});
}

