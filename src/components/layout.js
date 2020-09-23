import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { navigate } from "gatsby-link"

var lang = ""
var path = ""
const defaultLanguage = "en"
const prefix = lang => (lang === defaultLanguage ? "/" : "/" + lang)
const deprefix = pathname =>
  pathname.startsWith("/es/") ? pathname.substr(4) : pathname

/** This function prepares language variables. */
const prepareVars = pathname => {
  lang = pathname.startsWith("/es/") ? "es" : "en"
  path = pathname
}

/** This function sets the language path page when language change. */
const onLangChange = lang => {
  navigate(prefix(lang) + deprefix(path))
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {prepareVars(location)}
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        lang={lang}
        onLangClick={onLangChange}
      />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
