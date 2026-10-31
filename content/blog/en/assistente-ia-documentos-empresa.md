---
titulo: "An AI assistant that knows your company's documents"
slug: assistente-ia-documentos-empresa
descricao: "How an AI assistant that answers from a company's internal documents works, where it tends to go wrong and how to look after the data."
categoria: "Automação"
data: 2026-10-31
capa: ""
capaAlt: ""
estado: "publicado"
faq:
  - pergunta: "Are the company's documents exposed on the internet?"
    resposta: "No. The index sits somewhere private and only people with access can ask questions."
  - pergunta: "Can the AI make answers up?"
    resposta: "The risk drops when it answers only from the documents and shows the source, but it's worth testing with questions you already know the answer to before opening it to the team."
  - pergunta: "Do I have to change where I keep my documents?"
    resposta: "Usually not. The assistant reads them from where they already are."

---
At Starmountain I use an Obsidian vault with the notes that run the business: how I work, services, prices, processes. Some files in it are written only for AI, for when I need it to understand the context before it helps me. In a one-person company, a well-organised folder does the job. In a company with several teams and thousands of documents, the same idea needs rules.

## What is already happening in companies

A study by [OpinionWay for Cegid](https://www.cegid.com/ib/pt/imprensa/portugal-84-porcento-utilizam-ia-trabalho/), from August 2026, says 84% of Portuguese workers already use AI at work and 69% use outside tools without telling their employer.

The study doesn't say what those people paste into those tools. That's the point: the company doesn't know either.

## How an internal assistant works

The company's documents are indexed somewhere private. When someone asks "what's the return period in the contract with supplier X?", the assistant fetches the passages that cover it, the AI answers from them and says which document each part came from.

The method is called RAG. What matters to whoever uses it is the source: if an answer looks odd, open the document and check.

## Where it tends to go wrong

In the documents, more than in the AI. If there are three versions of the same procedure in different folders, the assistant may quote the wrong one, and with total confidence. Tidying up and choosing which documents go in is part of the job.

It isn't there to make decisions either. It tells you what is written down; what you do with that is still someone's call.

## Looking after the data

Each team should only be able to ask about documents it can already open today. If sales has no access to salaries, the assistant can't give them salaries either.

It's worth knowing where the index is hosted, which AI provider is behind it and whether that provider's terms rule out using your data to train models. Keeping a log of who asked what helps with audits and shows what is missing from the documents. Documents with personal data need their own rules because of the GDPR.

## Where to start

One department, a small set of documents and a list of questions you already know the answers to. If the assistant gets them right and cites the right source, widen it. If it doesn't, the problem is usually in the documents.

In larger companies, with offices in more than one city, the assistant connects to wherever the documents already live, such as SharePoint or Google Drive, and to the login the team already uses. Someone in Lisbon and someone in Porto ask the same assistant and get the same answer.

This is what I build in the [Internal assistant](https://starmountainflash.pt/en/assistente-interno) service: a private assistant, with the source cited in every answer and each team's permissions respected.
