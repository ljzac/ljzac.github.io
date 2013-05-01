---
layout: posts
title: "Watch your Build Output in Real Time.  It's Fun!"
author: Tom Burke
authorlink: https://drone.io/tdburke
categories: ['Mundo']
published: true
---

Now when you view a build's details you'll see the output updated in real time.  This works for any build you kickoff manually or for builds requested automatically by your repo using Drone.io's service hook.

Try it out by going to your build's setting's page, click **Build Now**, then follow the link to **Build Output**.

![Real time Output](/img/screenshot_stdout-color.png)

Real time output should work with any browser that supports websockets.  Basic support for xterm control characters and colors was also added.

What other real time features would you like added?  We think console output is a great start, but want to add much more.

Let use know on [twitter](http://twitter.com/droneio) or vote for a feature on our [feedback forum](https://drone.uservoice.com).
