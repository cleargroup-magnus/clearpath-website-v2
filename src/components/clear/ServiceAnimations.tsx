import { useEffect, useState } from "react";

const B  = "oklch(0.62 0.22 260)";
const BL = "oklch(0.72 0.18 260)";
const G  = "oklch(0.62 0.20 150)";
const GL = "oklch(0.72 0.18 150)";

/* ── Phase cycling: 0 = before · 1 = process · 2 = result ───────────── */
export function usePhase(active: boolean, d0 = 2200, d1 = 1800, d2 = 2400): number {
  const [phase, setPhase] = useState(0);
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (!active) { setPhase(0); return; }
    setPhase(0);
    const t1 = setTimeout(() => setPhase(1), d0);
    const t2 = setTimeout(() => setPhase(2), d0 + d1);
    const t3 = setTimeout(() => setCycle((c) => c + 1), d0 + d1 + d2);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [active, cycle, d0, d1, d2]);
  return phase;
}

/* ── Phase progress bar ───────────────────────────────────────────────── */
export function PhaseBar({ phase, labels }: { phase: number; labels: [string, string, string] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, width: "100%" }}>
      <span style={{
        fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase",
        color: phase === 2 ? GL : phase === 1 ? BL : `${BL}60`,
        transition: "color .5s ease",
      }}>
        {labels[phase]}
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: i === phase ? 18 : 5, height: 3, borderRadius: 2,
            background: i === phase ? (phase === 2 ? G : B) : `${B}28`,
            transition: "all .45s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── Web Development ────────────────────────── */
