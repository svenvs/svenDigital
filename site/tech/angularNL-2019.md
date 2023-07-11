---
title: Angular NL 2019
date: 2019-03-12
layout: layouts/blogSidebar.njk
featuredText: Last Friday I attended the AngularNL conference and there where a lot of good talks. The coolest thing for me was that this was the first conference where I was giving a talk myself, which was an amazing experience!
thumb: /assets/post/angularNL2019/angularNLPeople.jpg
hero: /assets/post/angularNL2019/angularNLPeople.jpg
tags: tech
---

Last Friday I attended the AngularNL conference and there where a lot of good talks. The coolest thing for me was that this was the first conference where I was giving a talk myself, which was an amazing experience! 

<img src="/assets/post/angularNL2019/angularNLPeople.jpg" class="img-fluid mb-2" alt="Angular NL people with angular nl logo">


## The Talk

If you want to see the talk click on 'play' below. I talked about Angular Universal, which is a solution for server side rendering. I will write about this in my next blog as well, so stay tuned. Or just watch the video now! 

<iframe class="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/Y-HStxc-e6k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
## Micro front ends 
There were multiple talks about micro front ends. I thought this was very interesting. It was nice to see that different companies have their own approach to micro front end architecture. One of the architects showed multiple approaches and what the benefits and trade-offs of these approaches are. In my opinion, this was the most interesting talk. The presenter made a comparison between mono repo's, HTML linking , bootstrapping different SPAs in one SPA and IFrames . My client always uses a mono repo and we are looking into other options at the moment, so this talk was very useful for me! 

The approach of Bootstrapping different SPAs was one of which I thought I would be impossible. You have your “wrapper” framework booting up others like VueJS, Angular, React and so on. This was interesting, because you give the teams the freedom of owning their own tiny application but in the meantime also controlling it from the outside to keep things standardized. A downside of this approach is that the applications could go out of their scope or interfere in the CSS. 

Using IFrames is also a solution. I am not the biggest fan of this one, but there are some big companies who are using it, like Spotify. And I have to say: it works! The trick they do is that they have multiple IFrames on one page fulfilling all kinds of functionalities. Like the play bar is one and the menu is one etc. To communicate with each other, you can use cross document messaging, which is explained [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage "Link to mozilla postmessage api")

Lastly there is mono repo, where just all the front-end that is being build is in one repository. The nicest thing is about this one is that everyone is using the same version of all your dependencies. So no issues there. But … When you have to upgrade, there is the issue. You have to make sure that it's backwards compatible for all the teams, because everyone is using it somehow. With the smaller micro front ends this can be done independently. The big pro of a mono repo is that all the look and feel etc. will be the same, because everyone makes use of the same css pipeline dependencies etc. 

The AngularNL conference was very interesting and I learned a lot here. I hope to attend next year as well!

[Checkout their website!](https://www.angularnl.com/ "Link to Angular NL")