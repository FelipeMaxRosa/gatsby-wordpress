const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `);

  // Check for erros
  if (results.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, results.errors);
    return;
  }

  const { wp, allWpCategory } = results.data;
  console.log(results);
};
