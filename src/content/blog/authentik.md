---
title: "One IdP to Authenticate Them All"
description: "authentik: The IdP for homelabbers and my experience with it."
pubDate: "Nov 25, 2026"
heroImage: "/blog-placeholder-5.jpg"
tags: ["Story"]
created: 2026-11-20
last-edited: 2026-11-20
---

> One IdP to authenticate them all, one login to find them, one token to grant
> them access — and in the audit logs, bind them.

When Sauron made the one ring, it probably took a while for him to make it.
Likewise, it took a while for me to make Authentik work for my use case.

When I first started setting up my services, I had so many login pages, and it
used to be so annoying to me when I would need to log into my NAS, only to log
in to my next service that I needed to check in or update with.

After some time, I realized there is a simpler way of handling login. And that
is with an IdP.

## What is an IdP?

The first time that I thought I knew an IdP.
