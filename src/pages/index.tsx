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
  LogoCloud,
} from "@/components";

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  let sportsBar = "sportsbar.jpg";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="We make TV socially shareable and monetizable." />
      <Hero
        title="We make TV socially shareable and monetizable."
        img={sportsBar}
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
          <div className="mt-8 text-left gap-4 grid grid-cols-2 lg:grid-cols-3 max-w-lg">
            <DefinitionList term="Response time" definition="100ms" />
            <DefinitionList term="Accuracy" definition="100%" />
            <DefinitionList term="Sports leagues" definition="All major" />
          </div>
        </div>
        <div className="hidden mx-auto sm:block sm:w-1/2 lg:w-1/3 sm:absolute right-0 -bottom-8">
          <StaticImage
            src="../images/iphone.png"
            alt="Snap TV"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </Hero>
      <LogoCloud />
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