---
title: "The Executive Summary"
description: "How I Convinced My Wife We Needed a NAS"
pubDate: "June 4 2026"
heroImage: "/blog-placeholder-4.jpg"
tags: ["Story"]
---

> Trying to convince your spouse to spend money on a homelab? I’ve been there too.

_And thankfully it worked out for me. Hope it does for you too_ 😉

There's a moment every person who cares about their data eventually hits.
For me, it wasn't a single dramatic event. There was no catastrophic data loss,
no hard drive failure at the worst possible time. It was something quieter and
more unsettling: the slow realization that everything important to our family
lived on someone else's servers, and I had absolutely no control over any
of it. Dramatic, I know. But it was real.

Our photos were in Google Photos, our documents were scattered across OneDrive,
with five copies of the same file spread between my phone, Google Drive,
OneDrive, my computer, and a flash drive. And yet, I still couldn't find that
dang file I needed. Our emails lived in Gmail. Music on Spotify. Movies across
a half-dozen streaming services. We were paying for things that we couldn't
ever own. Nothing was local, and if it was, it was out of date or no longer
relavant.

I'd been watching the news for a few years, listening to data breaches at
companies everyone assumed were untouchable, Google and Meta quietly monetizing
every corner of their users' digital lives, free tiers getting quietly gutted.
The feeling I had initially had been building: I didn't want to trust any of it
anymore. Not because I had something to hide, but because it was **our data**.
Our family photos. Our memories. They shouldn't be a product someone else
profits from.

So as I started taking college courses for my IT degree, I realized that I
needed a NAS. And then I did something my wife probably didn't expect:
I wrote her a formal proposal.

## Change Request #001

I mean that literally. I called it CR001. It was a Markdown document, made in
Obsidian, formatted like a real professional change request, complete with a
table of contents, a need/solution section, a full parts list with pricing, a
risk analysis, a backout plan, and a Q&A section, which she put in her own
questions for me to answer.

I'd put in countless hours drafting it. More hours researching parts and
compatibility. An entire hour dedicated just to operating system selection.
I compared building my own versus buying a prebuilt Synology or QNAP, versus
just using a JBOD enclosure hooked up to my desktop. I ran the numbers on cost
per GB against cloud subscriptions. I even calculated that buying everything
through Amazon would earn us $26.44 back in rewards.

The ask: $400 to purchase parts, and use of the one free hour I already had
carved out each day. I included a line at the bottom of the summary section:
"Please let me do this 😘"

Even in a formal proposal, I know my audience.

## The Pushback

She read it. To her credit, she actually read it and gave me feedback.

Her first question was exactly what I expected, and completely fair: "How are
we going to make cuts to fit this in the budget?"

That, along with other questions, delayed the acceptance by several months. Not
arguing; just the slow, unglamorous process of actually figuring out how to
make it work for us. She wasn't dismissing the idea. She was taking it
seriously enough to interrogate it, and I respected that. Sometimes, I was
frustrated, feeling as though she didn't understand. But that didn't stop us
from coming back and trying again to see each other's point of view.

What finally moved her wasn't the data privacy argument or the cloud cost
comparison. It was simpler: she could see that this would give me real,
hands-on experience solving a real problem. Not a tutorial. Not a lab exercise.
An actual system our family would depend on, that I'd build, maintain, and
understand from the ground up. That mattered more to her than any spec sheet.

Several months after I handed her that proposal, I got the green light.

### What I Built

I bought almost everything on the list: AMD Ryzen 5 PRO 4650G, ASRock X570
Pro4, Corsair CX550 power supply, a Crucial NVMe for the boot drive (back when
they weren't $200). The one exception was the RAM. I'd specced Kingston Server
Premier ECC DDR4 specifically because TrueNAS runs ZFS, and ECC memory is
crucial for data integrity with ZFS. I couldn't source it the way I'd planned,
so I had to adapt, and got Crucial ECC RAM.

I installed TrueNAS Scale, and messed around with it for months, trying to
understand how it worked. Eventually, I spun up the containers I'd promised:
Syncthing for file sync, Immich for photos, Jellyfin for media, Nextcloud as
our private cloud. Paperless-ngx just didn't work out. It took time to
understand it all, and I learned so much from it, as future posts will show.

I even have a Blu-ray backup plan in the works. M-Disc Blu-rays can last 50-100
years, which means someday our grandkids might be watching our home videos on
whatever reads a disc in 2075.

### Where We Are Now

She uses all of it. I use all of it. Immich for photos, Jellyfin for movie
nights, Nextcloud for shared documents. Every service I promised is running,
and she's using them - even if, in her mind, it's still mostly "Justin's thing
he does."

She's not wrong, exactly. But the OneDrive subscription is gone. Our photos
and interacations aren't being used to enhance a corporation's AI model. And
when the internet goes down, our data is still right there.

That's a win I'll take quietly.

### What I Took Away From This

If you're trying to justify a homelab purchase to a skeptical partner, here's
my honest advice:

Don't just ask, and don't just buy it. Make the case. Write it down. Show the
numbers. Anticipate their questions and answer them before they ask. Include
a backout plan - it shows you've thought about failure, not just success. Treat
them like the intelligent, reasonable person they are.

> If you can't do that, then you shouldn't tell yourself you need it.

And on the bigger question of why any of this matters: **your data is yours**.
Your family photos, your documents, your memories - they shouldn't live or die
based on whether Google changes a free tier or a company you've never heard of
gets breached. Owning your data isn't paranoia. It's just responsible.

But more than anything, CR001 was the moment the homelab became real for me.
Not a hobby. Not a side project. A system my family actually depends on, that
I built from a Markdown document and a little love 😘. That executive summary
turned out to be more than I ever thought. It wasn't just a pitch to my wife -
it was the beginning of everything that came after.

More on that soon.
