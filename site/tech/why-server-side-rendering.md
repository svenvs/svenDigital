---
title: Why use server-side rendering
date: 2019-03-16
layout: layouts/blogSidebar.njk
featuredText: In the front-end world, we went from jQuery to all kinds of different frameworks. The Single Page Application (SPAs) make a big footprint in our world wide web. There are some issues that we miss with this approach Search engine optimization, Performance on slow devices. Loading speed In this blog I will explain how Server-Side Rendering could help you to fix these issues.
thumb: /assets/post/why-server-side-rendering/ssrThumb.png
hero: /assets/post/why-server-side-rendering/ssrHero.png
tags: tech
---

In the front-end world, we went from jQuery to all kinds of different frameworks. The Single Page Applications (SPAs) make a big footprint in our world wide web. There are some issues that we miss with this approach:  

* Search engine optimization 

* Performance on slow devices 

* Loading speed 

In this blog I will explain how Server-Side Rendering could help you to fix these issues.  

## Why does a client-side rendered application have these issues? 

It comes down to the critical render path of a browser. The first thing that will load when you go to a website is the HTML. To render the HTML, the browser will go from left to right, top to bottom in the HTML. This means that it will start loading all the files that you have linked to it, like the JavaScript and CSS. When it has the CSS, it will start rendering the CSS and this will make the first paint on the screen. At this moment a user could already see something on their screen. After that moment, it will start compiling and running the JavaScript.  

So, what does that look like in a client-side rendered application? When the users browse to your application/website, it will get the HTML file. However, this HTML file is completely empty, it does not have content. This is because frameworks like Angular, Vue and React control the rendering of your application in the JavaScript part. So, when it's done loading the CSS, nothing will happen yet, because there is no content. The JavaScript part will add the content and at that moment it will be visible. (See the image below to see what it looks like.)

<img src="/assets/post/why-server-side-rendering/timeLine-csr.png" class="img-fluid mb-2 mx-auto" alt="Time line CSR basically you see that the screen loads as last">

In respect to SEO, this is a disadvantage because there is no content at your application, so a crawler won't be able to crawl your data (Google is now able to crawl it, but all the others are not). You will especially notice this when you have meta tags for social media or want them dynamic for your pages. Most social media scrapers are not running the JavaScript from your applications and then the metadata won't be added when someone is sharing one or your pages.

## Well, how does server-side rendering solve these issues? 

With server-side rendering, the HTML is being rendered first on the server side. So, at the moment a user goes to your website/application the HTML that the browser receives already contains the content that it will be needing for making the first paint. This means that Angular, Vue and React will run on the server. Also, the API calls will happen on the server side, so there is less communication from front end to back end. When the CSS is compiled there will be a screen ready on the screen.  

<img src="/assets/post/why-server-side-rendering/timeLine-ssr.png" class="img-fluid mb-2 mx-auto" alt="Time line SSR basically you see that the screen loads faster">

Now, the only it needs is the JavaScript to make the page interactive. However, we have a better perceived performance, as the user can already see the content while the JavaScript is loading, compiling and eventually running in the background. Moreover, because the HTML already contains content, the crawlers and scrapers will be able to read it, which is beneficial for SEO. 

## Let’s compare CSR with SSR 

In the video below, I took Client-Side Rendering and Server-Side Rendering to the test. Here, I am using a 3G network and a slow mobile phone. You can create these kinds of video’s at https://www.webpagetest.org/. Small side note is that there are a lot of other factors that influence the loading speed, but both pages in the video were hosted on AWS in an Elastic Beanstalk with a Node.js server with Express in production mode. The front end is Angular, with Angular Universal for the server-side rendered one.  

<video  controls>
  <source src="/assets/post/why-server-side-rendering/csr-ssr.mp4" class="mx-auto" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

The differences in regards to social media are visible in the image below. Of the Client Side Rendered version, you can only see the link. Server Side Rendering on the other hand already shows an image.  

  <div class="row">
    <div class="col-sm">
        <h3>Server Side</h3>
      <img src="/assets/post/why-server-side-rendering/twitter-ssr.png" class="img-fluid mb-2" alt="Twitter image of a card server side">
      <img src="/assets/post/why-server-side-rendering/wa-ssr.png" class="img-fluid mb-2" alt="whatsapp image of a card server side">
    </div>
    <div class="col-sm">
              <h3>client Side</h3>
      <img src="/assets/post/why-server-side-rendering/twitter-csr.png" class="img-fluid mb-2" alt="Twitter image of a card client side">
      <img src="/assets/post/why-server-side-rendering/wa-csr.png" class="img-fluid mb-2" alt="whatsapp image of a card server side">
    </div>
  </div>

## Conclusion 

If you are not using Server Side Rendering for the performance, it is still very useful for the SEO of your application. Keep in mind that Server-Side Rendering adds more serverload. This load can be reduced by for example using a CDN caching mechanism to cache the Server-Side Rendered pages.  

Happy coding!