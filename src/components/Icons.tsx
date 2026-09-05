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

export function IconArrowLeft({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M16.004 4C9.377 4 4 9.373 4 16c0 2.24.617 4.34 1.688 6.137L4 28l6.02-1.65A11.93 11.93 0 0016.004 28C22.63 28 28 22.627 28 16S22.63 4 16.004 4zm0 21.867a9.83 9.83 0 01-5.02-1.377l-.36-.213-3.573.98.955-3.485-.235-.36A9.84 9.84 0 016.13 16c0-5.45 4.435-9.867 9.874-9.867 5.438 0 9.863 4.417 9.863 9.867s-4.425 9.867-9.863 9.867zm5.41-7.39c-.297-.15-1.755-.867-2.028-.966-.272-.098-.47-.148-.668.15-.198.296-.767.965-.94 1.163-.174.198-.347.222-.644.074-.297-.148-1.254-.462-2.388-1.472-.883-.788-1.48-1.762-1.653-2.06-.174-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.148-.668-1.61-.916-2.204-.241-.578-.487-.5-.668-.51-.173-.008-.371-.01-.57-.01a1.09 1.09 0 00-.792.372c-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.073.148.198 2.096 3.2 5.078 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.755-.717 2.003-1.41.248-.694.248-1.288.174-1.41-.074-.124-.272-.198-.57-.347z" />
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

export function IconBadgeCheck({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <circle cx="12" cy="11" r="7" />
      <path d="M9 11l2 2 4-4" />
      <path d="M8.5 17.5L7 21l5-1.5L17 21l-1.5-3.5" />
    </svg>
  );
}

export function IconMedicalCross({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IconFlame({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 21c3.5 0 6-2.4 6-6 0-3.2-2-5.2-3.5-6.8-.4 2.2-1.5 3.3-2.5 3.8C13 8 11.5 5.5 12 3c-3.5 2.5-6 5.8-6 10 0 4.2 2.7 8 6 8z" />
    </svg>
  );
}

export function IconClipboard({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="6" y="5" width="12" height="16" />
      <rect x="9" y="3" width="6" height="4" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  );
}

const MAP = {
  rack: IconRack,
  nested: IconNested,
  warehouse: IconWarehouse,
  check: IconCheck,
  clipboard: IconClipboard,
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
