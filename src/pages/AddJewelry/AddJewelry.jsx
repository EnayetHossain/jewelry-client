import "./AddJewelry.css";

const AddJewelry = () => {
  return (
    <div className="sign-up-container">
      <p className="error">error</p>
      <form>
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
