import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { s3 } from 'common/constants/urls';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './PartnerLogoLink.css';

export default class PartnerLogoLink extends Component {
  static propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { logo, name, url } = this.props;

    return (
      <div className={styles.PartnerLogoLink}>
        <OutboundLink
          href={url}
          analyticsEventLabel={`Partner Logo Click - ${name}`}
          hasIcon={false}
        >
          <img className={styles.logo} src={`${s3}${logo}`} alt={`${name} logo`} />
        </OutboundLink>
      </div>
    );
  }
}
