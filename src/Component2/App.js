import React from "react";
export default function App() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirm: "",
    checkbox: true,
  });

  function handleChange(event) {
    const { name, checked, value, type } = event.target;
    setData((previous) => {
      return {
        ...previous,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault(event);

    if (data.password === data.confirm) {
      console.log("Succeefully signed up");
    } else {
      console.log("passwords to not match");
    }
    if (data.checkbox === true) {
      console.log("Thenks for signing up for our newsletter!");
    }
    console.log(data);
  }
  return (
    <div
      className="bg-primary container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <form
        style={{
          width: "300px",
          background: "white",
          padding: "30px 20px ",
          borderRadius: "10px",
        }}
        className="p-6 text-center radius-rounded"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          id="email"
          className="mt-4"
          onChange={handleChange}
          value={data.email}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          id="password"
          className="mt-4"
          onChange={handleChange}
          value={data.password}
        />
        <br />
        <input
          type="confirm"
          name="confirm"
          placeholder="Confirm password"
          id="confirm"
          className="mt-4"
          onChange={handleChange}
          value={data.confirm}
        />
        <br />
        <input
          type="checkbox"
          name="checkbox"
          id="check"
          className="mt-4 "
          style={{ marginRight: "5px" }}
          onChange={handleChange}
          checked={data.checkbox}
        />
        <label htmlFor="check" className="mt-4 ">
          I want to join the newsletter
        </label>
        <br />

        <button className="mt-4 btn bg-primary text-white">Sign up</button>
      </form>
    </div>
  );
}
