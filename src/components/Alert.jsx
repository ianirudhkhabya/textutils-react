import PropTypes from "prop-types";
import { useRef } from "react";

function Alert({ alert }) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const alertRef = useRef(null);

  const handleDismiss = () => {
    if (alertRef.current) {
      alertRef.current.classList.remove("show");
    }
  };

  return (
    <div style={{ height: "47px" }}>
      {alert && alert.type && alert.msg && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
          <button
            type="button"
            className="btn-close"
            onClick={handleDismiss}
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};

export default Alert;
