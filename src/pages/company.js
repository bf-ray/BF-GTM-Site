import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const CompanyPage = () => (
  <Layout>
    <SEO title="Company" />
    <h1>About BorderFree Financial</h1>
    <h3>And now some more secondary headline text with more information and such</h3>
    <h4>Subheading</h4>
    <p>BorderFree asdf asdsdf asdfdfa asdasdf asdf as a asdf</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare, dolor sed faucibus scelerisque, risus tortor congue augue, placerat ullamcorper metus turpis eu est. Ut condimentum, magna ac malesuada ultrices, orci felis rutrum tellus, sed luctus velit felis at neque. Fusce libero purus, fringilla ornare fermentum ac, hendrerit et diam. Sed scelerisque, ante nec tempor feugiat, sem diam sollicitudin eros, eleifend dignissim enim urna in nulla. Phasellus commodo vehicula odio et luctus. Nulla mollis dolor sapien, a imperdiet purus aliquam quis. Aliquam eu dapibus libero, vel ultricies turpis. Etiam quis augue nec mauris sagittis fringilla. Praesent at tempor augue, ut laoreet nisl. Etiam rhoncus interdum nunc, accumsan convallis quam tempus ut. Donec at orci nisi.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </Layout>
)

export default CompanyPage