import React from 'react';
import { LoadingOutlined, CloseCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const Layout = ({loading, error, children}) => {
  if (loading) return <div data-testid='spinner-wrapper'><LoadingOutlined /> Fetching Data... </div>
  if (error) return <div data-testid='error-wrapper'><CloseCircleOutlined /> Error while fetching... </div>
  
  return (
    <div style={{ padding: 20 }}> 
      {children}
    </div>
  );
};

Layout.prototype = {
  loading: PropTypes.bool,
  error: PropTypes.bool
};

export default Layout;
