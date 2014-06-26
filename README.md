Wanwan
======

Wanwan is used to easily update an anime list. For now it's only designed to work with a local MongoDB instance using Laharl's schema but in the future I'll update it so it can be used to easily keep multiple anime lists in sync.

Features
--------

 * Fuzzy matching on anime titles, optionally using the Bing API for smarter results. so `wanwan add -n mahouka -s ptw` would add The Irregular at Magical Highschool to your "Plan To Watch".
 * Windows, OS X and Linux support

Additional Info
---------------

I mostly made this app so I could test the Laharl REST API on a proper third party client. People can use this as a basis for their own client. I'll also reuse a lot of the code when writing:

 * Browser extensions
 * The web UI
 * Native mobile apps

I was just going to use the web app as the main client but honestly there's far too many shiny new frontend frameworks in the JS world every few weeks that I'm sick of getting work done and then thinking "Damn, this new thing is nice, maybe I should rewrite what I have done already?". Also, there's no good automatic list updaters for linux. I'll probably make a seperate repo for that when I get round to it though since it'll be a background process.
