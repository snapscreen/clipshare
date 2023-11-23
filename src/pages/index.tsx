import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
  Button,
  Seo,
  SupportedBy,
  DefinitionList,
} from "@/components";

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  let heroImg = "hero.jpg";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="We make TV socially shareable and monetizable." />
      <Hero
        title="We make TV socially shareable and monetizable."
        img={heroImg}
      >
        <div className="w-full sm:pr-96 lg:pr-96">
          <p className="lead">
            ClipShare is enhancing Fan Experience by leveraging behaviours that are already commonplace.
            ClipShare of course works on all common social media channels.
          </p>
          <div className="flex mt-8">
            <Button
              as="link"
              to="/how-it-works"
              styleType="primary"
              className="my-auto"
            >
              How it works
            </Button>
          </div>
        </div>
      </Hero>
      {/*
      <LogoCloud />
      */}
      <Container>
        <SupportedBy />
      </Container>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
