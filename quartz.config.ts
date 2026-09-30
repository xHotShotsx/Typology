import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Socion Archive",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-GB",
    baseUrl: "socionarchive.org",
    defaultDateType: "modified",
    ignorePatterns: ["private", "templates", ".obsidian"],
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f0f1f1",       // page background (estimate, see below)
          lightgray: "#e2e4e6",   // borders and rules (estimate)
          gray: "#5a6c83",        // metadata, nav text, chevrons
          darkgray: "#323f55",    // body text
          dark: "#11192c",        // headings, bold, sidebar items, site title
          secondary: "#1d4281",   // kicker, links, EN button, CTA box
          tertiary: "#2f6ccb",    // hover (my pick, not visible on the page)
          highlight: "rgba(29, 66, 129, 0.10)",   // my pick
          textHighlight: "#1d428133",             // my pick
        },
        darkMode: {
          light: "#0c1422",
          lightgray: "#2b3445",
          gray: "#8192a6",
          darkgray: "#adbacb",
          dark: "#dde6f1",
          secondary: "#6b9edd",
          tertiary: "#2f6ccb",    // the CTA box blue; hover itself isn't visible
          highlight: "rgba(107, 158, 221, 0.12)", // my pick
          textHighlight: "#6b9edd33",             // my pick
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
     // Plugin.CustomOgImages(),
    ],
  },
}

export default config
