const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  ///////////////////////////////////////////////
  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/BlogPost/index.tsx`);

  const result = await graphql(
    `
      {
        allContentfulPressArticle {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading the articles.`,
      result.errors
    );
    return;
  }
  // Create blog posts pages
  const posts = result.data.allContentfulPressArticle.nodes;
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug;
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug;
      createPage({
        path: `/news/${post.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      linkedin: String
      medium: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      linkType: String
      title: String
      name: String
      description: String
      tags: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
