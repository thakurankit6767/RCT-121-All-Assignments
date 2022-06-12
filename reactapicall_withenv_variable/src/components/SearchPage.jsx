import React, { useEffect, useState } from "react";
import axios from "axios";
import .meta.env.MY_API_KEY;

function SearchPage({ getData }) {
  const [query, setQuery] = useState("");

  const postData = () => {
    axios({
      url: `${MY_API_KEY}`,
      method: "POST",
      params: {
        s: query,
      },
    })
      .then((res) => {
        getData([res.data.meals]);
        console.log(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        name="search"
        id=""
      />
      <button onClick={postData}>submit</button>
    </div>
  );
}

export default SearchPage;
