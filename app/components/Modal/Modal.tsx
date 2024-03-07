import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

const App = ({ showModal, setShowModal }: any) => {
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Utilise useEffect pour mettre à jour selectedTime lors du montage du composant
  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    setSelectedTime(`${hours}:${minutes}`);
  }, []);

  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="modal1">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Modes de retrait</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="container">
                <div>Heure actuelle: {selectedTime}</div>
              </div>
            </div>
            <div className="text">
              <h3 className="text-center my-4" style={{ fontSize: "16px", border: "1px solid #EAEAEA", height: "40px", padding: "2%" }}>Aujourd'hui</h3>
            </div>
            <div>
              <label htmlFor="timeInput"></label>
              <input
                type="time"
                id="timeInput"
                className="timeInput"
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </div>
            <Button className="button">valider</Button>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .modal-content {
          background-color: white;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 5px;
          width: 30%;
          height: 70%;
        }
        .close {
          float: none;
          cursor: pointer;
          background-color: red;
          width: 5%;
          height: 5%;
          left: 20%;
        }       
      `}</style>
    </div>
  );
};

export default App;
