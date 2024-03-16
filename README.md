This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## how to make it work

- have mongoDB atlas account
- have a cluster
- add a `.env.local` file to the marketplace folder
- add the following to that file `MONGODB_URI=mongodb+srv:<connection-string>`
  - remember to replace `<connection-string>` with one from your MongoDB Atlas cluster
