import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import {
  Layout,
  NewsReleaseList,
  NewsLinkList,
  Container,
  Hero,
  Button,
  Seo,
} from "@/components";
import { DownloadIcon } from "@heroicons/react/outline";

const News: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Newsroom and Press" />
      <Hero
        title="Newsroom and Press"
        lead="Below you will find our press releases and brand assets."
      ></Hero>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-8">
          <section id="articles" className="space-y-8 md:col-span-7">
            <NewsReleaseList />
            <NewsLinkList />
          </section>
          <section className="md:col-span-5">
            <div className="prose prose-lg sm:p-4">
              <h2>About Snapscreen, Inc.</h2>
              <p className="py-2">
                Based in New York with offices in Austria and Australia,
                Snapscreen is a technology company focused on the use of mobile
                devices and image recognition for broadcast TV and streaming in
                the world of sports and entertainment.
              </p>
              <h2>Images for Press</h2>
              <div className="py-2">
                <div className="flex flex-col items-start items-center">
                  <StaticImage
                    src="../images/Thomas-Willomitzer-Portrait-SnapOdds.jpg"
                    alt="Portrait of Thomas Willomitzer, CEO Snapscreen Inc."
                    placeholder="blurred"
                    layout="fixed"
                    height={300}
                    width={300}
                    className="w-full mr-auto"
                  />
                  <figcaption className="w-full flex-1">
                    <p>
                      Thomas Willomitzer
                      <br />
                      Founder & CEO – Snapscreen, Inc.
                    </p>
                    <Button
                      as="externalLink"
                      href="https://raw.githubusercontent.com/snapscreen/snapodds/main/src/images/Thomas-Willomitzer-Portrait-SnapOdds.jpg"
                      styleType="normal"
                    >
                      <span>Download JPG</span>
                      <DownloadIcon className="w-6 h-6" />
                    </Button>
                  </figcaption>
                </div>
              </div>
            </div>
            {/*
            <hr className="mt-4 border-skin-base-muted" />
            */}
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default News;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
