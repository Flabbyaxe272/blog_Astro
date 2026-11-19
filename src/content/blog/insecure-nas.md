---
title: "The NAS is the Most Vulnerable Server You Have"
description: ""
pubDate: "Nov 18 2026"
heroImage: "/blog-placeholder-3.jpg"
tags: ["Story"]
created: 2026-11-18
last-edited: 2026-11-18
---

*This mindset helped me realize that this server is my last line of defense
of my data.*

When I felt empowered to take back my own data, no one ever told me that
you become responsible. I mean, duh. It's implied, of course. If you're not
trusting a company, you need to trust yourself.

So when I started messing around with services and other things that would
interact with my data, I never thought about how someone could try to attack
my server.

That was until someone attacked my server.

I set up Immich, a photo storage service that's akin to Google Photos.
Simple to set up (I say after the fact). I had TrueNAS catalog apps to
help ease that process to install and make sure everything ran. In
working to keep things simple for those who would be
using it (i.e. my family), I was also setting up SSO with Authentik.

Then I realized that it would be difficult to enroll everyone's devices in
my VPN that I had set up with Wireguard by hand (which is a learning curve
of its own). Managing over 20 devices in my free time wasn't something I
was looking forward to. And I couldn't add everyone to my Tailscale without
giving my username and password to everyone.

So I had the brilliant idea to use my ISP's public IP service. I just tied
the public IP to all my DNS records and it worked! But then I realized, if
I proxy all my records, sure everyone will see my IP, but if Cloudflare
goes down, so does the access. So I just raw dogged the DNS records
straight to my IP, and port forwarded any requests to my edge server: an
old HP Elitebook.

If you're cringing right now, same.

Literally, the whole world could get me now. It wasn't even a week before
my network started slowing down. I didn't understand why. But I used my
instincts to immediately look at my router logs to see if there's a clue.

Over 100 requests a second from a range of Brazilian IP addresses, all
trying different ports. My router was maxing out, and it terrified me.
I immediately closed up my port forwarding, shut down my computer, and
called it a night.

It took me a month to convince myself that my router did good and didn't
let unauthorized packets in, and that my data was safe. But I took that
lesson as: Don't just give out your home address.

If you're thinking about hosting some services like Immich or Navidrome
or a help desk for your family, I just have one thing to say:

> Don't point the DNS record at yourself.

Do an indirect method. Most of what you will see on r/homelab or
r/selfhosted are articles of people using VPS to act as a bridge between
the internet and your servers.

If it's your immediate family you want to host for, use a VPN. Tailscale
is free for three accounts and easy to set up. WireGuard (the protocol
behind Tailscale) is a learning curve. But once you have it down, it's
super easy and completely free to use.

Taking back your data includes taking responsibility for it.
The internet is constantly looking for what people have exposed.
Make sure you know what you're exposing.

This isn't the only thing I learned, and I'll share more another time.

If you have questions or just need someone to talk to about homelabbing,
feel free to email me at [justin@farrisfam.org](mailto:justin@farrisfam.org).
Or you can start a [discussion](https://github.com/Flabbyaxe272/blog_Astro/discussions)!
I'll add my input as I see them started.
