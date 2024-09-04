import { FC, useEffect, useState } from "react";
interface useGetFactsProps {
  page: number;
  limit: number;
}

const useGetFacts = (page: number, limit: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    const getFacts = async () => {
      const response = await fetch(
        `https://catfact.ninja/facts?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        setIsError(true);
      }
      const responseData = await response.json();
      setData(responseData);
    };
    if (!isLoading) {
      // getFacts();
    }
  }, []);
  return { isLoading, isError, data, hasMore };
};

export default useGetFacts;
