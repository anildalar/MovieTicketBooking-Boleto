import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const NonAuthLayout = (props) => {
  useEffect(() => {
    const title = props.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);

    document.title =
      currentage + " | Minible - Responsive Bootstrap 5 Admin Dashboard";
  }, [props.location.pathname]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(NonAuthLayout);
