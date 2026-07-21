"use client";

import { useEffect, useState } from "react";

/** Stable small-viewport height (100svh), measured via a hidden probe.
 *  Unlike window.innerHeight it does NOT change while the iOS browser
 *  chrome collapses/expands during scrolling — no mid-scroll jumps. */
export function useSvh(initial = 1) {
  const [svh, setSvh] = useState(initial);

  useEffect(() => {
    const probe = document.createElement("div");
    probe.style.cssText =
      "position:fixed;top:0;left:0;width:0;height:100svh;pointer-events:none;visibility:hidden;";
    document.body.appendChild(probe);

    const update = () => setSvh(Math.max(probe.offsetHeight, 1));
    update();

    const ro = new ResizeObserver(update);
    ro.observe(probe);
    return () => {
      ro.disconnect();
      probe.remove();
    };
  }, []);

  return svh;
}
