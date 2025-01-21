// src/components/templates/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

import PropTypes from 'prop-types';

const SEO = ({
  title = 'Transpiled',
  description = 'Web, Mobile and Custom App Development Services',
  canonical,
  ogImage = 'https://storage.googleapis.com/transpiled-web/logos/transpiled-white-bg/l.png',
  ogType = 'website',
  noindex = false,
}) => {
  const siteUrl = 'https://transpiled.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Transpiled" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
  twitterCreator: PropTypes.string,
  noindex: PropTypes.bool,
};

export default SEO;
