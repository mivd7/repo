import * as React from 'react'

export default function PhotoPage(props) {
  return (<div>
    <h1>Photos in this album</h1>

    {props.photos.map(photo => <div>
      <img src={photo.url} />
      <p>{photo.title}</p>
    </div>)}
  </div>)
}
