import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import {
  Layout,
  Button,
  FaqList,
  Container,
  Hero,
  Seo,
  DownloadBadge,
} from "@/components";

var QRCode = require("qrcode.react");

const TryNow: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  let url = "https://nba.snapscreen.com/";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="See how it works" />
      <Hero
        title="Try and experience ClipShare yourself!"
        lead="We developed a demo app and mobile website so you can see how ClipShare works. Snap the demo game video below on this page."
      ></Hero>
      <Container>
        <ol className="relative mb-8 prose prose-lg lg:prose-xl mx-auto space-y-16 text-center">
          <li>
            <h2 className="text-center">
              1. Open our demo app with your mobile phone.
            </h2>
            <div className="hidden md:block ">
              <div className="rect">
                <span>
                  <QRCode
                    value={url}
                    renderAs={"svg"}
                    className="mx-auto p-2 bg-white"
                  />
                </span>
              </div>
            </div>
            <p className="text-lg">
              <a
                target="_blank"
                className="text-current underline"
                href="https://nba.snapscreen.com"
              >
                https://nba.snapscreen.com
              </a>
            </p>
            <div className="flex justify-center mt-8" aria-hidden="true">
              <span className="flex h-24 w-0.5 bg-skin-fg" aria-hidden="true" />
            </div>
          </li>
          <li>
            <h2 className="text-center">
              2. Play and snap the demo game on a second screen or TV.
            </h2>
            <div
              className="w-full relative aspect-video"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://player.vimeo.com/video/768106843?h=ccde211030"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p>
              <small>The video above is only for demo purposes only.</small>
            </p>
          </li>
          <li>
            <h2 className="text-center">
              3. Snap the game with our demo app.
            </h2>
            <div className="flex justify-center mt-8" aria-hidden="true">
              <span className="flex h-24 w-0.5 bg-skin-fg" aria-hidden="true" />
            </div>
          </li>
          <li>
            <h2 className="text-center">
              <span aria-label="Celebrate" role="img">
                ????
              </span>
              <span className="sr-only">Magic!</span>
            </h2>
            <p>Great! How simple was that?</p>
            <Button to="/contact" as="link" styleType="primary">
              Interested? Get in touch.
            </Button>
          </li>
        </ol>
        <div className="pt-8 mt-16 border-t border-skin-base-muted">
          <h2 className="text-center text-3xl">Usage related FAQs</h2>
          <FaqList data={data} />
        </div>
      </Container>
    </Layout>
  );
};

export default TryNow;

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
