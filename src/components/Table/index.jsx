import "./table.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({ columns, rows, onDelete }) => {
  const reversedRows = [...rows].reverse();

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reversedRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>{row[column]}</td>
              ))}
              <td>
                <DeleteIcon
                  className="delete-icon"
                  onClick={() => onDelete(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
