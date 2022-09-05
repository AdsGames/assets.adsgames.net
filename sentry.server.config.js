import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ??
    "https://67348aec6b0e43059adaef26746458f5@o1178011.ingest.sentry.io/6717503",
  tracesSampleRate: 1.0,
});
