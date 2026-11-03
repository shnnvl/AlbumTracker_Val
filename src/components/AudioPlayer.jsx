import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ track, onClose }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    setCurrent(0);
    setPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [track?.previewUrl]);

  useEffect(() => {
    if (!track?.previewUrl || !audioRef.current) return;
    audioRef.current.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [track]);

  if (!track) return null;

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  function formatTime(value) {
    const seconds = Math.floor(value || 0);
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  }

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={track.previewUrl}
        onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 30)}
        onEnded={() => setPlaying(false)}
      />
      <div className="player-track">
        <strong>{track.trackName}</strong>
        <span>{track.artistName}</span>
      </div>
      <button className="player-button" onClick={togglePlay}>{playing ? "Ⅱ" : "▶"}</button>
      <span className="player-time">{formatTime(current)}</span>
      <input
        className="seek-bar"
        aria-label="Seek preview"
        type="range"
        min="0"
        max={duration || 30}
        step="0.1"
        value={Math.min(current, duration || 30)}
        onChange={(event) => {
          const next = Number(event.target.value);
          if (audioRef.current) audioRef.current.currentTime = next;
          setCurrent(next);
        }}
      />
      <span className="player-time">{formatTime(duration)}</span>
      <button className="player-close" onClick={onClose} aria-label="Close player">×</button>
    </div>
  );
}
