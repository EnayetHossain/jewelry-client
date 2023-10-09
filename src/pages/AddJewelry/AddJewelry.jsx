import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import "./AddJewelry.css";

const AddJewelry = () => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;

    const jewelryData = {
      title,
      price,
      picture: photo,
      email: user.email,
      description,
    };

    fetch("http://localhost:5000/jewelry", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jewelryData),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });

    console.log(jewelryData);
  };

  return (
    <div className="sign-up-container">
      <p className="error"></p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Jewelry photo URL" name="photo" />
        <input type="text" placeholder="Title" name="title" />
        <input type="number" placeholder="Price" name="price" />
        <textarea
          cols={10}
          rows={5}
          placeholder="Description"
          name="description"
        ></textarea>
        <input type="submit" value={"Add Jewelry"} name="submit" />
      </form>
    </div>
  );
};

export default AddJewelry;
