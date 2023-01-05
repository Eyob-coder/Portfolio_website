import "./OverlayDesk.css";

const OverlayDesk = ({ onClose }) => {
  return (
    <div className="overlay-desk">
      <div className="load-outer" />
      <img className="gif-icon" alt="" src="../gif@2x.png" />
    </div>
  );
};

export default OverlayDesk;
