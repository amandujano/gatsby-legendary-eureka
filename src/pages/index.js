import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Trans } from "@lingui/macro"
import { LocalizedLink, LocalesList } from "gatsby-theme-i18n"

const IndexPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="Home" />
    <h1>
      <Trans>Hello World</Trans>
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      <LocalizedLink to="/page-2/">
        <Trans>Link to second page</Trans>
      </LocalizedLink>
    </p>
    <p>
      <LocalizedLink to="/page-2/" language="es">
        <Trans>Link to second page (spanish version)</Trans>
      </LocalizedLink>
    </p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <LocalesList />
  </Layout>
)

export default IndexPage
