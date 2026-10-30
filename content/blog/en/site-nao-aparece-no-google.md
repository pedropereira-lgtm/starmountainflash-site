---
titulo: "My website isn't showing up on Google: why, and how to fix it"
slug: "site-nao-aparece-no-google"
descricao: "Website not showing up on Google? How to confirm the problem in 5 minutes, the 7 most common causes and what to do about each one."
categoria: "Websites"
data: 2026-10-21
capa: ""
capaAlt: ""
estado: "publicado"
faq:
  - pergunta: "How do I know if my website is on Google?"
    resposta: "Search Google for site: followed by your domain. If pages appear, the site is indexed. To check the status of each page, use URL Inspection in Google Search Console."
  - pergunta: "How long does a new website take to appear on Google?"
    resposta: "Anything from a few hours to several weeks. Submitting the site and its sitemap in Search Console on the day it goes live helps Google find it sooner."
  - pergunta: "Does requesting indexing in Search Console fix the problem?"
    resposta: "It helps when the page is new or has been fixed. If the page hasn't changed and Google has already visited it without keeping it, asking again rarely works: the content needs improving."
  - pergunta: "My website is on Google but nobody finds it. Why?"
    resposta: "Usually because it doesn't say clearly what service it offers, doesn't have one page per service or is slow on mobile. That is a ranking problem, not an indexing one."
---
**Short answer:** if your website isn't showing up on Google, the cause is almost always in one of two places. Either Google doesn't have it in its index yet, or it does but shows it so far down that nobody ever gets there. These are different problems with different solutions, so the first step is working out which one you have.

## First, confirm the problem (5 minutes)

Plenty of people conclude their site "isn't on Google" when it actually is, just on the third or fourth page of results. To find out for sure:

1. **Search for `site:yourdomain.pt` on Google.** If pages appear, the site is indexed and the problem is its ranking. If nothing appears, Google doesn't have it.
2. **Open Google Search Console** and paste the page address into the bar at the top (URL Inspection). Search Console tells you whether the page is on Google and, if it isn't, why not.
3. **Look at the "Page indexing" report.** It shows how many pages are in the index and groups the ones left out by reason.

If you haven't set up Search Console yet, that is the first thing to do. It is free, and it is the only way to see your site the way Google sees it.

## The 7 most common causes

### 1. The site is new

A site that has just gone live won't appear the next day. Google can take anything from a few hours to several weeks to index a new page, and a domain with no history usually sits at the slower end. If your site is less than a month old, the cause may simply be time. Even so, don't just sit and wait: submit the site in Search Console, which does more than anything else to speed up discovery.

### 2. Google doesn't know the site exists

Google finds pages by following links and reading sitemaps. A site with no sitemap submitted and no other site linking to it can go undiscovered for a long time.

What to do:

- Submit your sitemap (usually at `yourdomain.pt/sitemap.xml`) in Search Console.
- Add your website address to your Google Business Profile, your social media and the directories in your sector.

### 3. The site is telling Google not to show it

This is more common than you might think. While they are being built, many sites are set not to be indexed, and that setting sometimes stays switched on after launch. In WordPress, for example, there is an option under Reading settings to discourage search engines, and all it takes is forgetting to switch it off.

There are two kinds of block to check:

- **`noindex` tag:** asks Google not to keep the page. URL Inspection in Search Console shows whether it is there.
- **`robots.txt` file:** can stop Google from visiting the whole site. Open `yourdomain.pt/robots.txt` and see whether it has a `Disallow: /` line on its own.

If it is one of these, the fix takes minutes and the site starts appearing as soon as Google comes back round.

### 4. Google visited the pages but decided not to keep them

In the indexing report, this shows up as **"Crawled - currently not indexed"** or **"Discovered - currently not indexed"**. In the first case, Google read the page and didn't find it useful enough. In the second, it knows the page exists but hasn't visited it yet.

The usual causes are pages with very little text, pages that are almost identical to each other (the same text repeated across several service pages, for example) or pages that no other page on the site links to. Requesting indexing again for an unchanged page rarely helps. What does help is improving the content and linking to the page from the main pages of your site.

### 5. The site is on Google, but a long way down

If the `site:` search shows your pages, the problem isn't indexing, it is ranking. The most frequent reasons:

- **The site doesn't say clearly what it does.** If the homepage talks about "solutions" and "excellence" and never actually names the service, Google has no way of matching it to what the customer is searching for.
- **There isn't one page per service.** A single page with everything mixed together competes poorly against competitors who have a page for each service.
- **The site is slow on mobile**, which is where most searches happen.
- **The search term is highly competitive** and the site doesn't yet have the authority to compete.

This is the case that takes longest to fix, because it depends on content rather than just correcting a setting. I go through the main points in the guide on [how to show up on Google in 2026](/en/blog/como-aparecer-google-seo-pme-portugal).

### 6. You changed websites and lost the old pages

When a site is rebuilt, page addresses often change. If the old addresses aren't redirected to the new ones, Google keeps showing pages that no longer exist, and anyone who clicks lands on an error page. The ranking the old site had earned is lost.

It happened on my own site: after I rebuilt it, Search Console showed that old addresses were still getting most of the impressions, and one of them had no redirect. Creating it was all it took. If you have changed websites in the last few months, this is the first place to look.

### 7. The site has a Google penalty

It is rare, but it happens to sites with copied text, paid links or misleading content. In Search Console, the "Manual actions" section tells you whether there is a penalty and what to fix. If it is empty, you can rule this cause out.

## Summary: symptom, cause and what to do

| What you see | Likely cause | What to do |
|---|---|---|
| `site:` shows nothing and the site is a few weeks old | New or undiscovered site | Search Console and sitemap |
| `site:` shows nothing and the site is older | Blocked by `noindex` or `robots.txt` | Remove the block |
| Some pages appear, others don't | Thin, duplicate or unlinked content | Improve the text and link the pages |
| Every page appears, but a long way down | Ranking problem | One page per service, clear text, speed |
| Dropped after changing websites | Missing redirects | Redirect old addresses to the new ones |
| Disappeared suddenly | Penalty or recent block | Check "Manual actions" and URL Inspection |

## How long it takes to fix

It depends on the cause. A block fixed today can show results within a few days, as soon as Google visits the site again. A ranking problem takes weeks to months, because Google needs time to reassess the new content. And there is one thing worth knowing: Google doesn't guarantee that any page will be indexed. What you can do is remove the obstacles and give it good reasons to keep the page.

If you are thinking of rebuilding your site because of this, the guide [WordPress, Wix or a custom-built website](/en/blog/wordpress-wix-ou-site-a-medida) will help you choose the right foundation.

*Want to know which of these situations applies to your site? I offer a [free review of your website](/analise-gratuita): I check whether it is on Google, what is holding it back and what to fix first. You get the report by email within 3 working days, with no obligation.*
