

## Instructions

1. Ensure you’ve initialised your project with `yarn dev` at least once.
2. Run `yarn seed-data`. This will populate your database with sample content.
3. Run `yarn dev` again to startup Admin UI with sample data in place.



## TODO

MVP
- [x] Define schema
- [x] Seed some widget data
- [] Create a plain MDsveX component with one widget
- [] Create a text type widget to hold the MDsveX component
  - https://www.chrsjxn.io/svelte/dynamic-imports
- [] Create a replacement admin page for page that renders a plain MDsveX document
- [] Integrate bytemd doc with markdown widget
- [] Integrate bytemd doc with recipe widget
- [] Create publishing pipeline that renders html from a page + URL
- [] Integrate sending rendered HTML to object store
- [] Implement default layout for page
- [] Deploy frontend server to digital ocean VPS
- [] Deploy DB (either postgres in plain VPS or replicated sqlite3)
- [] Implement webserver that displays page from URL

0.1.0
- [] Integrate hashing into publishing pipeline to prevent re-doing work
- [] Allow updating page/widget after initial creation, while preserving old pages
- [] Do any schema changes as necessary
- [] #community-work Write 10 short articles/pages
- [] #community-work Get feedback from Tir's Library

0.2.0
- [] #community-work Implement access control for publishing
- [] #community-work Deploy admin to vps
- [] #community-work Implement auth for admin page

