"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  id?: string;
}

export function Turnstile({ onVerify, onExpire, onError, id = "turnstile-container" }: TurnstileProps) {
  const [loaded, setLoaded] = useState(false);
  const widgetIdRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const callbackRef = useCallback(
    (token: string) => {
      onVerify(token);
    },
    [onVerify]
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.turnstile) setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded || !siteKey || !containerRef.current || !window.turnstile) return;
    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: callbackRef,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    } catch (e) {
      console.error("Turnstile render error:", e);
    }
    return () => {
      if (widgetIdRef.current != null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (_) {}
        widgetIdRef.current = null;
      }
    };
  }, [loaded, siteKey, callbackRef, onExpire, onError]);

  const handleLoad = () => setLoaded(true);

  if (!siteKey) {
    return (
      <div className="rounded border border-border bg-surface px-3 py-2 text-sm text-text-dim">
        Captcha not configured (add NEXT_PUBLIC_TURNSTILE_SITE_KEY).
      </div>
    );
  }

  return (
    <>
      <Script src={TURNSTILE_SCRIPT} strategy="afterInteractive" onLoad={handleLoad} />
      <div
        id={id}
        ref={containerRef}
        className="[&_.cf-turnstile]:inline-block"
        aria-label="Security verification"
      />
    </>
  );
}

export function resetTurnstile(widgetId: string | null) {
  if (widgetId != null && typeof window !== "undefined" && window.turnstile) {
    try {
      window.turnstile.reset(widgetId);
    } catch (_) {}
  }
}
