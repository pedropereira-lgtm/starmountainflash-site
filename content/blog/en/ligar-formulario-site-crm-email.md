---
titulo: "How to connect your website form to your CRM and email"
slug: "ligar-formulario-site-crm-email"
descricao: "What happens to an enquiry after someone clicks Send, how to get it into your CRM and inbox without manual copying, and which free tools suit a small business."
categoria: "Automação"
data: 2026-10-09
capa: ""
capaAlt: ""
estado: "publicado"
faq:
  - pergunta: "Do I need to pay for a CRM?"
    resposta: "Not to get started. HubSpot has a free CRM with no expiry date for up to two users and 1,000 contacts. Brevo has a free plan that lets you send up to 300 emails a day."
  - pergunta: "Can I connect a form I already have?"
    resposta: "In most cases, yes. It depends on the platform your website was built on."
  - pergunta: "What about enquiries that come in on WhatsApp?"
    resposta: "They can be routed to the same place, but that is a separate connection."
---
Connecting your website form to your CRM means every contact request is recorded and flagged automatically, without anyone copying details from an email into a spreadsheet. For a small business, you can do this with tools that have a free plan, such as HubSpot or Brevo, and have it up and running in a few hours of work.

This guide explains what should happen to an enquiry, the three ways to make it happen and the mistakes that cost you contacts.

## What should happen when someone fills in the form?

Four things, in the right order:

1. **The enquiry is stored** somewhere other than the inbox. Emails get lost, land in spam or never get opened.
2. **Whoever handles enquiries is notified** straight away, by email or on their phone.
3. **The person gets a confirmation** that their enquiry has arrived and when they can expect a reply.
4. **A follow-up task is created**, in case nobody replies that day.

If your website only does the second one, every enquiry depends on someone seeing an email in time.

## What are the ways to set up the connection?

**1. The CRM tool's own form.** HubSpot and Brevo let you create a form and embed it on your website. It is the quickest option. The downside is the look: the form does not always match the rest of the site.

**2. A middleware tool.** Your website form sends the data to a service such as Make, Zapier or n8n, which passes it on to the CRM, to email and wherever else it needs to go. This works when the website was built on a closed platform. It adds a monthly fee and one more part that can fail.

**3. A direct connection in the website's code.** The website sends the enquiry straight to the database and the email service. There are no middleman subscriptions and the form keeps the look of the site. It requires the website to be built in code rather than on a drag-and-drop platform.

| | CRM form | Middleware tool | Direct connection |
|---|---|---|---|
| Setup time | Under an hour | A few hours | Half a day to a day |
| Monthly cost | Free on the basic plan | Monthly fee above a certain volume | No middleman fee |
| Form design | Limited | Flexible | Flexible |
| Best for | Anyone who wants to start today | Sites on closed platforms | Sites built in code |

## HubSpot, Brevo or a spreadsheet?

- **Spreadsheet:** enough if you get few enquiries a month and you are the only person handling them. It stops working once there are follow-ups to keep track of.
- **Brevo:** the simplest choice when what matters most is sending emails, the confirmation to the customer and the internal alert.
- **HubSpot:** worth it when you have a sales process with several stages, proposals and follow-ups, because it keeps contacts, deals and tasks in one place.

A rule of thumb: if you cannot say what stage each enquiry you received this month is at, you need a CRM. If you would like help setting one up, take a look at [automations for SMEs](/en/automacoes). If you can, a spreadsheet is still enough.

## How the form on my own website is set up

The form on starmountainflash.pt uses the third option. When someone asks for a quote:

- The enquiry is saved to a database (Supabase), along with the page it came from.
- I get an email alert straight away, sent through Brevo.
- Sales follow-up, tasks and reminders are handled in HubSpot.

There are two safeguards I recommend for any form. The first is a hidden field that only bots fill in, which lets you reject spam without making anyone solve puzzles. The second is a limit on how many submissions can come from the same address per hour.

## Which mistakes cost you enquiries?

- **Relying on email alone.** If the alert goes to spam, the enquiry disappears.
- **Not testing after changes.** A form can stop working after an update without any visible error. Send a test enquiry every month.
- **Not confirming to the customer.** Without a confirmation, the person does not know whether their enquiry arrived and contacts the next competitor.
- **Asking for too much information.** Every extra field reduces the number of people who finish the form. Name, contact details and the message are usually enough.
- **Forgetting GDPR.** The form should say what the data is used for and link to the privacy policy.
