import React from 'react';
import ga from 'react-ga';
const dev = process.env.NODE_ENV !== 'production';
if (!dev) ga.initialize('UA-92630735-3');

export default Component =>
  class WithAnalytics extends React.Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      this.trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;
      if (currentPage !== nextPage) this.trackPage(nextPage);
    }

    trackPage = page => {
      if (!dev) {
        ga.set({ page });
        ga.pageview(page);
      }
    };

    render() {
      return <Component {...this.props} />;
    }
  };

export const trackUser = userId => !dev && ga.set({ userId });

export const trackEvent = (category, action, label) =>
  !dev && ga.event({ category, action, label });