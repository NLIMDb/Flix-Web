import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class MovieRow extends React.Component {

    viewMovie() {
        // console.log("Trying to view the movie..")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="Poster" width="120" src = {this.props.movie.poster_src}/>
            </td>
            <td>
              <h3>{this.props.movie.title}{this.props.movie.vote_average}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" className="btn btn-primary" onClick={this.viewMovie.bind(this)} value="View" />
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow