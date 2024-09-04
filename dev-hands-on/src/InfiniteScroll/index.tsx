import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const fetchItems = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://catfact.ninja/facts?page=${page}&limit=12`
      );
      const newItems = response.data.data;

      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to fetch items", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://catfact.ninja/facts?page=10&limit=12`
        );
        const newItems = response.data.data;
        setItems(newItems);
      } catch (error) {
        console.error("Failed to fetch items", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchItems]);

  return (
    <div style={{ height: "60%", overflow: "auto" }}>
      <h1>Infinite Scroll Example</h1>
      <ul>
        {items.map((item) => (
          <li key={item.fact}>{item.fact}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
