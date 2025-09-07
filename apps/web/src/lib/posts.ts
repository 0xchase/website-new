// apps/web/src/lib/posts.ts
import fs from 'node:fs'
import path from 'node:path'


export type PostMeta = { slug: string; title: string; date?: string }


const blogRoot = path.join(process.cwd(), 'posts')


export function getPosts(): PostMeta[] {
const slugs = fs.readdirSync(blogRoot).filter((name) => {
const full = path.join(blogRoot, name)
return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, 'page.mdx'))
})
return slugs.map((slug) => {
const file = fs.readFileSync(path.join(blogRoot, slug, 'page.mdx'), 'utf8')
const title = /title:\s*"([^"]+)"/.exec(file)?.[1] || slug
const date = /date:\s*"([^"]+)"/.exec(file)?.[1]
return { slug, title, date }
}).sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}