import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import "./UpdateJewelry.css";

const UpdateJewelry = () => {
  const jewelry = useLoaderData();
  const { _id, title, picture, price, description } = jewelry;
  const { user } = useContext(AuthContext);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const price = form.price.value;
    const email = form.email.value;
    const description = form.description.value;

    const updatedData = {
      photo,
      title,
      price,
      email,
      description,
    };

    fetch(`http://localhost:5000/jewelry/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product updated");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sign-up-container">
      <ToastContainer />
      <p className="error"></p>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Jewelry photo URL"
          defaultValue={picture}
          name="photo"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          defaultValue={title}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          defaultValue={price}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={user.email}
          readOnly
        />
        <textarea
          cols={10}
          rows={5}
          placeholder="Description"
          name="description"
          defaultValue={description}
        ></textarea>
        <input type="submit" value={"Update Jewelry"} name="submit" />
      </form>
    </div>
  );
};

export default UpdateJewelry;
