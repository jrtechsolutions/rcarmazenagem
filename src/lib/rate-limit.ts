type Bucket = { count: number; reset: number };

const hits = new Map<string, Bucket>();

export function rateLimit(
  ip: string,
  limit = 5,
  windowMs = 10 * 60 * 1000,
) {
  const now = Date.now();
  const rec = hits.get(ip);

  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterMs: 0 };
  }

  if (rec.count >= limit) {
    return { ok: false, remaining: 0, retryAfterMs: rec.reset - now };
  }

  rec.count += 1;
  return { ok: true, remaining: limit - rec.count, retryAfterMs: 0 };
}

export function clientIp(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return headers.get("x-real-ip") || "unknown";
}
