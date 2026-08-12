// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-started-my-phd-at-nus",
          title: 'Started my PhD at NUS!',
          description: "",
          section: "News",},{id: "news-off-to-beautiful-cape-town-for-the-cooperative-ai-research-fellowship-see-you-in-three-months",
          title: 'Off to beautiful Cape Town for the Cooperative AI Research Fellowship! See you...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-the-first-paper-out-of-my-phd-evaluating-rational-contracting-in-natural-language-is-now-on-arxiv",
          title: 'Happy to share that the first paper out of my PhD, Evaluating Rational...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%73%61%6A%6A%61@%75.%6E%75%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sbhavyesh", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=kl6dwW4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
