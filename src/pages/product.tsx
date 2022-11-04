import * as React from "react";

import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo } from "@/components";

const Product: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Product" />
      <Hero
        title="Product"
        lead="Learn more about ClipShare"
      ></Hero>
      <Container>
        TBC
      </Container>
    </Layout>
  );
};

export default Product;
