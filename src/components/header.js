import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import styles from './header.module.css'
import { Helmet } from 'react-helmet'

import icBack from '../images/icBack.png'

const GetLocation = () => (
  <Location>
    {({ location }) => {
      console.log(location.pathname)
      if (location.pathname.includes('blog/')) {
        return (
          <Link to="/blog">
            <img
              className={styles.backBTN}
              src={icBack}
              style={{ height: '24px' }}
              alt="back button"
            />
          </Link>
        )
      } else if (location.pathname.includes('/ideas')) {
        return (
          <Link to="/">
            <img
              className={styles.backBTN}
              src={icBack}
              style={{ height: '24px' }}
              alt="back button"
            />
          </Link>
        )
      }
    }}
  </Location>
)

const Header = ({ siteTitle }) => {
  return (
    <div
      style={{
        background: '#212121',
        marginBottom: '1.45rem',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Creative Box</title>
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <GetLocation />
        <h1 className={styles.siteHeader}>
          <Link to="/" className={styles.siteHeaderLink}>
            {siteTitle}
          </Link>
        </h1>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link to="/ideas">Ideas</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
