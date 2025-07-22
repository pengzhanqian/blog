import { sidebar } from "vuepress-theme-hope";
import { javaFirstSidebar } from "./sidebar_java_first.js";
import { interviewSidebar } from "./sidebar_interview.js";
import { javaBaseSidebar } from "./sidebar_java_base.js";
import { reactiveSidebar } from "./sidebar_reactive.js";

export default sidebar({
  '/md/note/interview/': interviewSidebar,
  '/md/note/java/':[
        {
            text: '初识JAVA',
            collapsible: true,
            children: javaFirstSidebar
        },
        {
            text: 'JAVA基础知识',
            collapsible: true,
            children: javaBaseSidebar
        },
        {
            text: '深入理解JVM',
            collapsible: true,
            children: [
                {
                    text: '深入理解JVM - ',
                    link: '/md/note/java/jvm/jvm_001.md',
                    collapsible: true
                }
            ]
        }
    ],
    '/md/note/go/':[
        {
            text: 'GoLang 基础',
            link: '/md/note/go/basic/',
            collapsible: true,
            children: [
                {
                    text: '第一章: 走进GoLang',
                    link: '/md/note/go/basic/golang_001.md'
                }
            ]
        }
    ],
    '/md/note/reactive/': reactiveSidebar,
    '/md/question/':[
        {
            text: '常见问题',
            collapsible: true,
            children: [
                {
                    text: 'Intellj Idea 问题',
                    collapsible: true,
                    children:[
                        {
                            text: '【Intellj Idea】idea启动时报错java: Internal error in the mapping processor: java.lang.NullPointerException',
                            link: '/md/question/idea/question_idea_001.md',
                            collapsible: true
                        }
                    ]
                },
                {
                    text: 'Intellj Idea 问题',
                    collapsible: true,
                    children: [
                        {
                            text: '什么是全双工、半双工?',
                            link: '/md/question/net/question_net_001.md',
                            collapsible: true
                        }
                    ]
                }
            ]
        }
    ],
    '/md/more/': [
        {
            text: '更多',
            collapsible: true,
            children: [
                {
                    text: '阿里',
                    collapsible: true,
                    children: [
                        {
                            text: 'Ali CentOS 7 Minimal的镜像下载',
                            link: '/md/more/ali/ali_001.md',
                            collapsible: true,
                        },
                        {
                            text: 'Ali CentOS 7 Minimal 新手教程引导',
                            link: '/md/more/ali/ali_002.md',
                            collapsible: true
                        }
                    ]
                },
                {
                    text: '随笔',
                    collapsible: true,
                    children: [
                        {
                            text: '随笔 - Linux命令',
                            link: '/md/more/essay/essay_001_linux_command.md',
                            collapsible: true
                        },
                        {
                            text: '随笔 - vuepress2.x',
                            link: '/md/more/essay/essay_002_vuepress.md',
                            collapsible: true
                        },
                        {
                            text: '随笔 - 常用DOS命令',
                            link: '/md/more/essay/essay_003_dos_command.md',
                            collapsible: true
                        },
                        {
                            text: '随笔 - windows下安装NodePad++',
                            link: '/md/more/essay/essay_004_nodepad.md',
                            collapsible: true
                        }
                    ]
                },
                {
                    text: '实操系列',
                    collapsible: true,
                    children: [
                        {
                            text: 'Window OS系统下Markdown转word的设置',
                            link: '/md/more/real-operation/ro_001.md',
                            collapsible: true
                        },
                        {
                            text: 'Windows系统下Vmware Workstation中安装及使用CentOS7系统超详细图文教程',
                            link: '/md/more/real-operation/ro_002.md',
                            collapsible: true
                        },
                        {
                            text: 'Windows11系统下彻底卸载Vmware Workstation虚拟机超详细图文教程',
                            link: '/md/more/real-operation/ro_003.md',
                            collapsible: true
                        }
                    ]
                },
            ]
        },
    ]
});
