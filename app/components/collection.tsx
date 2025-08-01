"use client";

import { useEffect, useState } from "react";

type CollectionItem = {
  id: number;
  name: string;
  description: string;
};

type Props = {};

export const Collection = (props: Props) => {
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/collection");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCollection(data);
      } catch (err) {
        console.error("Failed to fetch collection:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch collection"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, []);

  if (loading) {
    return <div>Loading collection...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Collection</h2>
      {collection.length === 0 ? (
        <div>No items in collection</div>
      ) : (
        collection.map((item) => (
          <div key={item.id} className="border p-4 m-2 rounded">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
