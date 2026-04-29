import { Zap, Brain, Database, Mail, MessageSquare, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CSSWithVars = React.CSSProperties & { [key: `--${string}`]: string };

// ── Layout constants ───────────────────────────────────────────────────────
const NW = 122; // node width
const NH = 68;  // node height

// Node centre positions (within the canvas div)
const CX1 = 62;   // col 1 centre-x  (trigger)
const CX2 = 232;  // col 2 centre-x  (ai, email)
const CX3 = 402;  // col 3 centre-x  (crm, slack)
const CY1 = 72;   // row 1 centre-y
const CY2 = 212;  // row 2 centre-y

// ── Data ──────────────────────────────────────────────────────────────────
interface NodeDef {
  id: string;
  label: string;
  sub: string;
  Icon: LucideIcon;
  color: string;
  cx: number;
  cy: number;
}

const NODES: NodeDef[] = [
  { id: "trigger", label: "New Lead",    sub: "Webhook received",  Icon: Zap,          color: "#fbbf24", cx: CX1, cy: CY1 },
  { id: "ai",      label: "AI Qualify",  sub: "Score & enrich",    Icon: Brain,        color: "#a78bfa", cx: CX2, cy: CY1 },
  { id: "crm",     label: "Update CRM",  sub: "HubSpot synced",    Icon: Database,     color: "#34d399", cx: CX3, cy: CY1 },
  { id: "email",   label: "Send Email",  sub: "Personalised copy", Icon: Mail,         color: "#60a5fa", cx: CX2, cy: CY2 },
  { id: "slack",   label: "Notify Team", sub: "Slack alert sent",  Icon: MessageSquare,color: "#fb923c", cx: CX3, cy: CY2 },
];

// Connection lines (pixel coords relative to canvas)
const H_LINES = [
  { x: CX1 + NW / 2, y: CY1, w: CX2 - NW / 2 - (CX1 + NW / 2) },   // trigger → ai
  { x: CX2 + NW / 2, y: CY1, w: CX3 - NW / 2 - (CX2 + NW / 2) },   // ai → crm
  { x: CX2 + NW / 2, y: CY2, w: CX3 - NW / 2 - (CX2 + NW / 2) },   // email → slack
];

const V_LINE = {
  x: CX2,
  y: CY1 + NH / 2,
  h: CY2 - NH / 2 - (CY1 + NH / 2),
};

// Travelling signal dots: each repeats on a 4 s cycle with a staggered delay
const DOTS = [
  { dir: "h" as const, x: CX1 + NW / 2, y: CY1,        dist: H_LINES[0].w, delay: 0   },
  { dir: "h" as const, x: CX2 + NW / 2, y: CY1,        dist: H_LINES[1].w, delay: 0.7 },
  { dir: "v" as const, x: CX2,           y: CY1 + NH / 2, dist: V_LINE.h,  delay: 0.7 },
  { dir: "h" as const, x: CX2 + NW / 2, y: CY2,        dist: H_LINES[2].w, delay: 1.4 },
];

// Arrow icons positioned at the receiving end of each connection
const H_ARROWS = [
  { x: CX2 - NW / 2 - 14, y: CY1 },
  { x: CX3 - NW / 2 - 14, y: CY1 },
  { x: CX3 - NW / 2 - 14, y: CY2 },
];
const V_ARROW = { x: CX2, y: CY2 - NH / 2 - 14 };

// ── Component ─────────────────────────────────────────────────────────────
export function WorkflowAnimation() {
  const canvasH = CY2 + NH / 2 + 24;

  return (
    <div
      aria-hidden="true"
      className="relative select-none overflow-hidden rounded-[18px]"
      style={{
        width: 464,
        background: "oklch(0.16 0.052 262)",
        border: "1px solid oklch(0.27 0.06 262)",
        boxShadow:
          "0 0 0 1px oklch(0.27 0.06 262), 0 32px 72px oklch(0.10 0.04 260 / 55%), 0 0 60px color-mix(in oklab, var(--blue) 14%, transparent)",
      }}
    >
      {/* ── Header bar ───────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: "1px solid oklch(0.23 0.055 262)" }}
      >
        <div className="flex items-center gap-2">
          {/* Live pulse dot */}
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
              style={{ animation: "workflow-node-ping 1.4s ease-out infinite" }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            WORKFLOW AUTOMATION
          </span>
        </div>
        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)" }}>
          847 leads processed
        </span>
      </div>

      {/* ── Canvas ───────────────────────────────────────────────────────── */}
      <div className="relative" style={{ height: canvasH }}>

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Connection lines ─────────────────────────────────────────── */}
        {H_LINES.map((l, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: l.x,
              top: l.y - 0.5,
              width: l.w,
              height: 1,
              background:
                "linear-gradient(to right, oklch(0.30 0.07 262), oklch(0.45 0.14 262), oklch(0.30 0.07 262))",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: V_LINE.x - 0.5,
            top: V_LINE.y,
            width: 1,
            height: V_LINE.h,
            background:
              "linear-gradient(to bottom, oklch(0.30 0.07 262), oklch(0.45 0.14 262), oklch(0.30 0.07 262))",
          }}
        />

        {/* ── Arrow indicators ─────────────────────────────────────────── */}
        {H_ARROWS.map((a, i) => (
          <ArrowRight
            key={i}
            width={12}
            height={12}
            style={{
              position: "absolute",
              left: a.x,
              top: a.y - 6,
              color: "oklch(0.42 0.12 262)",
            }}
          />
        ))}
        <ArrowDown
          width={12}
          height={12}
          style={{
            position: "absolute",
            left: V_ARROW.x - 6,
            top: V_ARROW.y,
            color: "oklch(0.42 0.12 262)",
          }}
        />

        {/* ── Travelling signal dots ───────────────────────────────────── */}
        {DOTS.map((d, i) => (
          <div
            key={i}
            style={
              {
                position: "absolute",
                left: d.x - 4,
                top: d.y - 4,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--blue-light)",
                boxShadow:
                  "0 0 10px var(--blue), 0 0 20px color-mix(in oklab, var(--blue) 50%, transparent)",
                animation: `workflow-travel-${d.dir} 4s ${d.delay}s infinite`,
                "--dist": `${d.dist}px`,
              } as CSSWithVars
            }
          />
        ))}

        {/* ── Nodes ────────────────────────────────────────────────────── */}
        {NODES.map((n) => (
          <div
            key={n.id}
            style={{
              position: "absolute",
              left: n.cx - NW / 2,
              top: n.cy - NH / 2,
              width: NW,
              height: NH,
              borderRadius: 12,
              background: "oklch(0.21 0.055 262)",
              border: "1px solid oklch(0.28 0.06 262)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 12px",
            }}
          >
            {/* Icon badge */}
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: `${n.color}22`,
                border: `1px solid ${n.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: n.color,
                flexShrink: 0,
              }}
            >
              <n.Icon width={15} height={15} />
            </div>

            {/* Text */}
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.3,
                  whiteSpace: "nowrap",
                }}
              >
                {n.label}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.38)",
                  marginTop: 2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {n.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{ borderTop: "1px solid oklch(0.23 0.055 262)" }}
      >
        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)" }}>
          4 steps · avg 1.2 s / lead
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            background: "oklch(0.22 0.09 145 / 35%)",
            color: "#4ade80",
            border: "1px solid oklch(0.32 0.12 145 / 45%)",
            borderRadius: 5,
            padding: "2px 8px",
            letterSpacing: "0.03em",
          }}
        >
          ✓ Running
        </span>
      </div>
    </div>
  );
}
