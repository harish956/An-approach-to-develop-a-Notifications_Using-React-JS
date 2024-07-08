const Notification = (props) => {
  //  Write your code here.
  const { text, imageUrl, className } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img src={imageUrl} alt="img" className="image" />
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="background-container">
    <h1>Notifications</h1>
    <div className="content-container">
      <Notification
        text="Information Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="info-message"
      />
      <Notification
        text="Success Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-message"
      />
      <Notification
        text="Warning Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="warning-message"
      />
      <Notification
        text="Error Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="error-message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
