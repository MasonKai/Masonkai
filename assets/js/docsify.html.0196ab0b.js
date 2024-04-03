"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3689],{3671:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,s]of t)a[e]=s;return a}},5470:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>Z,data:()=>I});var s=a(7847);const i={href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},n={href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Lk)("h2",{id:"插件",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#插件"},[(0,s.Lk)("span",null,"插件")])],-1),l={href:"https://github.com/docsifyjs/awesome-docsify#plugins",target:"_blank",rel:"noopener noreferrer"},r={class:"task-list-container"},c={class:"task-list-item"},d=(0,s.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",checked:"checked",disabled:"disabled"},null,-1),p={class:"task-list-item-label",for:"task-item-0"},h={href:"https://notebook.js.org/#/README",target:"_blank",rel:"noopener noreferrer"},k={class:"task-list-item"},f=(0,s.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"},null,-1),u={class:"task-list-item-label",for:"task-item-1"},b={href:"https://github.com/827652549/docsify-count",target:"_blank",rel:"noopener noreferrer"},m={class:"task-list-item"},y=(0,s.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-2",checked:"checked",disabled:"disabled"},null,-1),g={class:"task-list-item-label",for:"task-item-2"},L={href:"https://github.com/cxcn/docsify-waline/blob/main/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"},v={class:"task-list-item"},W=(0,s.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-3",checked:"checked",disabled:"disabled"},null,-1),x={class:"task-list-item-label",for:"task-item-3"},_={href:"https://github.com/mrpotatoes/docsify-toc",target:"_blank",rel:"noopener noreferrer"},j={href:"https://tainacan.github.io/tainacan-wiki/#/general-concepts",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/dromara/sureness/blob/master/docs/index.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://wiki.lifeupapp.fun/zh-cn/#/features/174",target:"_blank",rel:"noopener noreferrer"},z={class:"task-list-item"},C=(0,s.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-4",checked:"checked",disabled:"disabled"},null,-1),D={class:"task-list-item-label",for:"task-item-4"},E={href:"https://github.com/meff34/docsify-to-pdf-converter",target:"_blank",rel:"noopener noreferrer"},M=(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.Lk)("code",null,"illegal operation on a directory"),(0,s.eW)(" 报错：sidebar 中不要使用简写地址，将 "),(0,s.Lk)("code",null,"main/"),(0,s.eW)(" 改为 "),(0,s.Lk)("code",null,"main/README.md"),(0,s.eW)("，否则将读取到目录而报错。")]),(0,s.Lk)("li",null,[(0,s.Lk)("code",null,"'node_modules' 不是内部或外部命令"),(0,s.eW)(" 报错：将 package.json 的设置修改为 "),(0,s.Lk)("code",null,'"convert": "node_modules\\\\.bin\\\\docsify-pdf-converter"'),(0,s.eW)("。这问题多发生在 Windows，是由 Windows 与 Linux 路径规则不同而引起的。")])],-1),N=(0,s.Lk)("h2",{id:"配置",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#配置"},[(0,s.Lk)("span",null,"配置")])],-1),T=(0,s.Lk)("h3",{id:"docsify-emoji",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#docsify-emoji"},[(0,s.Lk)("span",null,"docsify emoji")])],-1),A={href:"https://docsify.js.org/#/zh-cn/plugins?id=emoji",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Lk)("code",null,"&#58;",-1),S=(0,s.Lk)("code",null,":100:",-1),R=(0,s.Lk)("code",null,"&#58;100:",-1),G=(0,s.Lk)("p",null,"实际使用中，我直接复制 emoji，都能正常显示。",-1),H=(0,s.Lk)("h2",{id:"本地命令",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#本地命令"},[(0,s.Lk)("span",null,"本地命令")])],-1),q={href:"https://github.com/docsifyjs/docsify-cli",target:"_blank",rel:"noopener noreferrer"},K=(0,s.Fv)('<p><code>&lt;path&gt;</code> 默认为当前路径，可使用子文件夹指定路径，如 <code>./docs</code> 或 <code>docs</code>。</p><p><code>[]</code> 为可省略命令区，无实际作用，输出时需要去除。</p><h3 id="serve-启动" tabindex="-1"><a class="header-anchor" href="#serve-启动"><span>Serve 启动</span></a></h3><p>若要在电脑上查看 docsify 页面，可执行 serve 架构命令，在本地主机上运行服务。默认本地端口为 3000，可以指定端口。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>docsify serve <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--open false<span class="token punctuation">]</span> <span class="token punctuation">[</span>--port <span class="token number">3000</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用时不要关闭命令终端，否则 serve 也会停止。</p><h3 id="生成侧边栏" tabindex="-1"><a class="header-anchor" href="#生成侧边栏"><span>生成侧边栏</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>docsify generate <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--sidebar _sidebar.md<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>generate 命令会遍历指定目录及其子目录的所有 markdown 文件，并生成全路径的 _sidebar.md。<code>&lt;path&gt;</code> 不能省略，需指定子文件夹路径。</p><p>如果路径中存在 _sidebar.md，则会报错。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="引用路径" tabindex="-1"><a class="header-anchor" href="#引用路径"><span>引用路径</span></a></h3><p>docsify 引用内部文件时，路径会自带添加域名。</p><p>例如：指向子文档时，链接是 <code>子文件夹/文档名.md</code>；指向子文档的小标题时，链接是 <code>子文件夹/文档名？id=小标题</code>。</p><h3 id="页面未同步更新" tabindex="-1"><a class="header-anchor" href="#页面未同步更新"><span>页面未同步更新</span></a></h3><blockquote><p>CDN 默认是有缓存的，如果文件更新，访问的可能不是最新的文件。</p><p>我设置了 routerMode 为 history，使用 CDN 访问非首页，再次刷新会找不到文件。</p><p>如果开启了 <code>relativePath: true</code>，文件可以找到，但是侧栏上边的标题点击又有点问题。</p></blockquote><h3 id="github-pages-报错" tabindex="-1"><a class="header-anchor" href="#github-pages-报错"><span>GitHub Pages 报错</span></a></h3><p>如果 SSL 链接 404 报错，显示「There isn&#39;t a GitHub Pages site here」，则目录中加入 <code>CNAME</code> 文件。</p>',18),O={},Z=(0,a(3671).A)(O,[["render",function(e,t){const a=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("p",null,[(0,s.Lk)("a",i,[(0,s.eW)("docsify"),(0,s.bF)(a)]),(0,s.eW)(" 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。")]),(0,s.Lk)("p",null,[(0,s.eW)("本页集中了我使用 docsify 中遇到的问题，新手先看 "),(0,s.Lk)("a",n,[(0,s.eW)("docsify 入门文档"),(0,s.bF)(a)]),(0,s.eW)("。")]),o,(0,s.Lk)("p",null,[(0,s.Lk)("a",l,[(0,s.eW)("docsify 插件列表"),(0,s.bF)(a)]),(0,s.eW)("：")]),(0,s.Lk)("ul",r,[(0,s.Lk)("li",c,[d,(0,s.Lk)("label",p,[(0,s.Lk)("a",h,[(0,s.eW)("docsify 笔记类参考"),(0,s.bF)(a)]),(0,s.eW)("：看板娘，多级页面，页面点击效果，网站运行时间。")])]),(0,s.Lk)("li",k,[f,(0,s.Lk)("label",u,[(0,s.Lk)("a",b,[(0,s.eW)("docsify-count"),(0,s.bF)(a)]),(0,s.eW)("：docsify 的字数和阅读时长插件。")])]),(0,s.Lk)("li",m,[y,(0,s.Lk)("label",g,[(0,s.Lk)("a",L,[(0,s.eW)("docsify-waline"),(0,s.bF)(a)]),(0,s.eW)("：提供评论功能的同时，借用 docsify-count 接口展示阅读量。暂时停止 1300 宽度的 waline 显示，避免页面显示异常。")])]),(0,s.Lk)("li",v,[W,(0,s.Lk)("label",x,[(0,s.Lk)("a",_,[(0,s.eW)("docsify-toc"),(0,s.bF)(a)]),(0,s.eW)("：给笔记页内部添加目录。不过本插件与 gitalk、waline 冲突，页面宽于 1300px 时出现 toc 目录，评论区位置也跟着挤到页面顶部，需手动修改。参考链接："),(0,s.Lk)("a",j,[(0,s.eW)("Tainacan Wiki"),(0,s.bF)(a)]),(0,s.eW)("，"),(0,s.Lk)("a",w,[(0,s.eW)("Sureness"),(0,s.bF)(a)]),(0,s.eW)("，"),(0,s.Lk)("a",F,[(0,s.eW)("lifeupapp"),(0,s.bF)(a)]),(0,s.eW)("。")])]),(0,s.Lk)("li",z,[C,(0,s.Lk)("label",D,[(0,s.Lk)("a",E,[(0,s.eW)("docsify-pdf-converter"),(0,s.bF)(a)]),(0,s.eW)("：将 docsify 转为 pdf，不带书签目录。")]),M])]),N,T,(0,s.Lk)("p",null,[(0,s.Lk)("a",A,[(0,s.eW)("emoji 插件"),(0,s.bF)(a)]),(0,s.eW)("在标题中使用容易出错，建议使用 "),P,(0,s.eW)("。例如，原本是 "),S,(0,s.eW)("，替换为 "),R,(0,s.eW)("。")]),G,H,(0,s.Lk)("p",null,[(0,s.Lk)("a",q,[(0,s.eW)("docsify 本地命令"),(0,s.bF)(a)]),(0,s.eW)(":")]),K])}]]),I=JSON.parse('{"path":"/web/docsify.html","title":"docsify","lang":"zh-CN","frontmatter":{"article":false,"title":"docsify","icon":"edit","order":2,"description":"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d...","head":[["meta",{"property":"og:url","content":"https://newzone.top/kfyze.github.io/web/docsify.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"docsify"}],["meta",{"property":"og:description","content":"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-03T11:56:52.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-04-03T11:56:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"docsify\\",\\"description\\":\\"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d...\\"}"]]},"headers":[{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"docsify emoji","slug":"docsify-emoji","link":"#docsify-emoji","children":[]}]},{"level":2,"title":"本地命令","slug":"本地命令","link":"#本地命令","children":[{"level":3,"title":"Serve 启动","slug":"serve-启动","link":"#serve-启动","children":[]},{"level":3,"title":"生成侧边栏","slug":"生成侧边栏","link":"#生成侧边栏","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"引用路径","slug":"引用路径","link":"#引用路径","children":[]},{"level":3,"title":"页面未同步更新","slug":"页面未同步更新","link":"#页面未同步更新","children":[]},{"level":3,"title":"GitHub Pages 报错","slug":"github-pages-报错","link":"#github-pages-报错","children":[]}]}],"git":{"createdTime":1712145412000,"updatedTime":1712145412000,"contributors":[{"name":"MasonKai","email":"39311653+MasonKai@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.7,"words":811},"filePathRelative":"web/docsify.md","localizedDate":"2024年4月3日","excerpt":"<p><a href=\\"https://docsify.js.org/#/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify</a> 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。</p>\\n<p>本页集中了我使用 docsify 中遇到的问题，新手先看 <a href=\\"https://docsify.js.org/#/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify 入门文档</a>。</p>","autoDesc":true}')}}]);