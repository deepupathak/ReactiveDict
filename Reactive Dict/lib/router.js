import React, { Component, PropTypes } from 'react';

import homePage from '/imports/ui/homePage.jsx';
import Page1 from '/imports/ui/Page1.jsx';
import Header from '/imports/ui/header.jsx';
import Footer from '/imports/ui/footer.jsx';

FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(homePage,{
    	header: <Header />,
    	main: <Page1 />,
    	footer: <Footer />
    });
  }
});