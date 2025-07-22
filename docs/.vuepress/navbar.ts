import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  // "/demo/",
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  {
    text: '面试',
    icon: 'fa6-solid:interview',
    link: '/md/note/interview/',
  },
  {
      text: '学习笔记',
      icon: 'fa6-solid:book-open',
      children:[
        {
          text: '学习笔记 - JAVA',
          icon: 'fa6-brands:java',
          children: [
            {
              text: '初识JAVA',
              link: '/md/note/java/first/first_001.md'
            },
            {
              text: 'JAVA基础知识',
              link: '/md/note/java/basic/basic_001.md'
            },
            {
              text: '深入理解JVM',
              link: '/md/note/java/jvm/jvm_001.md'
            }
          ]
        },
        {
          text: '学习笔记 - GO',
          icon: 'fa6-brands:golang',
          children: [
            {
              text: 'GoLang 基础',
              link: '/md/note/go/basic/golang_001.md'
            }
          ]
        },
        {
          text: '学习笔记 - 响应式编程',
          icon: 'fa6-solid:code',
          children: [
            {
              text: '第一章: 走进响应式编程',
              link: '/md/note/reactive/reactive_001.md'
            }
          ]
        }
      ]
    },
    {
      text: '常见问题',
      icon: 'fa6-solid:question',
      link: '/md/question/',
      children:[
        {
            text: 'intellj idea BUG',
            link: '/md/question/idea/question_idea_001.md'
        },
        {
            text: '网络相关知识',
            link: '/md/question/net/question_net_001.md'
        }
      ]
    },
    {
      text: '更多',
      icon: 'fa6-solid:ellipsis',
      children:[
        {
          text: '阿里',
          link: '/md/more/ali/ali_001.md'
        },
        {
          text: '随笔',
          link: '/md/more/essay/essay_001_linux_command.md'
        },
        {
          text: '实操系列',
          link: '/md/more/real-operation/ro_001.md'
        }
      ]
    },
]);
