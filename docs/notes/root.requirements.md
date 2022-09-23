---
id: 7ebc7a95lk6ic7gqbx3i3cl
title: Requirements
desc: ''
updated: 1663900469864
created: 1663899714444
---

## Document actions (Taguette supports)
- Upload document
- View document

## Tag actions (Taguette supports)
- Create tag
- Split tag
    - What happens to documents with that tag? This one seems a little tricky.
- Merge tag
- Review tag
    - See documents with the tag

## Deployment (Taguette supports)
- Should run locally and on the web
- If runs locally, it can just use a local webserver and be a local web application

## Social media actions
- View social media posts for tag
    - Input is one or more tagged posts
- Add social media post to tag
    - You can input text from a post as a document and add a tag

## Social media imports
- Bulk import social media corpus
- Import single social media post
    - Tag social media post
- Import from screenshot (OCR)
    - Upload screenshot from social media
- Import from URL
- Import from:
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