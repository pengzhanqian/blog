import { sidebar } from "vuepress-theme-hope";
import { interviewSidebar } from "./sidebars/sidebar_interview.js";
import { reactiveSidebar } from "./sidebars/sidebar_reactive.js";
import { javaSidebar } from "./sidebars/sidebar_java.js";
import { questionSidebar } from "./sidebars/sidebar_question.js";
import { moreSidebar } from "./sidebars/sidebar_more.js";
import { goSidebar } from "./sidebars/sidebar_go.js";

export default sidebar({
    '/md/note/interview/': interviewSidebar,
    '/md/note/java/': javaSidebar,
    '/md/note/go/': goSidebar,
    '/md/note/reactive/': reactiveSidebar,
    '/md/question/': questionSidebar,
    '/md/more/': moreSidebar
});
