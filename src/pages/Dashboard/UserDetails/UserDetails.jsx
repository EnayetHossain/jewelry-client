import { useLoaderData } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const user = useLoaderData();
  const { photo, name, email, phone, role } = user;

  return (
    <section className="single-jewelry-section user-section">
      <div className="details-image user-image">
        <img src={photo} alt={name} />
      </div>

      <div className="details-description">
        <div>
          <p className="title">{name}</p>
          <p className="description">Phone: {phone ? phone : "N/A"}</p>
        </div>

        <div className="price">
          <p>Contact user: {email}</p>
          <p>User role: {role}</p>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
