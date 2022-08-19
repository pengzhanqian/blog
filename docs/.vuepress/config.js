module.exports = {
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Java 全栈知识体系",            
            description: "包含: Java 基础, Spring..."
        }
    },
    host: '192.168.244.129',
    //title: 'java全栈知识体系',
    //description: '包含: Java 基础,Spring 基础...',
    port: 8082,
    repo: 'https://github.com/pengzhanqian/blog',
    base: '/',
    dest: 'dist',
    // md文档显示行数
    markdown: {
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
        nav: [ 
            { text: '首页', link: '/' },
            { text: 'JAVA', link: '/java_docs/' },
            { text: 'Spring', link: '/spring_docs/' },
            // {
            //     text: '2022',
            //     ariLabel: '2022',
            //     items: [
            //         { text: 'May', link: '/2022/5/' }
            //     ]
            // },
            { text: 'github', link: 'https://github.com/pengzhanqian/blog/tree/gh-pages' }
        ],
        // sidebar: { 
        //     '/2022/': [
        //         ['/2022/5/', '5月份']
        //     ]
        // }
    }
  }
  