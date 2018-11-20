import React from 'react'
import { Link } from "react-router-dom";

class MovieRow extends React.Component {
  render() {
    return (
      <div class="col-md-2">
        <Link to={'./movie/' + this.props.movie.id }>
            <img style={{paddingTop: "15px"}} alt="Poster" width="180" src = {this.props.movie.poster_src}/>
              <h5 style={{color:"white", fontSize:"14px", fontWeight:"900"}}>{this.props.movie.title}</h5>
              <h5 style={{color:"white", fontSize:"14px", fontWeight:"900"}}>{this.props.movie.release_date}</h5>
        </Link>
      </div>
    )/*<table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <Link to={'./' + this.props.movie.id + '/movie'}>
            <button variant='raised'>
              View
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  </table>*/
  }
}

export default MovieRow