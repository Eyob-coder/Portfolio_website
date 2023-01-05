import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "antd";
import { Button as BsButton } from "react-bootstrap";
import "./ContMob.css";

const ContMob = () => {
  return (
    <div className="cont-mob">
      <div className="cont-mob-child" />
      <div className="lets-get-to">LETS GET TO WORK</div>
      <div className="regarding">Regarding:</div>
      <Input.TextArea
        className="regard-field-inputtextarea"
        style={{ width: "217px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <div className="how-can-i">How can i be of help?</div>
      <Input.TextArea
        className="help-field-inputtextarea"
        style={{ width: "145px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <div className="your-contact-info">Your contact info:</div>
      <div className="enter-email-here">Enter email here</div>
      <div className="enter-phone-here">Enter phone here</div>
      <div className="other-options">Other options</div>
      <Input.TextArea
        className="email-field-inputtextarea"
        style={{ width: "313px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <Input.TextArea
        className="email-field-inputtextarea1"
        style={{ width: "313px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <Input.TextArea
        className="email-field-inputtextarea2"
        style={{ width: "313px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <BsButton className="work-submit" variant="outline-primary">
        SUBMIT
      </BsButton>
    </div>
  );
};

export default ContMob;
