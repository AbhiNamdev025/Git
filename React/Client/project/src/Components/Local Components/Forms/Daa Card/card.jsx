import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import BasicSignup from "../basicSignup/BasicSignup";
function Card() {
  const [user, setUser] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState();
  const [selectedUser, setSelectedUser] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:2525/find/user");

      const data = await response.json();

      console.log("Fetched User Data:", data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete Method usee krte hain

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:2525/api/delete/user/${id}`,
        {
          method: "Delete",
        }
      );

      const deletedData = await response.json();

      console.log(deletedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormOpen = (user) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const onClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <h2> Basic Card</h2>
      <div className={styles.cardContainer}>
        {user.map((data) => (
          <div className={styles.card} key={data._id}>
            <h3>
              <p> ID: </p>
              {data._id}
            </h3>
            <p>Name:{data.name}</p>
            <p>Email:{data.email}</p>

            <div className={styles.btnGroup}>
              <button
                className={styles.delBtn}
                onClick={() => handleDelete(data._id)}
              >
                Delete
              </button>

              <button
                className={styles.delBtn}
                onClick={() => handleFormOpen(data)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        {isFormOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <span className={styles.closeBtn} onClick={onClose}>
                X
              </span>
              <BasicSignup user={selectedUser} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
