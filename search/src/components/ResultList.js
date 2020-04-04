import React from "react";

function ResultList() {
  return(
    <ul className="list-group">
      {PaymentResponse.result.map(result => (
        <li className="list-group-item" key={result.id}>

        </li>
      ))}
    </ul>
  )
}

export default ResultList;