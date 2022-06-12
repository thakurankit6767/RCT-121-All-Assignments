import React, { useEffect, useState } from "react";

function ResultsPage({ result }) {
  const [dta, setDta] = useState(result);
  useEffect(() => {
    setDta(result);
  }, [result]);
  return (
    <div>
      {dta.length != 0 &&
        dta.prop[0].map((e, i) => {
          return (
            <div className="card">
              <img src={e.strMealThumb}></img>
              <div className="info">
                <div key={i}>Name : {e.strMeal}</div>
                <div>Category : {e.strCategory}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ResultsPage;
