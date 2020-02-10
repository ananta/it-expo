let siteMetadata = {
    title: `GCES IT EXPO`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/logo.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `DREAM | CODE | INSPIRE`,
    description: `Gandaki College of Engineering and Science is organizing "GCES IT
    Expo 2020" on 15th and 16th February 2020 (3rd to 4th Falgun 2076)
    in the college premise itself at Lamachaur, Pokhara, Nepal`,
    author: `@4nnt4`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "EVENTS",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/ananta"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/gces.pokhara/"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://www.twitter.com"
        }
    ],
    contact: {
        api_url: "./test.json",
        description: `Gandaki College of Engineering and Science is a leader among colleges offering degrees in Computer Science in Nepal.`,
        mail: "gces@gces.edu.np",
        phone: " +977-61-440866",
        address:
            "Gandaki College of Engineering and Science \nPO Box: 9, \n Lamachaur, Pokhara, Nepal"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/images/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
