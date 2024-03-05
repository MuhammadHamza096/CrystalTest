import "./inputBox.scss";

const Input = ({ Icon, placeholder, onChange, name, value }) => {
  const newClass = Icon ? "p-2" : "";
  return (
    <div className="search-field">
      <input
        type="text"
        className={newClass}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />

      {Icon && <Icon className="search-icon" />}
    </div>
  );
};

export default Input;
