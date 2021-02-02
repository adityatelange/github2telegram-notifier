# Github2Telegram Notifier

Uses Github Webhook and Vercel's Serverless API to send github event updates to Telegram chat.

## Setup

### Environment variables

| Name             | Description                                | Example                                          |
| ---------------- | ------------------------------------------ | ------------------------------------------------ |
| `TG_TOKEN`       | Telegram Bot Token                         | `0123456789:ZBX2mpx9Wjg4iqAs6izMKDXVgVV92dtOA0a` |
| `TG_CHAT_ID`     | Telegram Chat ID to which updates are sent | `9876543210`                                     |
| `GH_HOOK_SECRET` | Github Hook Secret                         | `my github hook seret`                           |
| `PROD`           | Production deployment or not               | `true`                                           |
