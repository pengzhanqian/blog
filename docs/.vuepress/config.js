module.exports = {
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Java 知识体系学习",            
            description: "包含: Java 基础, Spring..."
        }
    },
    host: '192.168.91.129',
    port: 8082,
    repo: 'https://github.com/pengzhanqian/blog',
    base: '/',
    //编译后的文件位置设置 默认 .vuepress/dist
    //dest: '',
    // markdown 设置
    markdown: {
        //md文档显示行数
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    head: [
        // favicon.ico 网站icon
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "pengzhanqian"}],
        ["meta", {name: "keywords", content: "Java 基础,Spring 基础"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
    ],
    plugins: [
        ['@vuepress/back-to-top',true],
        [['vuepress-plugin-code-copy', true]]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: { 
        //logo: '/img/logo.png',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
         // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        //页面滚动效果展示
        smoothScroll: true,
        sidebarDepth: 4,
        nav: [ 
            { 
                text: '首页', 
                link: '/' 
            },
            { 
                text: 'JAVA', 
                link: '/java_docs/'
             },
            { 
                text: 'Spring',
                 link: '/spring_docs/'
            },
            { 
                text: '关于',
                link: '/about_docs/',
                ariLabel: '关于',
                items: [
                    { 
                        text: '关于 - 我',
                        link: '/about_docs/about_me_docs/',
                        ariLabel: '关于 - 我',
                        items: [
                            { text: '关于 - 我', ariLabel: '关于 - 我',link: '/about_docs/about_me_docs/关于 - 我' },
                        ]
                    },
                    { 
                        text: '关于 - 本文档的搭建',
                        link: '/about_docs/about_vuepress_docs/',
                        ariLabel: '关于 - 本文档的搭建',
                        items: [
                            { text: '关于 - 本文档的插件', ariLabel: '关于 - 本文档的插件',link: '/about_docs/about_vuepress_docs/关于 - 本文档的插件' },
                        ]
                    }
                ]
            },
            { text: 'github', link: 'https://github.com/pengzhanqian/blog/tree/gh-pages' }
        ],
        sidebar: {
            sidebarDepth: 4,
            '/about_docs/': [
                // {
                //     title: '关于',
                //     collapsable: true,
                //     path: "/about_docs/",
                // },
                {
                    title: '关于',
                    collapsable: false,
                    path: "/about_docs/about_me_docs/",
                    children: [
                        {
                            title: '关于 - 我',
                            collapsable: false,
                            path: "/about_docs/about_me_docs/关于 - 我"
                        }
                    ]
                },
                {
                    title: '关于 - 本文档的搭建',
                    collapsable: false,
                    path: "/about_docs/about_vuepress_docs/",
                    children: [
                        {
                            title: '关于 - 本文档的插件',
                            collapsable: false,
                            path: "/about_docs/about_vuepress_docs/关于 - 本文档的插件",
                        }
                    ]
                }
            ]
        }
    }
  }
  