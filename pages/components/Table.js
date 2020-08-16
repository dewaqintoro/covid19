import React from 'react'
import numeral from "numeral";

const Tableku = ({countries}) => {
  return (
    <div className="tableku">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            {/* tanpa memberikan koma */}
            {/* <strong>{cases}</strong> */}

            {/* dengan koma */}
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  )
}

export default Tableku
