/* eslint-disable react/prop-types */
import styles from "./Card.module.scss"
export default function Card({ name, gender, image, status }) {
  return (

    <div className="card">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Gender: {gender}</p>
      </div>

      {(() => {
        if (status === "Dead") {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-danger p-3`}
            >
              {status}
            </div>
          );
        } else if (status === "Alive") {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-success p-3`}
            >
              {status}
            </div>
          );
        } else {
          return (
            <div
              className={`${styles.badge} position-absolute badge bg-secondary p-3`}
            >
              {status}
            </div>
          );
        }
      })()}
    </div>
  )
}

export { Card }