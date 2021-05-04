(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(84),r=t(82);var s=function(e){var a=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(r.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},a.previous&&l.a.createElement(i.a,{className:"pagination-nav__link",to:a.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(r.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a.next&&l.a.createElement(i.a,{className:"pagination-nav__link",to:a.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(r.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),l.a.createElement("div",{className:"pagination-nav__label"},a.next.title," \xbb"))))},o=t(16),c=t(83),d=t(80);function m(e){var a=e.siteTitle,t=e.versionLabel;return l.a.createElement(r.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:a,versionLabel:l.a.createElement("strong",null,t)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u(e){var a=e.siteTitle,t=e.versionLabel;return l.a.createElement(r.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:a,versionLabel:l.a.createElement("strong",null,t)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var a=e.versionLabel,t=e.to,n=e.onClick;return l.a.createElement(r.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:a,latestVersionLink:l.a.createElement("strong",null,l.a.createElement(i.a,{to:t,onClick:n},l.a.createElement(r.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var p=function(){var e=Object(o.default)().siteConfig.title,a=Object(c.useActivePlugin)({failfast:!0}).pluginId,t=Object(d.useDocsPreferredVersion)(a).savePreferredVersionName,n=Object(c.useActiveVersion)(a),i=Object(c.useDocVersionSuggestions)(a),r=i.latestDocSuggestion,s=i.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var p,b=null!=r?r:(p=s).docs.find((function(e){return e.id===p.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},l.a.createElement("div",null,"current"===n.name?l.a.createElement(m,{siteTitle:e,versionLabel:n.label}):l.a.createElement(u,{siteTitle:e,versionLabel:n.label})),l.a.createElement("div",{className:"margin-top--md"},l.a.createElement(v,{versionLabel:s.label,to:b.path,onClick:function(){return t(s.name)}})))},b=t(105),g=t(65),E=t.n(g);function h(e){var a=e.lastUpdatedAt,t=e.formattedLastUpdatedAt;return l.a.createElement(r.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.a.createElement("time",{dateTime:new Date(1e3*a).toISOString(),className:E.a.lastUpdatedDate},t)}}," on {date}")}function f(e){var a=e.lastUpdatedBy;return l.a.createElement(r.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.a.createElement("strong",null,a)}}," by {user}")}function N(e){var a=e.lastUpdatedAt,t=e.formattedLastUpdatedAt,n=e.lastUpdatedBy;return l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,l.a.createElement(r.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:a&&t?l.a.createElement(h,{lastUpdatedAt:a,formattedLastUpdatedAt:t}):"",byUser:n?l.a.createElement(f,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var L=t(107),U=t(3),w=t(7),T=t(81),_=t(67),A=t.n(_),k=function(e){var a=e.className,t=Object(w.a)(e,["className"]);return l.a.createElement("svg",Object(U.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(T.a)(A.a.iconEdit,a),"aria-label":"Edit page"},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function y(e){var a=e.editUrl;return l.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(k,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var O=t(68),V=t.n(O);a.default=function(e){var a,t=e.content,n=t.metadata,i=t.frontMatter,r=i.image,o=i.keywords,d=i.hide_title,m=i.hide_table_of_contents,u=n.description,v=n.title,g=n.editUrl,E=n.lastUpdatedAt,h=n.formattedLastUpdatedAt,f=n.lastUpdatedBy,U=Object(c.useActivePlugin)({failfast:!0}).pluginId,w=Object(c.useVersions)(U),_=Object(c.useActiveVersion)(U),A=w.length>1,k=i.title||v;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{title:k,description:u,keywords:o,image:r}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(T.a)("col",(a={},a[V.a.docItemCol]=!m,a))},l.a.createElement(p,null),l.a.createElement("div",{className:V.a.docItemContainer},l.a.createElement("article",null,A&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",_.label)),!d&&l.a.createElement("header",null,l.a.createElement("h1",{className:V.a.docTitle},v)),l.a.createElement("div",{className:"markdown"},l.a.createElement(t,null))),(g||E||f)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},g&&l.a.createElement(y,{editUrl:g})),(E||f)&&l.a.createElement(N,{lastUpdatedAt:E,formattedLastUpdatedAt:h,lastUpdatedBy:f}))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:n})))),!m&&t.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(L.a,{toc:t.toc}))))}}}]);