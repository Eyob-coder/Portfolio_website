import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "antd";
import { Button as BsButton } from "react-bootstrap";
import "./ContDesk.css";

const ContDesk = () => {
  return (
    <div className="cont-desk">
      <div className="work-outer" />
      <div className="lets-get-to1">LETS GET TO WORK</div>
      <div className="how-can-i1">How can i help?</div>
      <div className="your-contact-info1">Your contact info:</div>
      <div className="enter-email-here1">Enter email here</div>
      <div className="enter-phone-number">Enter phone number here</div>
      <div className="other-options1">Other options</div>
      <div className="regarding2">Regarding:</div>
      <Input.TextArea
        className="help-field-inputtextarea1"
        style={{ width: "401px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <Input.TextArea
        className="email-field-inputtextarea3"
        style={{ width: "401px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <Input.TextArea
        className="phone-field-inputtextarea"
        style={{ width: "401px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <Input.TextArea
        className="other-field-inputtextarea"
        style={{ width: "401px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <Input.TextArea
        className="regard-field-inputtextarea1"
        style={{ width: "401px" }}
        size="middle"
        placeholder="Placeholder"
      />
      <BsButton className="work-submit1" variant="outline-primary">
        SUBMIT
      </BsButton>
    </div>
  );
};

export default ContDesk;
