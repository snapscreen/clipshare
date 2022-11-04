import React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo, Button } from "@/components";

const HowItWorks: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="How SnapOdds works" />
      <Hero
        title="ClipShare engages your fans and drives revenue."
        lead="ClipShare is a component (SDK) that gets integrated into media apps and websites. Additionally, we offer turn-key white-label solutions if no integration is desired or for faster time to market."
      >
      </Hero>
      <Container>
        <div
          className="w-full relative aspect-video mb-8"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src="https://www.youtube.com/embed/KeF4s-Dn5TI?start=320"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="flex flex-col my-24 space-y-8">
          <p className="mx-auto max-w-screen-lg text-2xl">
            Your user simply opens the browser (or app) on the phone, snaps the TV screen (works perfectly from a long distance), that takes the user to that exact moment in the broadcast/stream. The user reverses backward to the moment he/she wants to share, clips up to 30sec and shares where he/she wants all in high definition and perfect audio.
          </p>
          <p className="mx-auto max-w-screen-lg text-2xl">
            The content clipped also has the ability to be top and tailed with graphics or pre/post roll. Everything is measurable.
          </p>
          <Button
            as="link"
            to="/contact"
            styleType="primary"
            className="mx-auto"
          >
            Get in touch
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default HowItWorks;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulFaq(
      filter: { metadata: { tags: { elemMatch: { name: { eq: "help" } } } } }
    ) {
      edges {
        node {
          id
          question
          author
          answer {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 1000)
                __typename
              }
            }
          }
          createdAt
          metadata {
            tags {
              name
            }
          }
        }
      }
    }
  }
`;
