const BASE_SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export function applySecurityHeaders(response: Response, request: Request): Response {
  const headers = new Headers(response.headers);

  for (const [key, value] of Object.entries(BASE_SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }

  const url = new URL(request.url);
  if (url.protocol === "https:" && !headers.has("Strict-Transport-Security")) {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
