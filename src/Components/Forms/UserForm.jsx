import {useState} from "react";
function UserForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z]{2,}$/;

    if (!name.trim()) {
      setError("Sorry! , Name is required");
      setSubmitted(false);
    } else if (!nameRegex.test(name.trim())) {
      setError(
        "Name must contain only letters (A-Z or a-z) and must not be less than 2 character"
      );
    } else {
      setError("");
      setSubmitted(true);
    }
  };
  const DisplayMessage = () => {
    if (error) return <p className="text text-danger">{error}</p>;
    if (submitted)
      return <p className="text text-success">{`Hello ${name} !`}</p>;
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <DisplayMessage />
      <label>Name:</label>
      <input
        type="text"
        value={name}
        className="form-control"
        onChange={(e) => {
          setName(e.target.value);
          setSubmitted(false);
        }}
      />

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default UserForm;
