# Black Opal Portfolio — Ma. Angeline Tipa

React + Vite multi-page portfolio. Claymorphism, black-opal palette, dark/light toggle.

## Run locally
```
npm install
npm run dev
```

## Edit content
Everything (about, skills, projects, certificates, art) is in:
`src/constants/data.js`

To add images: put files in `public/` (e.g. `public/certs/x.jpg`)
then set `image: '/certs/x.jpg'` in data.js.

## Deploy
Push to GitHub → import repo on Vercel → done.
(`vercel.json` already handles page routing.)

## Next step (planned)
Admin mode: Supabase auth + database so content can be added from the site itself.
