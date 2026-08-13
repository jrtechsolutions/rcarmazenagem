const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

type IconProps = {
  className?: string;
};

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconRack({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="4" y="4" width="16" height="16" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
}

export function IconNested({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="5" y="5" width="14" height="14" />
      <rect x="9" y="9" width="6" height="6" />
    </svg>
  );
}

export function IconWarehouse({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M4 20V9l8-5 8 5v11H4z" />
      <line x1="4" y1="14" x2="20" y2="14" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M5 13l4 4 10-10" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3A2 2 0 0 1 18.5 20 15.5 15.5 0 0 1 4 5.5a2 2 0 0 1 2.5-2z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="4" y="4" width="16" height="16" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v3H8v4h2v7h4v-7h3l1-4h-4V8c0-.6.4-1 1-1z" />
    </svg>
  );
}

const MAP = {
  rack: IconRack,
  nested: IconNested,
  warehouse: IconWarehouse,
  check: IconCheck,
} as const;

export function SegmentIcon({
  name,
  className,
}: {
  name: keyof typeof MAP;
  className?: string;
}) {
  const Cmp = MAP[name];
  return <Cmp className={className} />;
}
