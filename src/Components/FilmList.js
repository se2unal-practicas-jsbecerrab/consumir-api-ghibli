import React from 'react'
import EmpleadoRow from '../Components/FilmRow'

class FilmList extends React.Component {
_renderArray(){

  return (
<div className="container-fluid">
<ul className="media-list">
{
  this.props.listado.map((film) => {
    return <EmpleadoRow key={ film.id }
                        title={ film.title }
                        description={ film.description }
                        director={ film.director }
                        producer={ film.producer }
                        date={ film.release_date }
                        score={ film.rt_score }
                              />
  })
}
</ul>
</div>
)
}
  render() {
    return (
      <div className="container-fluid">
          {this._renderArray()}
    </div>
    )
  }
}

export default FilmList
