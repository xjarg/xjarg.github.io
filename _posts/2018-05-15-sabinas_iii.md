---
layout: default
type: blog
title: sabinas iii
date: 2018-05-15
location: sabinas
language: en
tags: family films projects sabinas writing
---

> it once happened to me that i stopped reading for a moment to do something else. after a few minutes away from my reading device, i went back to it in a hurry, thinking it might lock the screen. which makes sense if i had been reading on my kindle... i wasn't: my reading device was a book.

this paragraph reads like the introduction to the shittiest, most boring and pretentious ted talk, doesn't it? good thing i don't get to talk in front of lots of people. i'm not sure when was the last time i had to.  
this is the part where i start thinking that i might not have anything worth saying in front of a crowd. and that part of my brain in charge of such ideas gets into a fight with another part of my brain that tries to tell me that everything will be all right. who wins is usually anyone's guess. uncertainty. we're all into it.

i'm falling asleep. today i leave sabinas for a while. i'm taking the 15:20 bus. i might be back next weekend but who knows. i wrote some good pages these days. the story that opens the book is looking good. i'd like to work on it with a writing group (hopefully: more on that soon).  

## i saw a (couple of) film(s)

i watched [dawson city: frozen time](https://www.imdb.com/title/tt5215486/) by [bill morrison](https://billmorrisonfilm.com). it is a beautiful film, a love letter to celuloid as gorgeous as one can expect from morrison. [here's the trailer](https://www.youtube.com/watch?v=oEbHM8Vsvlo).

> Bill Morrison’s new film is a history in still and moving images charting the transformation of Tr’ochëk, a fishing camp at the confluence of the Yukon and Klondike Rivers, into the epicenter of the Yukon gold rush at the turn of the last century. It is also a history of the 35mm film prints that were shipped to Dawson between the 1910s and 1920s, then hidden away and forgotten for 50 years until they were unearthed in the initial stages of a construction project, images from which are a key element in Morrison’s cinematic mosaic. Like all of Morrison’s work, Dawson City is a haunting experience that takes place in suspended, nonlinear time.

it can be found online from a variety of sources all across the spectrum of legality.

i watched *finding vivian maier* and *the secret rules of modern living: algorithms* on the bus back to saltillo. the first one is about a once unknown photographer whose negatives were found in an auction and made some lucky guy rich. art capitalism at its best. the second is an overtly optimistic view on the role algorithms play in modern society. all of the examples presented depict algorithms as a bening force that makes life easier and better, a vision of algorithms i found a little too narrow. they are way more than that and many of them are not bening in any way.

## a few words about piracy

talking about legality, i might want to paint a general idea of my stance in regards to copyright and intellectual property laws and practices. i am by no means an idealist. the defense of copyright and intellectual property seems to me like an idealistic enterprise, one based on certain assumptions about the way people behave that are just naive. people's natural tendency is to share that which is replaceable or infinitely replenishable. the latter is a good way to describe digital materials. they just don't exhaust or degrade or break. and if it can be copied it will be copied and there is nothing authors and publishers can do about it. it will happen. and it should happen, there's nothing i am personally willing to do against it since it's such a lost cause. fortunately. that's what i think about piracy and sharing. one day i might write about it in greater depth.

## a few words about this blog

this blog is by no means written in stone even if in a way it is. what i mean by that is that i might update old entries without warning (to whom? who's gonna read my blog, anywas?) and error proof others; still everything is in github, so old versions will always be publicly available, or at least as long as gh exists.  
i want to implement rss later and tags. i might do it at some point in the next few weeks. jekyll is interesting, fun and easy to learn. i made some improvements to the layouts so every page uses the same layout with some differences based on the ```type``` variable. If ```type: blog``` is present in the front matter of the post, the h1 will be printed with the ```date``` value included at the begining. let's see, for example, the front matter for this post:

```yaml
layout: default
type: blog
title: sabinas iii
date: 2018-05-15
location: sabinas
language: en
tags: family films projects sabinas writing
```

in addition to that, there is another conditional in default.html (the layout file) that changes the ```<title>``` tag acordingly so the browser tabs display the date when the user is reading a single post.  
(i'm not sure how to post liquid in jekyll within code blocks, the engine just parses it instead of rendering as part of the block. help, anyone.)  
the entries themselves work more like in-progress texts until the point where i push them to the repository[^repository_push]. and, as i implied before, even after that they are still open to editing and fine-tuning, so to speak. it would be a sin to keep something fixed and *definitive* in github. that's not what github is for, quite the opposite. i think that should be true for both code and text––not that code and text are mutually exclusive categories, of course[^on_the_blog].  
i'm no developer. in fact, i consider myself a pretty mediocre coder. but hey, i'm having fun.

## from the road

i'm writing this aboard a del norte bus. i am at the central in monclova, waiting for passengers and for the cleaning guy to sweep the aisle. some gringo mormon missionary just got on the bus. the other missionaries are saying goodbye from the andén. they seem happy. enthusiastic. most of all, they seem *sincere*. i'm not sure if that's happy or sad. i just stopped knowing al ong time ago.  
how much does sublime text cost? definitely worth paying for it just for the time it takes to launch, about 1/10th of the time it takes atom. atom has more and more interesting add-ons but really, it's slow as hell. anyways, most of the time i write in sublime text but every once in a while i'll write on emacs. i don't really understand emacs beyond the things i use it for: writing markdown and running tidalcycles.[^tidal]  
the bus is moving and nobody got on it to sell us coca colas or something and i'm desperately need something to drink. it's gonna be a long monclova-saltillo. the next coke i drink is going to be glorious, though.  
(yeah: i just received a sandwich, some cheetos and a coke as part of the trip (didn't remember this bus was a "diamante"). the sandwich is made of sadness and sorrow and the cheetos are cheetos... but i've got a fucking coke, baby, yeah!)  
i'm eating some carne seca from roncesvalles. this stuff is really good so i decide this post is finished. i have no internet so it will appear on my site *eventually*.

[^repository_push]: e.g.: the "a few words about this blog" section was started before the "from the road" section of the text, but the part starting with 'the entries themselves...' was written after the "from the road" section. i'm not sure that's important at all other than to illustrate the somewhat chaotic order in which i approach the writing of these posts.

[^on_the_blog]: now, i know this section and these footnotes are a little too "meta". i confess my sins but don't repent: i love talking about processes. but (and that's the reason for all of this) i know most people don't enjoy talking about processes. most of the time, i think, interesting processes (i.e. processes that can be find interesting not only by colleagues but by that ambiguos entity called *most everyone*, trademark pending) are not something they usually find in their lives or know how to identificate. whatever the reason, this footnote is getting longer and way more boring than it should.

[^tidal]: these are the steps i take to run tidal: use tmux to divide the terminal screen into two panes. i will then run sclang in one of the panes, usually the left one. there i'll quickly setup the output and launch SuperDirt. on the other pane i'll launch emacs, open my boot.tidal, launch haskell and tidal, and execute boot.tidal. at this point i can create a new file or open and existing one and start making sounds.