import React, { useState } from "react";
import "./websiteInfo.css";

function WebsiteInfo() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedDeveloper(null);
    setShowModal(false);
  };

  return (
    <div className="website-info">
      <h1 className="Header">Welcome to our Website!</h1>
      <p>
        The aim of this project is to research, design, and develop a mobile
        application forecasting website for the benefit of developers,
        entrepreneurs, organizations, individuals, or any with interest.
      </p>
      {/* <h2>About Us</h2> */}
      <p>
        Our project aims to investigate and research existing work and determine
        its effectiveness. As a result, it will provide insight and potential
        for the use of machine learning techniques in product demand
        forecasting. For many developers and others with an interest in this
        sector, this contribution will support decision-making.
      </p>
      {/* <h2>Contact Us</h2>
      <p>
        If you have any questions, comments, or feedback, please don't hesitate
        to contact us.
      </p> */}
      {/* <ul>
        <li>INFO</li>
        <li>INFO</li>
        <li>INFO</li>
      </ul> */}
      <h2>Meet Our Developers</h2>
      <div className="developers">
        <div
          className="developer"
          onClick={() =>
            handleDeveloperClick({
              name: "Sheran",
              role: "Back-end Developer",
              imgSrc: "https://via.placeholder.com/150",
              bio: "Sheran is 20 years old and he works full-time as a software developer while simultaneously attending lectures. He is also a major anime lover who’s also fluent in Japanese. His dream is to visit Japan someday or to have a career in Japan in the future.",
            })
          }
        >
          <img src="https://via.placeholder.com/150" alt="Developer 1" />
          <h3>Sheran</h3>
          <p>Back-end Developer</p>
        </div>
        <div
          className="developer"
          onClick={() =>
            handleDeveloperClick({
              name: "Dinithi",
              role: "Back-end Developer",
              imgSrc:
                "https://media.licdn.com/dms/image/C5603AQH3vBGCHUml5g/profile-displayphoto-shrink_800_800/0/1657618097247?e=1686182400&v=beta&t=u6FTYQ72gs99fGv_S0thtIMiBAFgW_k7K6wwTkYtDOQ",
              bio: "Dinithi is 21 years old and she is doing her degree full-time and is interested in the machine learning and data science field. Her dream is to get an internship at a good company during her industry placement year.",
            })
          }
        >
          <img
            src="https://media.licdn.com/dms/image/C5603AQH3vBGCHUml5g/profile-displayphoto-shrink_800_800/0/1657618097247?e=1686182400&v=beta&t=u6FTYQ72gs99fGv_S0thtIMiBAFgW_k7K6wwTkYtDOQ"
            alt="Developer 2"
          />
          <h3>Dinithi</h3>
          <p>Back-end Developer</p>
        </div>
        <div
          className="developer"
          onClick={() =>
            handleDeveloperClick({
              name: "Nehtruwan",
              role: "Full-stack Developer",
              imgSrc:
                "https://media.licdn.com/dms/image/D5603AQFxnJzOGqAbaQ/profile-displayphoto-shrink_800_800/0/1677432603053?e=1686182400&v=beta&t=w0YF9Myhu5sareQETv0j0MFN8RT_SqOXJl6ZcuZ1yrU",
              bio: "Nethruwan is 21 years old and he’s also doing his degree full-time. Just like Sheran, he’s also an anime lover. He plans to have a career as a  web developer in the future.",
            })
          }
        >
          <img
            src="https://media.licdn.com/dms/image/D5603AQFxnJzOGqAbaQ/profile-displayphoto-shrink_800_800/0/1677432603053?e=1686182400&v=beta&t=w0YF9Myhu5sareQETv0j0MFN8RT_SqOXJl6ZcuZ1yrU"
            alt="Developer 3"
          />
          <h3>Nehtruwan</h3>
          <p>Full-stack Developer</p>
        </div>

        <div
          className="developer"
          onClick={() =>
            handleDeveloperClick({
              name: "Shanuka",
              role: "Front-End Developer",
              imgSrc: "https://via.placeholder.com/150",
              bio: "Maria is a full-stack developer with over 6 years of experience.",
            })
          }
        >
          <img src="https://via.placeholder.com/150" alt="Developer 5" />
          <h3>Shanuka</h3>
          <p>Front-End Developer</p>
        </div>
        <div
          className="developer"
          onClick={() =>
            handleDeveloperClick({
              name: "Maazin",
              role: "Front-end Developer",
              imgSrc:
                "https://media.licdn.com/dms/image/C4E03AQFHbDjDJYKgdQ/profile-displayphoto-shrink_800_800/0/1663234902659?e=1686182400&v=beta&t=hVPaiDkYxiUWDf779qf-IP1YdURGRs34g5EzO7oG8jQ",
              bio: "Maazin is 22 years old and is interested in UI/UX field and plans to have his future career in that field. He is also a budding photographer who’s doing photography part-time amidst college work.",
            })
          }
        >
          <img
            src="https://media.licdn.com/dms/image/C4E03AQFHbDjDJYKgdQ/profile-displayphoto-shrink_800_800/0/1663234902659?e=1686182400&v=beta&t=hVPaiDkYxiUWDf779qf-IP1YdURGRs34g5EzO7oG8jQ"
            alt="Developer 5"
          />
          <h3>Maazin</h3>
          <p>Front-end Developer</p>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              ×
            </span>
            <h2>{selectedDeveloper.name}</h2>
            <img src={selectedDeveloper.imgSrc} alt={selectedDeveloper.name} />
            <p>{selectedDeveloper.role}</p>
            <p>{selectedDeveloper.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WebsiteInfo;
