import React, { useEffect, useState } from "react";

export default function Cat() {
  const [catImageUrl, setCatImageUrl] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((result) => {
        return result.json();
      })
      .then((res) => setCatImageUrl(res[0].url));
  }, []);

  return (
    <div>
      <h2> This is my cat component</h2>
      <img src={catImageUrl} />
    </div>
  );
}
