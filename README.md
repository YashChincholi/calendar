This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

Install my-project with npm

```bash
npm install my-project
cd my-project
code .
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

- Add Events: Users can add events by clicking on a specific day in the calendar.
- Edit Events: Users can edit existing events by selecting them from the calendar.
- Delete Events: Users can delete events from a selected day
- Monthly Calendar: Displays a calendar grid for the current month with all days properly aligned.
- Navigation: Users can switch between months using "Previous" and "Next" buttons.
- Synchronized Calendars: Includes a large main calendar and a small calendar, both synchronized to show the same month and selected day.
- Visual Differentiation: Highlights the selected day and the current day with distinct visual styles.
- Daily Events: Displays a list of all events for the selected day in a modal or side panel.
- Event Filtering: Allows users to filter events by category (e.g., work, personal, others).
- Local Storage: Uses localStorage to persist events between page refreshes, ensuring that user data is not lost.
- Event Categories: Implements color coding for events based on categories (e.g., work, personal, others).
- Hover Effects: Shows a hover card with a badge indicating the event category when hovering over a category label.
- Export Events: Allows users to export the event list for a specific month as a JSON or CSV file.
- Drag and Drop: Enables users to drag and drop events to different days within the calendar for easy rescheduling.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
