(self.webpackChunkfun_doc=self.webpackChunkfun_doc||[]).push([[9556],{426:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-2472a90f",path:"/%E6%8C%87%E4%BB%A4/Git/%E6%8F%90%E4%BA%A4%E6%9C%AC%E5%9C%B0%E9%A1%B9%E7%9B%AE%E5%88%B0Github.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"提交本地项目到Github",slug:"提交本地项目到github",children:[]}],filePathRelative:"指令/Git/提交本地项目到Github.md",git:{updatedTime:162452411e4,contributors:[{name:"caifang",email:"cooldish1245@163.com",commits:1}]}}},7557:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h2 id="提交本地项目到github"><a class="header-anchor" href="#提交本地项目到github">#</a> 提交本地项目到Github</h2><p>第一步：创建远程仓库 <img src="https://api.icaifun.com/articleImages/1566210721010.png" alt="git01.png"> 拷贝远程仓库地址：<code>git@github.com:rockfang/vue-stock-proj.git</code> 第二步：本地项目中启动gitbash操作</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init\n<span class="token function">git</span> <span class="token function">add</span> *\n<span class="token function">git</span> commit -m <span class="token string">&quot;first commit&quot;</span>\n<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:rockfang/vue-stock-proj.git\n<span class="token function">git</span> push -u origin master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以上操作含义分别是：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>初始化git项目(创建本地仓库)\n添加本地所有文件到本地仓库(排除.gitignore忽略的文件)\n提交本地文件到本地仓库\n关联本地仓库到远程仓库，并用origin作为远程仓库别名\n第一次提交本地仓库文件到远程仓库（提交到远程仓库的master分支）\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',5),t={render:function(n,s){return e}}}}]);