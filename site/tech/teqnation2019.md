---
title: teqnation - Capman Galaxy
date: 2019-05-19
layout: layouts/blogSidebar.njk
featuredText: Whoohoo, I was lucky and could join another conference last week. But this time in a different role. This time I did not give a talk, but I was working for the recruitment booth. As you might expect, I did things my own way… and this was completely different than the usual stuff you expect at a booth.
thumb: /assets/post/teqnation2019/teqnationLogo.png
hero: space.png
tags: tech
---

Whoohoo, I was lucky and could join another conference last week. But this time in a different role. This time I did not give a talk, but I was working for the recruitment booth. As you might expect, I did things my own way… and this was completely different than the usual stuff you expect at a booth.

<img src="/assets/post/teqnation2019/0.jpg" class="img-fluid mb-2 mx-auto" alt="image of capgemini booth at teqnation">

## The mission
Me and my development team had one mission, which was to show the other side of Capgemini. For most people if you see ‘Capgemini’, they think about a big company, and not about fun. However, there is so much more inside this company and we tried to show it with our game that we developed especially for this conference. This way, we let me people experience the fun side of Capgemini!

 

## The game
What is old school and freaking awesome? SPACE INVADERS of course! Only we spiced up the game a bit. We have ‘Capman’, our main character, who is on a quest to crush all the bugs that he finds on his path. One day, he needs to go into the galaxy because bugs are invading our space. So he takes his ship named ‘Gelactic bug crusher’ into space to fight off the bugs. The bugs are coming in so many waves that he needs the help of Capgemini to give him much more firepower to make sure to crush them all! On the conference we turned this game into a competition: 4 people were playing at the same time to compete for the highest score. Moreover, at the booth we had a scoreboard which showed the highscores of the entire day.

<img src="/assets/post/teqnation2019/space.png" class="img-fluid mb-2 mx-auto" alt="spae game image">

## How did we build it?
We used a cool WebGL powered framework called ‘Phaser’. With this framework you can create a lot of games very easily by using some basic principles. In a few weeks from now I will be posting tutorials about Phaser and how to create a basic game.

You can find the code of the space invaders game here: https://git.io/fjla4

Please note: in order to keep the high scores in sync we used web sockets. We have used just the npm package called ws and express as a web server. On the server we have an admin dashboard and a scoreboard. Both where listening to the broadcast that the server was sending, the data that was being sent were the high scores. In the admin dashboard we also had some controls like starting end resetting games. To give it a real competitive feel, we let 4 players start at the same time. In the dashboard you send the “startGame” signal, which goes into the server and is broadcasted to all the connected players.

Here you can find the code of the server: https://git.io/fjlaW

We created the code within 10 days, so the code ain’t pretty, especially after some hot fixes. We will make a new version with some cleaner code, but this will take some more time.

Don’t want to look into the code and just play the game? Check out this link: https://git.io/fj8Si

Enjoy playing and hope to see you next time!