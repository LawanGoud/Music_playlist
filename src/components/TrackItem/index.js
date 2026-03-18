import './style.css'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onDelete = () => {
    deleteTrack(id)
  }
  return (
    <li className="track-item">
      <div className="track-info">
        <img src={imageUrl} alt="track" className="track-image" />
        <div>
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>

      <div className="track-right">
        <p className="track-duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          onClick={onDelete}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TrackItem
