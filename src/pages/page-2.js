import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Trans } from "@lingui/macro"

//import { LocalizedLink, LocalesList } from "gatsby-theme-i18n"

const SecondPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="Page two" />
    <h1>
      <Trans>Hi from the second page</Trans>
    </h1>
    <p>
      <Trans>Hello World page 2</Trans>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
