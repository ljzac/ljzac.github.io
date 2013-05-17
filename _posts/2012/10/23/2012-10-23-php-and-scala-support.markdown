---
layout: posts
title: "PHP and Scala Support"
author: Brad Rydzewski
authorlink: https://drone.io/bradrydzewski
---

Just three weeks ago we launched [drone.io](https://drone.io), a hosted
continous integration solution. We appreciate all the feedback we've received.
Many users requested support for more languages. Today we're excited to
announce Beta support for **Scala** and **PHP**.

When creating a new Project you will see options for PHP and Scala languages:

![Select Project Owner](/img/screenshot_new-scala-php.png)

### Scala Builds

Scala versions 2.8.2 and 2.9.2 are both supported. For dependency management
and unit testing we've included **SBT** and **Maven**.

You can read more about our Scala builds [here](http://docs.drone.io/scala.html).

### PHP Builds

PHP 5.4 is currently supported, including a long list of extensions. For dependency
management we've included **pear** and **composer**, along with **phpunit** to
run your tests.

Read more about our PHP builds [here](http://docs.drone.io/php.html).

### Now Supporting 10 Languages

[drone.io](https://drone.io) now officially supports 10 different programming
languages, with more langauges coming soon! Follow us on [twitter](https://twitter.com/droneio)
to keep up to date with our latest announcements.

