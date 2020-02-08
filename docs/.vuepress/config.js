module.exports = {
  title: "VuePress-Creator",
  description: "A lightweight creator for VuePress project.",
  dest: "./dist",
  base: "{{ basePath }}",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: {{ lineNumbers }}
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./nav"),
    sidebar: require("./sidebar"),
    sidebarDepth: 3,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    repo: "{{ getRepo }}",
    editLinks: {{ editLinks }},
    editLinkText: "Is something wrong or missing? Edit this page on github!"
  },
  module: {
    {{{ useLess }}}
  }
};