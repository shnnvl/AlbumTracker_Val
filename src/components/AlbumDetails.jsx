import { useEffect, useState } from "react";
import { getAlbumTracks } from "../services/itunes.js";
import { useAlbums } from "../context/AlbumContext.jsx";

export default function AlbumDetails({ album, onClose, onPlay }) {
  const { collection, addAlbum, removeAlbum } = useAlbums();
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const saved = collection.some((item) => item.id === String(album.id));

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    getAlbumTracks(album.id)
      .then((items) => { if (active) setTracks(items); })
      .catch((err) => { if (active) setError(err.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [album.id]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="details-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close details">×</button>
        <div className="details-heading">
          {album.artwork && <img className="details-cover" src={album.artwork} alt="" />}
          <div>
            <p className="eyebrow">ALBUM DETAILS</p>
            <h2>{album.title}</h2>
            <p className="muted">{album.artist}</p>
            <p className="muted">{album.genre} {album.releaseDate ? `· ${album.releaseDate.slice(0, 4)}` : ""}</p>
            <div className="button-row">
              {saved ? (
                <button className="button button-secondary" onClick={() => removeAlbum(album.id)}>Remove from collection</button>
              ) : (
                <button className="button button-primary" onClick={() => addAlbum(album)}>＋ Add to collection</button>
              )}
              {album.collectionViewUrl && (
                <a className="button button-secondary" href={album.collectionViewUrl} target="_blank" rel="noreferrer">View on iTunes ↗</a>
              )}
            </div>
          </div>
        </div>
        <div className="track-section">
          <h3>Track list</h3>
          {loading && <p className="muted">Loading tracks…</p>}
          {error && <p className="error-text">{error}</p>}
          {!loading && !error && tracks.length === 0 && <p className="muted">No track information was provided for this album.</p>}
          <ol className="track-list">
            {tracks.map((track) => (
              <li key={track.trackId}>
                <span>{track.trackName}</span>
                {track.previewUrl ? (
                  <button className="text-button" onClick={() => onPlay(track)}>▶ Preview</button>
                ) : (
                  <span className="muted small">No preview</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
