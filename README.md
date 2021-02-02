# Github2Telegram Notifier

![](thumbnail.png)

Uses Github Webhook and Vercel's Serverless API to send github event updates to Telegram chat.

## Setup

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fadityatelange%2Fgithub2telegram-notifier&env=TG_TOKEN,TG_CHAT_ID,GH_HOOK_SECRET,PROD&envDescription=Environment%20variables%20needed%20to%20setup%20notifier&envLink=https%3A%2F%2Fgithub.com%2Fadityatelange%2Fgithub2telegram-notifier%23environment-variables&project-name=gh2tg-notif&repo-name=gh2tg-notif)

### Environment variables

| Name             | Description                                | Example                                          |
| ---------------- | ------------------------------------------ | ------------------------------------------------ |
| `TG_TOKEN`       | Telegram Bot Token                         | `0123456789:ZBX2mpx9Wjg4iqAs6izMKDXVgVV92dtOA0a` |
| `TG_CHAT_ID`     | Telegram Chat ID to which updates are sent | `9876543210`                                     |
| `GH_HOOK_SECRET` | Github Hook Secret                         | `my github hook seret`                           |
| `PROD`           | Production deployment or not               | `true`                                           |
