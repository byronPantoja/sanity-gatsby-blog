export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e80a3520b8f089a3d92abd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uwchg32i",
                  apiId: "e4b0afe8-af9d-4324-992f-264ced05b076",
                },
                {
                  buildHookId: "60e80a35aab72d9cb0390ac1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5ngzkr5j",
                  apiId: "ed80054e-cf4a-43a1-86b4-b774c939e8dc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/byronPantoja/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5ngzkr5j.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
