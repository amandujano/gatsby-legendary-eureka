import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Lang = ({ lang, onClick, selected }) => (
  <button
    style={{
      color: "yellow",
      marginRight: "10px",
      textDecoration: selected ? "underline" : "none",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {lang}
  </button>
)

const Header = props => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Lang
          lang="en"
          onClick={e => props.onLangClick("en")}
          selected={props.lang === "en"}
        />
        <Lang
          lang="es"
          onClick={e => props.onLangClick("es")}
          selected={props.lang === "es"}
        />
      </h1>
    </div>
    {console.log("from header: " + props.lang)}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
