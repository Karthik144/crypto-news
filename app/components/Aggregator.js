import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleListItem from "./ArticleListItem";

function Aggregator() {
  let [coindeskArticles, setCoindeskArticles] = useState([]);
  let [decryptArticles, setDecryptArticles] = useState([]);
  let [theBlockArticles, setTheBlockArticles] = useState([]);

  // Function to fetch data from the RPC API
  const fetchData = async () => {
    try {
      // Fetch articles from coindesk.com
      const coindeskResponse = await fetch(
        "https://crypto-scraper-v1u7.onrender.com/scrape-coindesk"
      );
      const coindeskData = await coindeskResponse.json();

      // Filter duplicates from the data
      const filteredData = coindeskData.reduce((acc, item) => {
        if (!acc.find((article) => article.title === item.title)) {
          acc.push(item);
        }
        return acc;
      }, []);

      setCoindeskArticles(filteredData);

      // Fetch articles from decrypt.co
      const decryptResponse = await fetch(
        "https://crypto-scraper-v1u7.onrender.com/scrape-decrypt"
      );
      const decryptData = await decryptResponse.json();

      setDecryptArticles(decryptData);

      // Fetch articles from theblock.co
      const theBlockResponse = await fetch(
        "https://crypto-scraper-v1u7.onrender.com/scrape-theblock"
      );
      const theBlockData = await theBlockResponse.json();

      setTheBlockArticles(theBlockData);
    } catch (error) {
      console.log(error);
    }
  };

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2 className="articleHeader">Coindesk Articles</h2>
        <ul>
          {coindeskArticles.map((article) => (
            <ArticleListItem key={article.title} article={article} />
          ))}
        </ul>
      </div>

      <div>
        <h2 className="articleHeader">Decrypt Articles</h2>
        <ul>
          {decryptArticles.map((article) => (
            <ArticleListItem key={article.title} article={article} />
          ))}
        </ul>
      </div>

      <div>
        <h2 className="articleHeader">TheBlock Articles</h2>
        <ul>
          {theBlockArticles.map((article) => (
            <ArticleListItem key={article.title} article={article} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Aggregator;
