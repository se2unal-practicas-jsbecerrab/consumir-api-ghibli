import React from 'react'


class FilmRow extends React.Component {

  render() {
    return(
      <li className="media">

        <div className="media-body">
          <h4>{this.props.title} ({this.props.date})</h4>
          <p>
            Director: {this.props.director}<br/><br/>
            <span className="label label-info">{this.props.description}</span>
            <br/><br/>
            Score : {this.props.score}
          </p>
        </div>
        <hr/>
      </li>
    )
  }
}

export default FilmRow
