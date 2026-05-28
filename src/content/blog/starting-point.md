---
title: "Starting Point"
description: "The story of how I got started on my homelab."
pubDate: "May 26 2026"
heroImage: "/blog-placeholder-2.jpg"
tags: ["Beginning"]
---

# Repurposing a laptop as a network edge device was the best decision I made

_And it was only the best decision because it kickstarted my journey as a sysadmin. Otherwise it was awful._ 😅

I don’t remember when I had the realization, but I remember the feeling. Microsoft 365 OneDrive pulled out for the year ($69.99/year). Looking at my bank account, I realized that to keep this going, I need to keep paying up to have storage for my data.

Sure, that’s $5.84 every month. And you have access to some convenient tools, like Word, PowerPoint, and Excel, available over the internet. But I didn’t want to **keep** paying, especially knowing that they would raise the price eventually (At the time of this writing, it’s currently $79.99). Because then you would be paying thousands of dollars over years, and sure, it’s the cost of keeping your data, but I wanted control over my data as well.  
  
And then I dived deeper into Terms of Service (ToS). Microsoft ToS offers no warranty for data loss, and recuse themselves of liability for that data loss. And you can’t sue them, even if you do have grounds for liability. Like everyone else, they explicitly bind you and them to arbitration. This means you generally agree to resolve disputes through neutral, individual arbitration (or small claims court) rather than suing in front of a judge or jury. The arbitration fees which are usually paid by the company, which creates a built-in incentive structure. So are they truly neutral?

I wanted something to expand my skills for school. I was doing online classes for a Bachelors in Information Technology, and I was learning a lot about Windows Server 2019 and Windows machines.  
  
I was also trying to get a HelpDesk job. I researched a little bit, and found that most jobs require at least a CompTIA A+ cert. After reading and understanding more about what’s needed to pass, I found that most people and influencers recommend building a homelab. From Google search (AI Response):

> A **homelab** is **a private, self-hosted computing environment set up inside a person's home**.  
> It is a dedicated space where tech enthusiasts, developers, and IT professionals experiment with hardware, host their own cloud services, test software, and learn networking skills without risking a live workplace environment.

So it was settled in my mind: I wanted to build up a homelab. To save on subscription costs, learn some skills, and take control of my data. In so deciding, I realized I had a few issues.

I didn’t have a lot of money, being newly-wed to my spouse. I didn’t have a lot of time, because I was working full-time, often late into the evenings. And I had no idea what I was doing.

But I did have an old laptop, and the keyboard just broke on it. It was an old Elitebook 840 G3. It had been through some stuff, but I realized that this would be a great opportunity to try something new. So I learned how to install Ubuntu 22.04 LTS from a USB on my laptop. A lot of tutorials were starting to come out, thanks to Microsoft’s EoL for Windows 10.

It wasn’t easy, because I had learned that there’s several BIOS options that would prevent me from doing so. So troubleshooting that helped me learn that not everything is as straightforward. And when I did get the setup, it wasn’t easy with that broken keyboard (I didn’t have an extra at the time, but I do now haha). But through persistence, and a little bit of frustration, I got Ubuntu running.

It was all very quick from there. I learned about ssh, ufw, and VPNs. I learned how to change settings of servers using VIM to adjust the lid from doing nothing when it closed. I learned about Linux in general, how it runs, what systemd does, and how to install programs to customize it the way I wanted, even installing from source code.

After playing with my newfound server, I realized that I needed more power. I needed storage to provide the same benefit as Microsoft 365. I needed processing power to host the services I wanted. I needed a dedicated NAS device to do what I was originally trying to do.

So I set out on the internet, and gathered a lot of info, trying to see if buying a pre-built NAS or building a custom computer would be better. I weighed the options and found that building my own would be better, using my dollars on something that would last 5+ years, not 2+ years on a prebuilt system. And I even drafted and explained to my wife using an [executive summary](https://github.com/Flabbyaxe272/homelab/blob/main/change-requests/CR001-NetworkAttachedStorage.md) (cleaned by AI to remove personal details and wording).

In it, I did explain that by taking back our data to control it, that also means we are liable for our own data. We would need to secure it, and have redundancy through backups. And I will say, creating a backup solution that is easy to recover and is fairly inexpensive is hard to do.

So the moral of this story is: 

> “Convenience rents comfort; learning builds ownership.”