/* wireframe → designed → live                                             */
export function WebDevAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1500, 1300, 1600);

  const built = phase >= 1;
  const live  = phase === 2;

  const chrome    = "#EAEAEC";
  const wire      = "rgba(0,0,0,0.10)";
  const wireFaint = "rgba(0,0,0,0.05)";

  // Hero card dark bg (navy, like the site's dark sections)
  const heroCardBg = built ? "#0D1829" : "rgba(0,0,0,0.05)";

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <svg viewBox="0 0 320 224" style={{ width: "100%", display: "block" }}>
        <defs>
          {/* Subtle gradient for hero section bg */}
          <linearGradient id="wdHeroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={B} stopOpacity="0.07" />
            <stop offset="100%" stopColor={B} stopOpacity="0.02" />
          </linearGradient>
          {/* Clip for hero card inner content */}
          <clipPath id="wdHeroClip">
            <rect x="186" y="56" width="122" height="64" rx="10" />
          </clipPath>
          {/* Clip for full page area */}
          <clipPath id="wdPageClip">
            <rect x="0" y="28" width="320" height="196" />
          </clipPath>
        </defs>

        {/* ── Browser shell ── */}
        <rect x="0" y="0" width="320" height="224" rx="12" fill={chrome} />
        <rect x="0" y="16" width="320" height="12" fill={chrome} />

        {/* Traffic lights */}
        <circle cx="16" cy="14" r="4.5" fill={built ? "#FF5F57" : "rgba(0,0,0,0.15)"} style={{ transition: "fill .4s ease" }} />
        <circle cx="29" cy="14" r="4.5" fill={built ? "#FFBD2E" : "rgba(0,0,0,0.15)"} style={{ transition: "fill .4s ease .05s" }} />
        <circle cx="42" cy="14" r="4.5" fill={built ? "#28C840" : "rgba(0,0,0,0.15)"} style={{ transition: "fill .4s ease .10s" }} />

        {/* URL bar */}
        <rect x="58" y="7" width="162" height="14" rx="7"
          fill={built ? "#FFFFFF" : "rgba(0,0,0,0.10)"}
          style={{ transition: "fill .4s ease" }}
        />
        {/* Lock icon — live */}
        <g style={{ opacity: live ? 1 : 0, transition: "opacity .3s ease .2s" }}>
          <rect x="66" y="11.5" width="4.5" height="3.5" rx="0.8" fill="rgba(0,0,0,0.32)" />
          <path d="M 66.5 11.5 Q 68.2 8.8 70 11.5" fill="none" stroke="rgba(0,0,0,0.32)" strokeWidth="1" strokeLinecap="round" />
        </g>
        {/* URL text */}
        <text x={live ? 83 : 139} y="17.5" textAnchor={live ? "start" : "middle"}
          fontSize="7" fill={live ? "rgba(0,0,0,0.50)" : "transparent"}
          fontFamily="monospace" style={{ transition: "fill .35s ease .15s" }}>
          yourclient.com
        </text>

        {/* LIVE badge */}
        <rect x="232" y="7" width="36" height="14" rx="7"
          fill={live ? "rgba(40,200,64,0.15)" : "transparent"}
          stroke={live ? "#28C840" : "transparent"} strokeWidth="0.8"
          style={{ transition: "all .35s ease .2s" }}
        />
        <circle cx="240" cy="14" r="2.6" fill={live ? "#28C840" : "transparent"}
          style={{ transition: "fill .35s ease .25s" }}>
          {live && <animate attributeName="r" values="2.6;3.8;2.6" dur="2.2s" repeatCount="indefinite" />}
          {live && <animate attributeName="opacity" values="1;0.35;1" dur="2.2s" repeatCount="indefinite" />}
        </circle>
        <text x="252" y="17.5" textAnchor="middle" fontSize="6.5" fontWeight="700"
          fontFamily="Inter, sans-serif" fill={live ? "#28C840" : "transparent"}
          style={{ transition: "fill .35s ease .25s" }}>LIVE</text>

        {/* ── PAGE AREA ── */}
        <rect x="0" y="28" width="320" height="196" fill="#FFFFFF" />

        {/* ── NAVBAR ── */}
        <rect x="0" y="28" width="320" height="24"
          fill={built ? B + "13" : "rgba(0,0,0,0.025)"}
          style={{ transition: "fill .45s ease" }}
        />
        {/* Logo */}
        <rect x="12" y="33" width="30" height="13" rx="4"
          fill={built ? B + "35" : wire}
          style={{ transition: "fill .45s ease" }}
        />
        <text x="27" y="42.5" textAnchor="middle" fontSize="6" fontWeight="800"
          fontFamily="Inter, sans-serif" fill={built ? BL : "transparent"}
          style={{ transition: "fill .45s ease" }}>BRAND</text>
        {/* Nav links */}
        {[196, 220, 244].map((x, i) => (
          <rect key={i} x={x} y="36.5" width="18" height="4.5" rx="2.2"
            fill={built ? "rgba(0,0,0,0.20)" : wire}
            style={{ transition: `fill .45s ease ${i * 0.06}s` }}
          />
        ))}
        {/* Nav CTA button */}
        <rect x="270" y="31" width="38" height="13" rx="6.5"
          fill={built ? B : wire}
          style={{ transition: "fill .45s ease" }}
        />
        <text x="289" y="40" textAnchor="middle" fontSize="5.5" fontWeight="700"
          fontFamily="Inter, sans-serif" fill={built ? "white" : "transparent"}
          style={{ transition: "fill .45s ease" }}>Contact</text>

        {/* ── HERO SECTION ── */}
        <rect x="0" y="52" width="320" height="70"
          fill={built ? "url(#wdHeroGrad)" : "rgba(0,0,0,0.015)"}
          style={{ transition: "fill .45s ease" }}
        />

        {/* Headline — 2 lines */}
        <rect x="16" y="62" width="136" height="10" rx="4.5"
          fill={built ? "rgba(0,0,0,0.82)" : wire}
          style={{ transition: "fill .45s ease" }}
        />
        <rect x="16" y="76" width="106" height="10" rx="4.5"
          fill={built ? "rgba(0,0,0,0.82)" : wire}
          style={{ transition: "fill .45s ease .04s" }}
        />
        {/* Subtext */}
        <rect x="16" y="91" width="118" height="4.5" rx="2"
          fill={built ? "rgba(0,0,0,0.36)" : wireFaint}
          style={{ transition: "fill .45s ease" }}
        />
        <rect x="16" y="99" width="94" height="4.5" rx="2"
          fill={built ? "rgba(0,0,0,0.24)" : wireFaint}
          style={{ transition: "fill .45s ease .04s" }}
        />

        {/* CTA button */}
        {/* Glow ring (live only — animated pulse) */}
        <rect x="12" y="107" width="72" height="18" rx="9"
          fill="none" stroke={B} strokeWidth="1" strokeOpacity="0"
          style={{ transition: "stroke-opacity .3s ease" }}>
          {live && <animate attributeName="stroke-width" values="1;10;1" dur="2s" repeatCount="indefinite" />}
          {live && <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="2s" repeatCount="indefinite" />}
        </rect>
        {/* Button body */}
        <rect x="16" y="109" width="64" height="16" rx="8"
          fill={built ? B : wire}
          style={{ transition: "fill .45s ease" }}
        />
        <text x="48" y="120" textAnchor="middle" fontSize="6" fontWeight="700"
          fontFamily="Inter, sans-serif" fill={built ? "white" : "transparent"}
          style={{ transition: "fill .45s ease" }}>Get started →</text>

        {/* ── HERO CARD — mini website hero inside the animation ── */}
        {/* Outer container */}
        <rect x="186" y="56" width="122" height="64" rx="10"
          fill={heroCardBg}
          stroke={built ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}
          strokeWidth="1"
          style={{ transition: "all .5s ease" }}
        />

        {/* Clipped inner content */}
        <g clipPath="url(#wdHeroClip)">
          {/* Decorative gradient orb — top-right */}
          <circle cx="290" cy="60" r="38"
            fill={built ? B + "25" : "transparent"}
            style={{ transition: "fill .5s ease .1s" }}
          />
          <circle cx="288" cy="58" r="22"
            fill={built ? B + "18" : "transparent"}
            style={{ transition: "fill .5s ease .15s" }}
          />

          {/* Mini nav bar */}
          <rect x="186" y="56" width="122" height="14"
            fill={built ? "rgba(255,255,255,0.05)" : "transparent"}
            style={{ transition: "fill .5s ease" }}
          />
          {/* Mini traffic lights */}
          {built && [0,1,2].map(k => (
            <circle key={k} cx={193 + k * 6} cy="63" r="1.8"
              fill={["rgba(255,95,87,0.7)","rgba(255,189,46,0.7)","rgba(40,200,64,0.7)"][k]}
              style={{ transition: `fill .4s ease ${k * 0.05}s` }}
            />
          ))}

          {/* Mini white headline bars */}
          <rect x="192" y="77" width="70" height="7" rx="3"
            fill={built ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.08)"}
            style={{ transition: "fill .5s ease .1s" }}
          />
          <rect x="192" y="88" width="52" height="5.5" rx="2.5"
            fill={built ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.05)"}
            style={{ transition: "fill .5s ease .15s" }}
          />

          {/* Mini CTA in the card */}
          <rect x="192" y="99" width="42" height="13" rx="6.5"
            fill={built ? B : "rgba(255,255,255,0.08)"}
            style={{ transition: "fill .5s ease .2s" }}
          >
            {live && <animate attributeName="opacity" values="1;0.7;1" dur="2.4s" begin="0.5s" repeatCount="indefinite" />}
          </rect>
          <text x="213" y="108" textAnchor="middle" fontSize="5.5" fontWeight="700"
            fontFamily="Inter, sans-serif"
            fill={built ? "white" : "transparent"}
            style={{ transition: "fill .5s ease .2s" }}>Book call</text>

        </g>

        {/* ── SECTION DIVIDER + LABEL ── */}
        <line x1="0" y1="126" x2="320" y2="126" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
        <rect x="116" y="129" width="88" height="5.5" rx="2.7"
          fill={built ? B + "28" : wireFaint}
          style={{ transition: "fill .45s ease" }}
        />

        {/* ── 3 FEATURE CARDS ── */}
        {[0, 1, 2].map((i) => {
          const cx = 10 + i * 102;
          const hovered = live && i === 1;
          return (
            <g key={i}>
              <rect x={cx} y="138" width="94" height="60" rx="9"
                fill={built ? (hovered ? "#F5F8FF" : "#FAFAFA") : "#F6F6F7"}
                stroke={hovered ? B + "55" : built ? B + "20" : "rgba(0,0,0,0.07)"}
                strokeWidth={hovered ? "1.5" : "1"}
                style={{ transition: `all .45s ease ${i * 0.08}s` }}
              />
              {/* Icon circle */}
              <circle cx={cx + 15} cy="154" r="7.5"
                fill={hovered ? B + "35" : built ? B + "20" : "rgba(0,0,0,0.07)"}
                style={{ transition: `fill .45s ease ${i * 0.08}s` }}
              />
              {/* Icon glyph */}
              <text x={cx + 15} y="157.5" textAnchor="middle" fontSize="7.5"
                fontFamily="Inter, sans-serif"
                fill={built ? BL : "transparent"}
                style={{ transition: `fill .45s ease ${i * 0.08}s` }}>
                {["✦","⚡","✓"][i]}
              </text>
              {/* Title */}
              <rect x={cx + 28} y="150" width="54" height="6.5" rx="3"
                fill={built ? "rgba(0,0,0,0.68)" : wire}
                style={{ transition: `fill .45s ease ${i * 0.08}s` }}
              />
              {/* Body lines */}
              <rect x={cx + 8} y="166" width="72" height="4" rx="2"
                fill={built ? "rgba(0,0,0,0.22)" : wireFaint}
                style={{ transition: `fill .45s ease ${i * 0.08 + 0.06}s` }}
              />
              <rect x={cx + 8} y="174" width="58" height="4" rx="2"
                fill={built ? "rgba(0,0,0,0.14)" : wireFaint}
                style={{ transition: `fill .45s ease ${i * 0.08 + 0.10}s` }}
              />
              <rect x={cx + 8} y="182" width="42" height="4" rx="2"
                fill={built ? "rgba(0,0,0,0.08)" : wireFaint}
                style={{ transition: `fill .45s ease ${i * 0.08 + 0.14}s` }}
              />
            </g>
          );
        })}

        {/* ── CTA BANNER (bottom) ── */}
        <rect x="0" y="202" width="320" height="22"
          fill={built ? B + "0c" : "rgba(0,0,0,0.02)"}
          style={{ transition: "fill .45s ease" }}
        />
        {/* Banner text */}
        <rect x="68" y="207" width="88" height="5.5" rx="2.7"
          fill={built ? "rgba(0,0,0,0.45)" : wireFaint}
          style={{ transition: "fill .45s ease" }}
        />
        {/* Banner CTA */}
        <rect x="170" y="205" width="82" height="11" rx="5.5"
          fill={built ? B : wireFaint}
          style={{ transition: "fill .45s ease" }}
        />
        <text x="211" y="213" textAnchor="middle" fontSize="5.5" fontWeight="700"
          fontFamily="Inter, sans-serif" fill={built ? "white" : "transparent"}
          style={{ transition: "fill .45s ease" }}>Book a free call →</text>

        {/* ── SCROLLBAR (live) ── */}
        <rect x="315" y="29" width="3.5" height="194" rx="1.75"
          fill={live ? "rgba(0,0,0,0.04)" : "transparent"}
          style={{ transition: "fill .3s ease" }}
        />
        <rect x="315.2" y="42" width="3" height="28" rx="1.5"
          fill={live ? "rgba(0,0,0,0.22)" : "transparent"}
          style={{ transition: "all .45s ease .2s" }}
        />

        {/* ── CURSOR (live — appears near CTA button) ── */}
        <g style={{ opacity: live ? 1 : 0, transition: "opacity .5s ease .15s" }}>
          {/* Cursor arrow shape at button position */}
          <path d="M 36 108 L 36 120 L 39.5 117 L 42 122 L 43.5 121.4 L 41 116 L 45 116 Z"
            fill="rgba(15,15,30,0.80)"
          />
          {/* Click ripple */}
          {live && (
            <circle cx="36" cy="108" r="4" fill="none" stroke={B} strokeWidth="1.5" strokeOpacity="0">
              <animate attributeName="r" values="4;14;4" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
            </circle>
          )}
        </g>

      </svg>

      <div style={{ marginTop: 8 }}>
        <PhaseBar phase={phase} labels={["Wireframe", "Designed", "Live"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Systems Integration ────────────────────── */
/* Scattered tools → Connected → Data flowing                              */
export function IntegrationAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1000, 1100, 1400);

  const CX = 150, CY = 104, R = 80, NR = 22, HUB_R = 15;
  const hexAngles = [-90, -30, 30, 90, 150, 210];

  const nodes = [
    { label: "CRM",       icon: "crm"       },
    { label: "Website",   icon: "website"   },
    { label: "Forms",     icon: "forms"     },
    { label: "Email",     icon: "email"     },
    { label: "Analytics", icon: "analytics" },
    { label: "Calendar",  icon: "calendar"  },
  ].map((n, i) => {
    const rad = hexAngles[i] * Math.PI / 180;
    return { ...n, cx: Math.round(CX + R * Math.cos(rad)), cy: Math.round(CY + R * Math.sin(rad)) };
  });

  const ringEdges: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]];
  const dist = (x1: number, y1: number, x2: number, y2: number) => Math.sqrt((x2-x1)**2 + (y2-y1)**2);

  const connected = phase >= 1;
  const flowing   = phase === 2;

  return (
    <div style={{ width: "100%", maxWidth: 310 }}>
      <svg viewBox="0 0 300 215" style={{ width: "100%", display: "block", overflow: "visible" }}>

        {/* ── Spokes: center → each node ── */}
        {nodes.map((n, i) => {
          const len = dist(CX, CY, n.cx, n.cy);
          return (
            <line key={"sp"+i} x1={CX} y1={CY} x2={n.cx} y2={n.cy}
              stroke={flowing ? G : B} strokeWidth="1.2"
              strokeDasharray={len} strokeDashoffset={connected ? 0 : len}
              strokeOpacity={connected ? 0.38 : 0}
              style={{ transition: `stroke-dashoffset .28s ease ${i * 0.06}s, stroke-opacity .22s ease ${i * 0.06}s, stroke .2s ease` }}
            />
          );
        })}

        {/* ── Ring edges ── */}
        {ringEdges.map(([ai, bi], i) => {
          const a = nodes[ai], b = nodes[bi];
          const len = dist(a.cx, a.cy, b.cx, b.cy);
          return (
            <line key={"rg"+i} x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
              stroke={flowing ? G : B} strokeWidth="1.2"
              strokeDasharray={len} strokeDashoffset={connected ? 0 : len}
              strokeOpacity={connected ? 0.28 : 0}
              style={{ transition: `stroke-dashoffset .28s ease ${i * 0.07 + 0.38}s, stroke-opacity .22s ease ${i * 0.07 + 0.38}s, stroke .2s ease` }}
            />
          );
        })}

        {/* ── Data dots phase 2: spokes ── */}
        {flowing && nodes.map((n, i) => (
          <circle key={"ds"+i} r="2.8" fill={BL}>
            <animateMotion dur="1.0s" begin={`${i * 0.17}s`} repeatCount="indefinite"
              path={`M ${CX} ${CY} L ${n.cx} ${n.cy}`} />
            <animate attributeName="opacity" values="0;1;1;0" dur="1.0s" begin={`${i * 0.17}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* ── Data dots phase 2: ring ── */}
        {flowing && ringEdges.map(([ai, bi], i) => {
          const a = nodes[ai], b = nodes[bi];
          return (
            <circle key={"dr"+i} r="2.2" fill={GL}>
              <animateMotion dur="1.35s" begin={`${i * 0.22 + 0.45}s`} repeatCount="indefinite"
                path={`M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`} />
              <animate attributeName="opacity" values="0;1;1;0" dur="1.35s" begin={`${i * 0.22 + 0.45}s`} repeatCount="indefinite" />
            </circle>
          );
        })}

        {/* ── Center hub ── */}
        <circle cx={CX} cy={CY} r={HUB_R}
          fill={connected ? B + "28" : "rgba(255,255,255,0.05)"}
          stroke={connected ? B : "rgba(255,255,255,0.18)"}
          strokeWidth="1.5"
          style={{ transition: "all .3s ease" }}
        />
        {/* Hub: 3-node mini-network icon */}
        <circle cx={CX} cy={CY - 3} r="2.2" fill={connected ? BL : "rgba(255,255,255,0.22)"}
          style={{ transition: "fill .3s ease" }} />
        <circle cx={CX - 4.5} cy={CY + 4} r="1.7" fill={connected ? BL + "99" : "rgba(255,255,255,0.14)"}
          style={{ transition: "fill .3s ease" }} />
        <circle cx={CX + 4.5} cy={CY + 4} r="1.7" fill={connected ? BL + "99" : "rgba(255,255,255,0.14)"}
          style={{ transition: "fill .3s ease" }} />
        <line x1={CX} y1={CY - 3} x2={CX - 4.5} y2={CY + 4}
          stroke={connected ? BL + "55" : "rgba(255,255,255,0.10)"} strokeWidth="1"
          style={{ transition: "stroke .3s ease" }} />
        <line x1={CX} y1={CY - 3} x2={CX + 4.5} y2={CY + 4}
          stroke={connected ? BL + "55" : "rgba(255,255,255,0.10)"} strokeWidth="1"
          style={{ transition: "stroke .3s ease" }} />

        {/* ── Outer nodes ── */}
        {nodes.map((n, i) => {
          const ix = n.cx, iy = n.cy - 5;
          const ty = n.cy + 10;
          const ic  = connected ? BL : "rgba(255,255,255,0.28)";
          const icS: React.CSSProperties = { transition: `stroke .25s ease ${i * 0.05}s` };
          const icF: React.CSSProperties = { transition: `fill .25s ease ${i * 0.05}s` };

          return (
            <g key={n.label}>
              <circle cx={n.cx} cy={n.cy} r={NR}
                fill={connected ? B + "1a" : "rgba(255,255,255,0.04)"}
                stroke={connected ? B : "rgba(255,255,255,0.15)"}
                strokeWidth="1.2"
                style={{ transition: `all .25s ease ${i * 0.05}s` }}
              />

              {n.icon === "crm" && (
                <g fill="none" stroke={ic} strokeWidth="1.3" strokeLinecap="round" style={icS}>
                  <ellipse cx={ix} cy={iy - 2.5} rx="5.5" ry="1.8" />
                  <line x1={ix - 5.5} y1={iy - 2.5} x2={ix - 5.5} y2={iy + 2.5} />
                  <line x1={ix + 5.5} y1={iy - 2.5} x2={ix + 5.5} y2={iy + 2.5} />
                  <ellipse cx={ix} cy={iy + 2.5} rx="5.5" ry="1.8" />
                </g>
              )}
              {n.icon === "website" && (
                <g fill="none" stroke={ic} strokeWidth="1.3" strokeLinecap="round" style={icS}>
                  <rect x={ix - 7} y={iy - 5} width="14" height="10.5" rx="2" />
                  <line x1={ix - 7} y1={iy - 1.5} x2={ix + 7} y2={iy - 1.5} />
                  <circle cx={ix - 4.5} cy={iy - 3.2} r="1.1" fill={ic} stroke="none" />
                </g>
              )}
              {n.icon === "forms" && (
                <g fill="none" stroke={ic} strokeWidth="1.3" strokeLinecap="round" style={icS}>
                  <rect x={ix - 6} y={iy - 5} width="12" height="10.5" rx="2" />
                  <line x1={ix - 3.5} y1={iy - 1} x2={ix + 3.5} y2={iy - 1} />
                  <line x1={ix - 3.5} y1={iy + 2.5} x2={ix + 1} y2={iy + 2.5} />
                </g>
              )}
              {n.icon === "email" && (
                <g fill="none" stroke={ic} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={icS}>
                  <rect x={ix - 7} y={iy - 4.5} width="14" height="9.5" rx="1.5" />
                  <path d={`M ${ix - 7} ${iy - 4.5} L ${ix} ${iy + 0.5} L ${ix + 7} ${iy - 4.5}`} />
                </g>
              )}
              {n.icon === "analytics" && (
                <g fill={ic} style={icF}>
                  <rect x={ix - 6.5} y={iy + 1} width="3.5" height="4.5" rx="1" />
                  <rect x={ix - 1.5} y={iy - 2.5} width="3.5" height="8.5" rx="1" />
                  <rect x={ix + 3} y={iy - 6} width="3.5" height="12" rx="1" />
                </g>
              )}
              {n.icon === "calendar" && (
                <g fill="none" stroke={ic} strokeWidth="1.3" strokeLinecap="round" style={icS}>
                  <rect x={ix - 6} y={iy - 3.5} width="12" height="10" rx="2" />
                  <line x1={ix - 6} y1={iy + 0.5} x2={ix + 6} y2={iy + 0.5} />
                  <line x1={ix - 2.5} y1={iy - 5.5} x2={ix - 2.5} y2={iy - 2} />
                  <line x1={ix + 2.5} y1={iy - 5.5} x2={ix + 2.5} y2={iy - 2} />
                </g>
              )}

              <text x={n.cx} y={ty} textAnchor="middle"
                fontSize="7" fontFamily="Inter, sans-serif" fontWeight="600"
                fill={flowing ? "rgba(255,255,255,0.90)" : connected ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.20)"}
                style={{ transition: `fill .25s ease ${i * 0.05}s` }}>
                {n.label}
              </text>
            </g>
          );
        })}

      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Scattered", "Connected", "Flowing"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── AI Integration ─────────────────────────── */
/* Input docs → AI processing → Output results                             */
export function AIAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1400, 1500, 1800);

  const inputDocs = [
    { y: 38, label: "Data" },
    { y: 72, label: "Logs" },
    { y: 106, label: "Reports" },
  ];

  const outputItems = [
    { y: 38, label: "Insight A" },
    { y: 72, label: "Insight B" },
    { y: 106, label: "Insight C" },
  ];

  // Hexagon points for center shape (cx=160, cy=90, r=28)
  const hex = (cx: number, cy: number, r: number) => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  };

  return (
    <div style={{ width: "100%", maxWidth: 420 }}>
      <svg viewBox="0 0 320 180" style={{ width: "100%", display: "block", overflow: "visible" }}>
        {/* ── INPUT DOCS (left, x~40) ── */}
        {inputDocs.map((doc, i) => (
          <g key={i} style={{ opacity: 1 }}>
            <rect x="8" y={doc.y} width="68" height="26" rx="6"
              fill="rgba(255,255,255,0.04)"
              stroke={phase >= 1 ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.10)"}
              strokeWidth="1"
              style={{ transition: `stroke .38s ease ${i * 0.08}s` }}
            />
            {/* Text lines */}
            <rect x="14" y={doc.y + 6} width="40" height="4" rx="2"
              fill={phase >= 1 ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.10)"}
              style={{ transition: `fill .38s ease ${i * 0.08}s` }}
            />
            <rect x="14" y={doc.y + 13} width="32" height="3" rx="1.5"
              fill={phase >= 1 ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.06)"}
              style={{ transition: `fill .38s ease ${i * 0.08 + 0.04}s` }}
            />
            <rect x="14" y={doc.y + 19} width="44" height="3" rx="1.5"
              fill={phase >= 1 ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.04)"}
              style={{ transition: `fill .38s ease ${i * 0.08 + 0.08}s` }}
            />
          </g>
        ))}

        {/* Arrow left → center */}
        <path d="M 78 90 L 116 90" fill="none"
          stroke={phase >= 1 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.12)"}
          strokeWidth="1.5"
          strokeDasharray="40"
          strokeDashoffset={phase >= 1 ? 0 : 40}
          markerEnd="url(#arrow-ai)"
          style={{ transition: "stroke-dashoffset .38s ease, stroke .3s ease" }}
        />

        {/* Arrow center → right */}
        <path d="M 204 90 L 238 90" fill="none"
          stroke={phase === 2 ? G : phase >= 1 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.12)"}
          strokeWidth="1.5"
          strokeDasharray="36"
          strokeDashoffset={phase === 2 ? 0 : 36}
          markerEnd="url(#arrow-ai-out)"
          style={{ transition: "stroke-dashoffset .38s ease .15s, stroke .3s ease" }}
        />

        {/* Arrow markers */}
        <defs>
          <marker id="arrow-ai" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={phase >= 1 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.12)"} />
          </marker>
          <marker id="arrow-ai-out" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={phase === 2 ? G : phase >= 1 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.12)"} />
          </marker>
        </defs>

        {/* ── CENTER HEXAGON (cx=160, cy=90) ── */}
        {/* Pulse ring — phase 1 */}
        <circle cx="160" cy="90" r="42"
          fill="none"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
          strokeOpacity={phase === 1 ? 0.3 : 0}
          style={{ transition: "stroke-opacity .4s ease" }}
        >
          {phase === 1 && (
            <animate attributeName="r" values="34;48;34" dur="1.1s" repeatCount="indefinite" />
          )}
          {phase === 1 && (
            <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="1.1s" repeatCount="indefinite" />
          )}
        </circle>

        <polygon
          points={hex(160, 90, 28)}
          fill={phase >= 1 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}
          stroke={phase >= 1 ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.15)"}
          strokeWidth="1.5"
          style={{ transition: "fill .38s ease, stroke .38s ease" }}
        />
        <text x="160" y="87" textAnchor="middle" fontSize="11" fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill={phase >= 1 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.35)"}
          style={{ transition: "fill .38s ease" }}>
          AI
        </text>
        <text x="160" y="99" textAnchor="middle" fontSize="7"
          fontFamily="Inter, sans-serif"
          fill={phase >= 1 ? "rgba(255,255,255,0.52)" : "rgba(255,255,255,0.20)"}
          style={{ transition: "fill .38s ease" }}>
          {phase === 1 ? "processing" : phase === 2 ? "complete" : "idle"}
        </text>

        {/* Particles left → center — phase 1 */}
        {phase === 1 && [0, 1, 2].map((i) => (
          <circle key={i} r="3" fill="rgba(255,255,255,0.88)">
            <animateMotion dur="0.85s" begin={`${i * 0.28}s`} repeatCount="indefinite"
              path="M 78 90 L 132 90" />
            <animate attributeName="opacity" values="0;1;1;0" dur="0.85s" begin={`${i * 0.28}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* ── OUTPUT ITEMS (right, x~280) ── */}
        {outputItems.map((item, i) => (
          <g key={i} style={{
            opacity: phase === 2 ? 1 : 0,
            transition: `opacity .35s ease ${i * 0.10 + 0.12}s`,
          }}>
            <rect x="244" y={item.y} width="68" height="26" rx="6"
              fill={G + "12"}
              stroke={G + "50"}
              strokeWidth="1"
            />
            {/* Checkmark */}
            <circle cx="257" cy={item.y + 13} r="7"
              fill={G + "25"}
              stroke={G}
              strokeWidth="1"
            />
            <path d={`M ${253} ${item.y + 13} L ${256} ${item.y + 16} L ${261} ${item.y + 10}`}
              fill="none" stroke={GL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Label */}
            <text x="268" y={item.y + 10} fontSize="7" fontWeight="600"
              fontFamily="Inter, sans-serif" fill="rgba(255,255,255,0.75)">
              {item.label}
            </text>
          </g>
        ))}

        {/* "3.5h saved/day" label — phase 2 */}
        <g style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .4s ease .3s" }}>
          <rect x="214" y="136" width="100" height="20" rx="10"
            fill={G + "18"}
            stroke={G + "50"}
            strokeWidth="1"
          />
          <text x="264" y="149" textAnchor="middle" fontSize="8.5" fontWeight="700"
            fontFamily="Inter, sans-serif" fill={GL}>
            3.5h saved/day
          </text>
        </g>
      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Ready", "Processing", "Done"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Process Automation ─────────────────────── */
/* n8n dark canvas: Idle → Wiring Up → Running (6-node branching workflow) */
export function AutomationAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1400, 1000, 1700);

  const built   = phase >= 1;
  const running = phase === 2;

  const NW = 108; // node width
  const NH = 44;  // node height

  // 6-node branching layout:
  //   [Webhook] → [IF/Else] → [AI Enrich] → [HubSpot]
  //                        ↘  [Slack]     → [Dashboard]
  const nodes = [
    { id: "webhook",   x: 4,   y: 88,  label: "Webhook",      sub: "Trigger",    color: "#E8504A", icon: "bolt"    },
    { id: "ifelse",    x: 134, y: 88,  label: "IF Condition",  sub: "Logic",      color: B,         icon: "fork"    },
    { id: "enrich",    x: 264, y: 26,  label: "AI Enrich",     sub: "Process",    color: "#A78BFA", icon: "sparkle" },
    { id: "hubspot",   x: 392, y: 16,  label: "HubSpot",       sub: "Update CRM", color: "#FF7A59", icon: "crm"     },
    { id: "slack",     x: 264, y: 150, label: "Slack",         sub: "Notify",     color: "#7B5EA7", icon: "bell"    },
    { id: "dashboard", x: 392, y: 150, label: "Dashboard",     sub: "Log Result", color: G,         icon: "chart"   },
  ];

  const cy = (n: typeof nodes[0]) => n.y + NH / 2;
  const rx = (n: typeof nodes[0]) => n.x + NW;

  const [wh, ife, en, hs, sl, db] = nodes;

  const conns = [
    { id: "w-if",  d: `M ${rx(wh)}  ${cy(wh)}  C ${rx(wh)  + 11} ${cy(wh)}  ${ife.x - 11} ${cy(ife)} ${ife.x} ${cy(ife)}`, len: 25,  delay: 0    },
    { id: "if-en", d: `M ${rx(ife)} ${cy(ife)} C ${rx(ife) + 14} ${cy(ife)} ${en.x  - 14} ${cy(en)}  ${en.x}  ${cy(en)}`,  len: 100, delay: 0.10 },
    { id: "if-sl", d: `M ${rx(ife)} ${cy(ife)} C ${rx(ife) + 14} ${cy(ife)} ${sl.x  - 14} ${cy(sl)}  ${sl.x}  ${cy(sl)}`,  len: 100, delay: 0.16 },
    { id: "en-hs", d: `M ${rx(en)}  ${cy(en)}  C ${rx(en)  + 10} ${cy(en)}  ${hs.x  - 10} ${cy(hs)}  ${hs.x}  ${cy(hs)}`,  len: 25,  delay: 0.23 },
    { id: "sl-db", d: `M ${rx(sl)}  ${cy(sl)}  C ${rx(sl)  + 10} ${cy(sl)}  ${db.x  - 10} ${cy(db)}  ${db.x}  ${cy(db)}`,  len: 25,  delay: 0.29 },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 560 }}>
      {/* Dark n8n canvas — site primary blue with muted-blue dot grid */}
      <div style={{
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(80,120,255,0.20)",
        background: "var(--why-bg)",
        backgroundImage: "radial-gradient(circle, rgba(80,120,255,0.16) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
        padding: "14px 8px 16px",
      }}>
        <svg viewBox="0 0 510 218" style={{ width: "100%", display: "block" }}>

          {/* ── Bezier connections ── */}
          {conns.map((c) => (
            <g key={c.id}>
              {/* Track */}
              <path d={c.d} fill="none"
                stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeLinecap="round" />
              {/* Animated draw */}
              <path d={c.d} fill="none"
                stroke={running ? G : B}
                strokeWidth="2" strokeLinecap="round"
                strokeDasharray={c.len}
                strokeDashoffset={built ? 0 : c.len}
                style={{ transition: `stroke-dashoffset .42s ease ${c.delay}s, stroke .3s ease` }}
              />
            </g>
          ))}

          {/* ── Flowing data dots — phase 2 ── */}
          {running && conns.map((c, i) => (
            <circle key={c.id + "d"} r="3.5" fill={GL} opacity="0.9">
              <animateMotion
                dur={`${0.75 + i * 0.08}s`}
                begin={`${i * 0.22}s`}
                repeatCount="indefinite"
                path={c.d}
              />
              <animate attributeName="opacity"
                values="0;1;1;0" keyTimes="0;0.08;0.88;1"
                dur={`${0.75 + i * 0.08}s`}
                begin={`${i * 0.22}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* ── Nodes ── */}
          {nodes.map((n, i) => {
            const icx = n.x + 16;
            const icy = n.y + NH / 2;
            const rhx = n.x + NW;
            const hcy = n.y + NH / 2;

            return (
              <g key={n.id}>

                {/* Dark-glass card */}
                <rect x={n.x} y={n.y} width={NW} height={NH} rx="9"
                  fill={built ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)"}
                  stroke={built ? n.color + "55" : "rgba(255,255,255,0.08)"}
                  strokeWidth="1.5"
                  style={{ transition: `fill .35s ease ${i * 0.07}s, stroke .35s ease ${i * 0.07}s` }}
                />

                {/* Icon strip — rounded-left, square-right */}
                <rect x={n.x} y={n.y} width={32} height={NH} rx="9"
                  fill={built ? n.color + "22" : "rgba(255,255,255,0.04)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                />
                <rect x={n.x + 22} y={n.y} width={10} height={NH}
                  fill={built ? n.color + "22" : "rgba(255,255,255,0.04)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                />
                <line x1={n.x + 32} y1={n.y + 7} x2={n.x + 32} y2={n.y + NH - 7}
                  stroke={built ? n.color + "35" : "rgba(255,255,255,0.07)"}
                  strokeWidth="1"
                  style={{ transition: `stroke .35s ease ${i * 0.07}s` }}
                />

                {/* ── Icons ── */}
                {n.icon === "bolt" && (
                  <path
                    d={`M ${icx+3} ${icy-8} L ${icx-3} ${icy+1} L ${icx+1} ${icy+1} L ${icx-2} ${icy+8} L ${icx+5} ${icy-1} L ${icx} ${icy-1} Z`}
                    fill={built ? n.color : "rgba(255,255,255,0.18)"}
                    style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                  />
                )}
                {n.icon === "fork" && (
                  <g stroke={built ? n.color : "rgba(255,255,255,0.18)"} strokeWidth="1.8"
                    fill="none" strokeLinecap="round"
                    style={{ transition: `stroke .35s ease ${i * 0.07}s` }}>
                    <line x1={icx - 5} y1={icy} x2={icx} y2={icy} />
                    <line x1={icx} y1={icy} x2={icx + 5} y2={icy - 5} />
                    <line x1={icx} y1={icy} x2={icx + 5} y2={icy + 5} />
                  </g>
                )}
                {n.icon === "sparkle" && (
                  <g stroke={built ? n.color : "rgba(255,255,255,0.18)"} strokeWidth="1.6"
                    fill="none" strokeLinecap="round"
                    style={{ transition: `stroke .35s ease ${i * 0.07}s` }}>
                    <line x1={icx} y1={icy - 8} x2={icx} y2={icy + 8} />
                    <line x1={icx - 8} y1={icy} x2={icx + 8} y2={icy} />
                    <line x1={icx - 5.5} y1={icy - 5.5} x2={icx + 5.5} y2={icy + 5.5} />
                    <line x1={icx + 5.5} y1={icy - 5.5} x2={icx - 5.5} y2={icy + 5.5} />
                  </g>
                )}
                {n.icon === "crm" && (
                  <>
                    <circle cx={icx} cy={icy} r="7.5"
                      fill={built ? n.color + "25" : "rgba(255,255,255,0.05)"}
                      style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                    />
                    <text x={icx} y={icy + 3.5} textAnchor="middle"
                      fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif"
                      fill={built ? n.color : "rgba(255,255,255,0.18)"}
                      style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                      H
                    </text>
                  </>
                )}
                {n.icon === "bell" && (
                  <g fill={built ? n.color : "rgba(255,255,255,0.18)"}
                    style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                    <path d={`M ${icx} ${icy-8} C ${icx-6} ${icy-8} ${icx-6} ${icy+2} ${icx-6} ${icy+2} L ${icx+6} ${icy+2} C ${icx+6} ${icy+2} ${icx+6} ${icy-8} ${icx} ${icy-8} Z`} />
                    <rect x={icx - 2} y={icy + 2} width={4} height={2.5} rx="1" />
                    <rect x={icx - 1.2} y={icy + 4.5} width={2.4} height={2} rx="1" />
                  </g>
                )}
                {n.icon === "chart" && (
                  <g fill={built ? n.color : "rgba(255,255,255,0.18)"}
                    style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                    <rect x={icx - 7} y={icy + 1} width={4} height={6} rx="1" />
                    <rect x={icx - 1.5} y={icy - 3} width={4} height={10} rx="1" />
                    <rect x={icx + 4} y={icy - 7} width={4} height={14} rx="1" />
                  </g>
                )}

                {/* Node name */}
                <text x={n.x + 38} y={n.y + 17} fontSize="8" fontWeight="600"
                  fontFamily="Inter, sans-serif"
                  fill={built ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.22)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                  {n.label}
                </text>
                {/* Sub label */}
                <text x={n.x + 38} y={n.y + 30} fontSize="7" fontWeight="500"
                  fontFamily="Inter, sans-serif"
                  fill={built ? n.color : "rgba(255,255,255,0.18)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                  {n.sub}
                </text>

                {/* Connection handles */}
                <circle cx={n.x} cy={hcy} r="3.5"
                  stroke={built ? n.color : "rgba(255,255,255,0.16)"} strokeWidth="1.5"
                  style={{ fill: "var(--why-bg)", transition: `stroke .35s ease ${i * 0.07}s` }}
                />
                <circle cx={rhx} cy={hcy} r="3.5"
                  stroke={built ? n.color : "rgba(255,255,255,0.16)"} strokeWidth="1.5"
                  style={{ fill: "var(--why-bg)", transition: `stroke .35s ease ${i * 0.07}s` }}
                />

                {/* Execution badge — running */}
                <g style={{ opacity: running ? 1 : 0, transition: `opacity .3s ease ${i * 0.08}s` }}>
                  <rect x={rhx - 10} y={n.y - 14} width="20" height="13" rx="6.5" fill={G} />
                  <text x={rhx} y={n.y - 5} textAnchor="middle" fontSize="8" fontWeight="700"
                    fontFamily="Inter, sans-serif" fill="white">✓</text>
                </g>

              </g>
            );
          })}

          {/* ── "Saving 6h / week" badge — phase 2 ── */}
          <g style={{ opacity: running ? 1 : 0, transition: "opacity .45s ease .35s" }}>
            <rect x="155" y="200" width="200" height="18" rx="9"
              fill={G + "20"} stroke={G + "50"} strokeWidth="1" />
            <text x="255" y="212" textAnchor="middle" fontSize="8.5" fontWeight="700"
              fontFamily="Inter, sans-serif" fill={GL}>
              Saving 6h / week · 0 errors
            </text>
          </g>

        </svg>
      </div>

      <div style={{ marginTop: 8 }}>
        <PhaseBar phase={phase} labels={["Idle", "Wiring Up", "Running"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Meta & Google Ads ──────────────────────── */
/* Conversion funnel: Empty → Filling → Converting                          */
export function AdsAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1400, 1600, 1800);

  const filled     = phase >= 1;
  const converting = phase === 2;

  // Funnel geometry
  const cx     = 118;  // horizontal centre
  const startY = 14;
  const tierH  = 35;

  // Each tier: top width, colour. Bottom width = next tier's top width.
  const tiers = [
    { label: "Traffic",   count: "10k",  w: 196, color: "oklch(0.54 0.24 263)" },
    { label: "Clicks",    count: "2.1k", w: 152, color: "oklch(0.52 0.22 247)" },
    { label: "Leads",     count: "340",  w: 108, color: "oklch(0.54 0.20 225)" },
    { label: "Qualified", count: "89",   w:  72, color: "oklch(0.55 0.20 198)" },
    { label: "Customers", count: "23",   w:  48, color: "oklch(0.57 0.20 152)" },
  ];

  const funnelBottom = startY + tiers.length * tierH; // 14 + 175 = 189
  const countX = 240; // fixed right column for all count labels

  return (
    <div style={{ width: "100%", maxWidth: 252 }}>
      <svg viewBox="0 0 252 234" style={{ width: "100%", display: "block" }}>

        {/* ── Trapezoid tiers (connected, no gap) ── */}
        {tiers.map((tier, i) => {
          const topW = tier.w;
          const botW = i < tiers.length - 1 ? tiers[i + 1].w : tier.w;
          const y    = startY + i * tierH;
          const midy = y + tierH / 2;

          // Trapezoid corners
          const tlx = cx - topW / 2;
          const trx = cx + topW / 2;
          const blx = cx - botW / 2;
          const brx = cx + botW / 2;

          const points  = `${tlx},${y} ${trx},${y} ${brx},${y + tierH} ${blx},${y + tierH}`;
          const delay   = i * 0.11;
          const lblSize = topW < 58 ? 7 : topW < 85 ? 8 : 9;

          return (
            <g key={tier.label}>

              {/* Filled trapezoid */}
              <polygon points={points}
                fill={filled ? tier.color : "rgba(255,255,255,0.04)"}
                style={{ transition: `fill .4s ease ${delay}s` }}
              />

              {/* Tier divider (separates adjacent tiers cleanly) */}
              {i > 0 && (
                <line x1={tlx} y1={y} x2={trx} y2={y}
                  stroke="rgba(0,0,0,0.18)" strokeWidth="0.75"
                />
              )}

              {/* Label — centred in trapezoid, single element */}
              <text x={cx} y={midy + 3.5} textAnchor="middle"
                fontSize={lblSize} fontWeight="600" fontFamily="Inter, sans-serif"
                fill={filled ? "rgba(255,255,255,0.93)" : "rgba(255,255,255,0.14)"}
                style={{ transition: `fill .4s ease ${delay}s` }}>
                {tier.label}
              </text>

              {/* Faint tick from tier right-edge to count column */}
              <line
                x1={trx + 2} y1={midy}
                x2={countX - 26} y2={midy}
                stroke={filled ? tier.color + "40" : "rgba(255,255,255,0.05)"}
                strokeWidth="0.75"
                strokeDasharray="2 3"
                style={{ transition: `stroke .4s ease ${delay}s` }}
              />

              {/* Count — fixed right column */}
              <text x={countX} y={midy + 3.5} textAnchor="end"
                fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif"
                fill={filled ? tier.color : "rgba(255,255,255,0.12)"}
                style={{ transition: `fill .4s ease ${delay}s` }}>
                {tier.count}
              </text>

            </g>
          );
        })}

        {/* Outer funnel border — always visible, faint */}
        <path
          d={`M ${cx - tiers[0].w / 2} ${startY} L ${cx + tiers[0].w / 2} ${startY} L ${cx + tiers[tiers.length - 1].w / 2} ${funnelBottom} L ${cx - tiers[tiers.length - 1].w / 2} ${funnelBottom} Z`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* ── Connector from funnel bottom to ROAS badge ── */}
        <line
          x1={cx} y1={funnelBottom}
          x2={cx} y2={funnelBottom + 14}
          stroke={converting ? G : "rgba(255,255,255,0.06)"}
          strokeWidth="1.5"
          strokeDasharray="3 2"
          style={{ transition: "stroke .35s ease .1s" }}
        />

        {/* ── ROAS badge — anchored below funnel ── */}
        <g style={{ opacity: converting ? 1 : 0, transition: "opacity .4s ease .2s" }}>
          <rect
            x={cx - 58} y={funnelBottom + 14}
            width="116" height="28"
            rx="14"
            fill={G + "1C"} stroke={G + "55"} strokeWidth="1"
          />
          {/* Green pulse dot */}
          <circle cx={cx - 34} cy={funnelBottom + 28} r="4" fill={G} />
          {/* Label */}
          <text
            x={cx + 12} y={funnelBottom + 32}
            textAnchor="middle"
            fontSize="10.5" fontWeight="700"
            fontFamily="Inter, sans-serif"
            fill={GL}>
            ROAS 4.2×
          </text>
        </g>

      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Empty funnel", "Filling", "Converting"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── GTM Engineering ────────────────────────── */
/* Hub-and-spoke: Workflow center + 6 tool nodes                           */
export function GTMAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1800, 2200, 3000);

  const centerX = 150, centerY = 100, NR = 19;

  // bg  = node circle fill (dark so coloured icons pop)
  // border = accent/stroke colour, also used for outbound data dots
  const outerNodes = [
    { label: "Clay",      cx: 150, cy: 22,  bg: "#0C1826", border: "#0BBCDB" },
    { label: "Apollo",    cx: 258, cy: 61,  bg: "#13192B", border: "#FFD93D" },
    { label: "Instantly", cx: 258, cy: 139, bg: "#2563EB", border: "#93C0FF" },
    { label: "Lemlist",   cx: 150, cy: 178, bg: "#3B5BFF", border: "#8FA8FF" },
    { label: "HubSpot",   cx: 42,  cy: 139, bg: "#FF7A59", border: "#FFD4C8" },
    { label: "n8n",       cx: 42,  cy: 61,  bg: "#EA4B25", border: "#FFB09A" },
  ];

  const spokeLen = (n: typeof outerNodes[0]) =>
    Math.sqrt((n.cx - centerX) ** 2 + (n.cy - centerY) ** 2);

  // Label positions — placed radially, respecting available space
  const labelY = (n: typeof outerNodes[0]) => {
    if (n.cy < centerY) return n.cy - NR - 10;
    if (n.cx === centerX) return n.cy + NR + 13;
    return n.cy - NR - 10;
  };
  const clayLabelY = outerNodes[0].cy + NR + 11;

  return (
    <div style={{ width: "100%", maxWidth: 300, overflow: "visible" }}>
      <svg viewBox="0 -14 300 222" style={{ width: "100%", display: "block", overflow: "visible" }}>

        {/* ── Spokes ── */}
        {outerNodes.map((n, i) => {
          const len = spokeLen(n);
          return (
            <line key={i}
              x1={centerX} y1={centerY} x2={n.cx} y2={n.cy}
              stroke={phase === 2 ? G : B}
              strokeWidth="1.3"
              strokeDasharray={len} strokeDashoffset={phase >= 1 ? 0 : len}
              strokeOpacity={phase >= 1 ? 0.42 : 0}
              style={{ transition: `stroke-dashoffset .55s ease ${i * 0.1}s, stroke-opacity .5s ease ${i * 0.1}s, stroke .4s ease` }}
            />
          );
        })}

        {/* ── Data dots — phase 2, bidirectional ── */}
        {phase === 2 && outerNodes.map((n, i) => (
          <g key={i}>
            <circle r="2.5" fill={n.border}>
              <animateMotion dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite"
                path={`M ${centerX} ${centerY} L ${n.cx} ${n.cy}`} />
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <circle r="2.5" fill="rgba(255,255,255,0.80)">
              <animateMotion dur="2s" begin={`${i * 0.5 + 1}s`} repeatCount="indefinite"
                path={`M ${n.cx} ${n.cy} L ${centerX} ${centerY}`} />
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${i * 0.5 + 1}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* ── Outer nodes ── */}
        {outerNodes.map((n, i) => {
          const isClay = i === 0;
          const ly = isClay ? clayLabelY : labelY(n);
          return (
            <g key={n.label}>
              {/* Node circle — dark bg so icons pop */}
              <circle cx={n.cx} cy={n.cy} r={NR}
                fill={phase >= 1 ? n.bg : "rgba(255,255,255,0.04)"}
                stroke={phase >= 1 ? n.border + "70" : "rgba(255,255,255,0.12)"}
                strokeWidth="1.5"
                style={{ transition: `fill .45s ease ${i * 0.1}s, stroke .45s ease ${i * 0.1}s` }}
              />

              {/* ── Brand icons (fade in with phase) ── */}
              <g style={{ opacity: phase >= 1 ? 1 : 0.12, transition: `opacity .45s ease ${i * 0.1}s` }}>

                {/* Clay — nested arches: sky-blue, salmon, yellow */}
                {n.label === "Clay" && (
                  <g transform={`translate(${n.cx},${n.cy + 2})`}>
                    <path d="M -8,4 A 8,8 0 0 1 8,4"   fill="none" stroke="#28BFDE" strokeWidth="3.5" strokeLinecap="round"/>
                    <path d="M -5,4 A 5,5 0 0 1 5,4"     fill="none" stroke="#FF8585" strokeWidth="3.0" strokeLinecap="round"/>
                    <path d="M -2.2,4 A 2.2,2.2 0 0 1 2.2,4" fill="none" stroke="#FFD93D" strokeWidth="2.8" strokeLinecap="round"/>
                  </g>
                )}

                {/* Apollo — yellow 8-pointed asterisk */}
                {n.label === "Apollo" && (
                  <g transform={`translate(${n.cx},${n.cy})`}>
                    {[0,1,2,3,4,5,6,7].map(k => (
                      <path key={k}
                        transform={`rotate(${k * 45})`}
                        d="M 0,-7.5 L 1.4,-2.5 L -1.4,-2.5 Z"
                        fill="#FFD93D"
                      />
                    ))}
                  </g>
                )}

                {/* Instantly — white lightning bolt on blue node */}
                {n.label === "Instantly" && (
                  <path
                    transform={`translate(${n.cx},${n.cy})`}
                    d="M 1.5,-7 L -2.5,0.5 L 0.5,0.5 L -1.5,7 L 3.5,-0.5 L 0.5,-0.5 Z"
                    fill="rgba(255,255,255,0.95)"
                  />
                )}

                {/* Lemlist — white LE monogram: bold L curve + two horizontal bars */}
                {n.label === "Lemlist" && (
                  <g transform={`translate(${n.cx},${n.cy - 0.5})`}>
                    {/* L: thick rounded path — vertical bar curving into bottom tail */}
                    <path d="M -6.5,-7.5 L -6.5,4.5 Q -6.5,7.5 -3.5,7.5 L 2,7.5"
                      fill="none" stroke="white" strokeWidth="4.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                    {/* E: upper bar */}
                    <rect x="-3.5" y="-7.5" width="9.5" height="3.8" rx="1.9" fill="white"/>
                    {/* E: middle bar (slightly shorter) */}
                    <rect x="-3.5" y="-0.8" width="8" height="3.8" rx="1.9" fill="white"/>
                  </g>
                )}

                {/* HubSpot — white sprocket: center circle + 3 arms + endpoint dots */}
                {n.label === "HubSpot" && (
                  <g transform={`translate(${n.cx},${n.cy})`}>
                    <circle r="3" fill="white"/>
                    <line x1="0" y1="-3" x2="0" y2="-6.5"     stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="0"    cy="-9"  r="2.2" fill="white"/>
                    <line x1="2.6" y1="1.5" x2="5.6" y2="3.2"  stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="7.3"  cy="4.2" r="2.2" fill="white"/>
                    <line x1="-2.6" y1="1.5" x2="-5.6" y2="3.2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="-7.3" cy="4.2" r="2.2" fill="white"/>
                  </g>
                )}

                {/* n8n — white node-graph icon: ●—● branching to two ● */}
                {n.label === "n8n" && (
                  <g transform={`translate(${n.cx},${n.cy})`}>
                    <circle cx="-7"   cy="0"    r="2.5" fill="none" stroke="white" strokeWidth="1.5"/>
                    <circle cx="-1.5" cy="0"    r="2.5" fill="none" stroke="white" strokeWidth="1.5"/>
                    <line x1="-4.5" y1="0" x2="-4" y2="0" stroke="white" strokeWidth="1.5"/>
                    <path d="M 1,0 C 3.5,0 3.5,-4.5 5,-4.5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M 1,0 C 3.5,0 3.5,4.5 5,4.5"  fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="7.2" cy="-4.5" r="2.2" fill="none" stroke="white" strokeWidth="1.5"/>
                    <circle cx="7.2" cy="4.5"  r="2.2" fill="none" stroke="white" strokeWidth="1.5"/>
                  </g>
                )}
              </g>

              {/* Tool name label */}
              <text x={n.cx} y={ly} textAnchor="middle"
                fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="600"
                letterSpacing="0.01em"
                fill={phase >= 1 ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.16)"}
                style={{ transition: `fill .45s ease ${i * 0.1}s` }}>
                {n.label}
              </text>
            </g>
          );
        })}

        {/* ── Center hub ── */}
        <circle cx={centerX} cy={centerY} r="28"
          fill={phase >= 1 ? B + "22" : "rgba(255,255,255,0.04)"}
          stroke={phase >= 1 ? B : "rgba(255,255,255,0.12)"}
          strokeWidth="1.5"
          style={{ transition: "all .5s ease" }}
        />
        {phase === 1 && (
          <circle cx={centerX} cy={centerY} r="28" fill="none"
            stroke={B} strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="28;42;28" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.38;0;0.38" dur="1.8s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Center text — perfectly centred in hub (r=28, two lines) */}
        <text x={centerX} y={centerY - 4} textAnchor="middle"
          fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif"
          fill={phase >= 1 ? BL : "rgba(255,255,255,0.28)"}
          style={{ transition: "fill .5s ease" }}>
          Workflow
        </text>
        <text x={centerX} y={centerY + 9} textAnchor="middle"
          fontSize="7" fontFamily="Inter, sans-serif" fontWeight="500"
          fill={phase === 2 ? GL : phase >= 1 ? BL + "88" : "rgba(255,255,255,0.18)"}
          style={{ transition: "fill .5s ease" }}>
          {phase === 2 ? "running" : phase === 1 ? "wiring" : "idle"}
        </text>

      </svg>

      {/* ── "23 meetings/mo" output badge — HTML, below SVG, above PhaseBar ── */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        opacity: phase === 2 ? 1 : 0,
        transition: "opacity .5s ease .4s",
        pointerEvents: "none",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          padding: "4px 13px",
          borderRadius: 99,
          background: "oklch(0.62 0.20 150 / 0.14)",
          border: "1px solid oklch(0.62 0.20 150 / 0.40)",
          fontSize: 8.5,
          fontWeight: 700,
          fontFamily: "Inter, sans-serif",
          color: GL,
          letterSpacing: "0.01em",
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: G, flexShrink: 0 }} />
          23 meetings/mo
        </div>
      </div>

      <div style={{ marginTop: 8 }}>
        <PhaseBar phase={phase} labels={["Idle", "Wiring", "Running"]} />
      </div>
    </div>
  );
}
