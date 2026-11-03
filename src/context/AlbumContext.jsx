import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AlbumContext = createContext(null);
const STORAGE_KEY = "album-tracker-collection-v1";

export function AlbumProvider({ children }) {
  const [collection, setCollection] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
  }, [collection]);

  function addAlbum(album) {
    setCollection((current) => {
      if (current.some((item) => item.id === String(album.id))) return current;
      return [
        {
          ...album,
          id: String(album.id),
          status: "Want to Listen",
          rating: 0,
          note: "",
          addedAt: new Date().toISOString()
        },
        ...current
      ];
    });
  }

  function updateAlbum(id, changes) {
    setCollection((current) =>
      current.map((album) =>
        album.id === String(id) ? { ...album, ...changes } : album
      )
    );
  }

  function removeAlbum(id) {
    setCollection((current) => current.filter((album) => album.id !== String(id)));
  }

  const value = useMemo(
    () => ({ collection, addAlbum, updateAlbum, removeAlbum }),
    [collection]
  );

  return <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>;
}

export function useAlbums() {
  const context = useContext(AlbumContext);
  if (!context) throw new Error("useAlbums must be used inside AlbumProvider.");
  return context;
}
