"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[610],{3146:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(6010),l=a(3905),c=a(4973),i=a(6742),m=a(9306),s=a(7277),o=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,E=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=e.children,b=e.frontMatter,v=e.metadata,Z=e.truncated,_=e.isBlogPostPage,k=void 0!==_&&_,N=v.date,w=v.formattedDate,y=v.permalink,T=v.tags,x=v.readingTime,P=v.title,I=v.editUrl,M=b.author,C=b.image,L=b.keywords,S=b.author_url||b.authorURL,B=b.author_title||b.authorTitle,U=b.author_image_url||b.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:L,image:C}),r.createElement("article",{className:k?void 0:"margin-bottom--xl"},(p=k?"h1":"h2",r.createElement("header",null,r.createElement(p,{className:d},k?P:r.createElement(i.Z,{to:y},P)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:N},w),x&&r.createElement(r.Fragment,null," \xb7 ",E(x))),r.createElement("div",{className:"avatar margin-vert--md"},U&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:S},r.createElement("img",{src:U,alt:M})),r.createElement("div",{className:"avatar__intro"},M&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:S},M)),r.createElement("small",{className:"avatar__subtitle"},B)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:s.Z},f)),(T.length>0||Z)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[h]=k,t))},T.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),T.map((function(e){var t=e.label,a=e.permalink;return r.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&I&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:I})),!k&&Z&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:v.permalink,"aria-label":"Read more about "+P},r.createElement("b",null,r.createElement(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(6010),l=a(6742),c="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",s="sidebarItem_2UVv",o="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:u},e.title))}))))}},9404:function(e,t,a){a.r(t);var r=a(7294),n=a(8485),l=a(3146),c=a(6742),i=a(5601),m=a(4973),s=a(9306);t.default=function(e){var t,a=e.metadata,o=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,h=a.count,p=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(h),tagName:g});return r.createElement(n.Z,{title:E,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(i.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,E),r.createElement(c.Z,{href:d},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(4973),l=a(2122),c=a(9756),i=a(6010),m="iconEdit_2_ui",s=["className"],o=function(e){var t=e.className,a=(0,c.Z)(e,s);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(o,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1217:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(9105),l=a(9306),c=a(4996);function i(e){var t=e.title,a=e.description,i=e.keywords,m=e.image,s=(0,l.LU)().image,o=(0,l.pe)(t),u=(0,c.Z)(m||s,{absolute:!0});return r.createElement(n.Z,null,t&&r.createElement("title",null,o),t&&r.createElement("meta",{property:"og:title",content:o}),a&&r.createElement("meta",{name:"description",content:a}),a&&r.createElement("meta",{property:"og:description",content:a}),i&&r.createElement("meta",{name:"keywords",content:Array.isArray(i)?i.join(","):i}),u&&r.createElement("meta",{property:"og:image",content:u}),u&&r.createElement("meta",{name:"twitter:image",content:u}))}},8485:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(7294),n=a(6010),l=a(3946),c=a(94),i=a(2870),m=a(7479),s=a(3792),o=a(2122),u=a(9105),d=a(2263),g=a(4996),h=a(4246),p=a(9306);function E(e){var t=(0,d.Z)(),a=t.siteConfig,n=t.i18n.currentLocale,l=a.favicon,c=a.themeConfig,i=c.image,m=c.metadatas,s=a.url,E=e.title,f=e.description,b=e.image,v=e.keywords,Z=e.permalink,_=e.searchMetadatas,k=(0,p.pe)(E),N=b||i,w=(0,g.Z)(N,{absolute:!0}),y=(0,g.Z)(l),T=n.split("-")[0];return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("html",{lang:T}),k&&r.createElement("title",null,k),k&&r.createElement("meta",{property:"og:title",content:k}),l&&r.createElement("link",{rel:"shortcut icon",href:y}),f&&r.createElement("meta",{name:"description",content:f}),f&&r.createElement("meta",{property:"og:description",content:f}),v&&v.length&&r.createElement("meta",{name:"keywords",content:v.join(",")}),N&&r.createElement("meta",{property:"og:image",content:w}),N&&r.createElement("meta",{name:"twitter:image",content:w}),N&&r.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),Z&&r.createElement("meta",{property:"og:url",content:s+Z}),Z&&r.createElement("link",{rel:"canonical",href:s+Z}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.createElement(h.Z,(0,o.Z)({tag:p.HX,locale:n},_)),r.createElement(u.Z,null,m.map((function(e,t){return r.createElement("meta",(0,o.Z)({key:"metadata_"+t},e))}))))}var f=a(8245);var b=function(e){var t=e.children,a=e.noFooter,o=e.wrapperClassName;return(0,f.Z)(),r.createElement(s.Z,null,r.createElement(E,e),r.createElement(l.Z,null),r.createElement(c.Z,null),r.createElement(i.Z,null),r.createElement("div",{className:(0,n.Z)("main-wrapper",o)},t),!a&&r.createElement(m.Z,null))}},6979:function(e,t,a){var r=a(7294),n=a(4184),l=a.n(n),c=a(5977),i=a(2263);t.Z=function(e){var t=(0,r.useRef)(!1),n=(0,r.useRef)(null),m=(0,c.k6)(),s=(0,i.Z)().siteConfig,o=(void 0===s?{}:s).baseUrl,u=function(){t.current||(Promise.all([fetch(o+"search-doc.json").then((function(e){return e.json()})),fetch(o+"lunr-index.json").then((function(e){return e.json()})),Promise.all([a.e(944),a.e(452)]).then(a.bind(a,7780)),Promise.all([a.e(532),a.e(343)]).then(a.bind(a,3343))]).then((function(e){var t=e[0],a=e[1],r=e[2].default;0!==t.length&&function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var r=o+a.url;document.createElement("a").href=r,m.push(r)}})}(t,a,r)})),t.current=!0)},d=(0,r.useCallback)((function(t){n.current.contains(t.target)||n.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:d,onBlur:d,ref:n}))}}}]);