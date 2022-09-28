---
id: 7ebc7a95lk6ic7gqbx3i3cl
title: Requirements
desc: ''
updated: 1663900469864
created: 1663899714444
---

# Features

## Document actions
- Upload document
- View document
- View tags in document

## Tag actions
- Create tag
- Split tag
    - What happens to documents with that tag? This one seems a little tricky.
- Merge tags, i.e. merge tags A and B
- Review tag
    - i.e., see documents with the tag
- Note: tags must be hierarchical 


## Social media actions
- View social media posts for tag
    - Input is one or more tagged quotes
    - View displays related social media posts
- Add social media post to tag
    - You can input text from a post as a document and add a tag

## Social media imports
- Bulk import social media corpus
- Import single social media post
- Tag social media post
- Import from screenshot (OCR)
- Upload screenshot from social media
- Import from comment URL (general interface). Ideally we could support:
    - Reddit
    - LinkedIn
    - Twitter
    - Facebook

## NLP
- View social media suggestions
- Add keyword filter to limit social media suggestions
- Suggest keyword filters (e.g. phrases)
- Add syntactic query
- Suggest syntactic query
- Display quantification statistics
    - Expected counts
    - Expected proportion
    - How many are like this or different?

# Properties

## Deployment
- Should run locally and on the web
- If runs locally, it can just use a local webserver and be a local web application

## Team
- You do want the ability to work with multiple annotators
- Share posts and tags with teammates
- Authentication is not a priority yet. People can just share URLs for now
- Auditing is not a priority yet but I guess it’s pretty easy

## Engineering

- Model, view, controller with interfaces between MVC

- Model uses a REST API
- Model has a swappable back end so you can change postgres vs. filesystem vs. mongo etc.
- Keep views simple so they can be easily changed
- Ideally write back end in Python
- If we don't modify Taguette we can borrow code from Taguette

# Wireframes

- For many of the document and tag actions, we can mimic the interactions from Taguette. Taguette is copying interactions from Nvivo. So there are standard ways of doing things for now.
