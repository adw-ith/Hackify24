import { datapd } from "./speechtotxt";

export default function Table() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Score</th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          {datapd.map((dt, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{dt.date}</td>
              <td>{dt.score}</td>
              <td>
                {dt.score > 0.3
                  ? "positive"
                  : dt.score > -0.3
                  ? "negative"
                  : "neutral"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
