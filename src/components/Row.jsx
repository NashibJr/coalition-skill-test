import React from "react";

const Row = ({ style, date, place }) => {
  return (
    <tr style={style}>
      <td className="text-[400] text-[#414F6B] w-full sm:w-[450px]">{date}</td>
      <td className="text-[400] text-[#414F6B] w-full sm:w-[200px]">{place}</td>
    </tr>
  );
};

export default Row;
