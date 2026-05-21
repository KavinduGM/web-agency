import { Landmark } from "lucide-react";

/**
 * Accepted-payments strip for the footer.
 * Custom-drawn brand marks (no licensed logos) so the badges stay GDPR/IP-safe
 * and still read instantly to most users.
 */

const METHODS = [
  { key: "visa", label: "Visa", Icon: VisaMark, accent: "text-[#1A1F71]" },
  { key: "mastercard", label: "Mastercard", Icon: MastercardMark, accent: "text-slate-900" },
  { key: "btc", label: "Bitcoin", Icon: BitcoinMark, accent: "text-[#F7931A]" },
  { key: "usdt", label: "USDT", Icon: TetherMark, accent: "text-[#26A17B]" },
  { key: "bybit", label: "Bybit", Icon: BybitMark, accent: "text-[#F7A600]" },
  { key: "binance", label: "Binance", Icon: BinanceMark, accent: "text-[#F0B90B]" },
  { key: "bank", label: "Bank Transfer", Icon: BankMark, accent: "text-slate-700" },
];

export default function PaymentMethods() {
  return (
    <section
      aria-label="Accepted payment methods"
      className="mt-12 pt-8 border-t border-slate-200"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-[11px] font-display font-extrabold uppercase tracking-[0.18em] text-brand-700">
            We Accept
          </div>
          <div className="mt-1 text-xs text-slate-500">
            Secure global payments — cards, bank transfer, and crypto.
          </div>
        </div>

        <ul className="flex flex-wrap items-center gap-2 md:gap-2.5">
          {METHODS.map(({ key, label, Icon, accent }) => (
            <li key={key}>
              <span
                className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-display font-bold text-slate-800 hover:border-brand-300 hover:shadow-card transition-all"
                title={label}
              >
                <Icon className={`${accent}`} />
                <span>{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ──────────────── Brand marks (compact inline SVGs, ~20×20) ──────────────── */

function VisaMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 36 12"
      className={`h-3 w-9 ${className}`}
      aria-hidden="true"
      fill="currentColor"
    >
      <text
        x="0"
        y="10"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="900"
        fontSize="11"
        fontStyle="italic"
        letterSpacing="0.5"
      >
        VISA
      </text>
    </svg>
  );
}

function MastercardMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={`h-4 w-6 ${className}`}
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="6" fill="#EB001B" />
      <circle cx="15" cy="8" r="6" fill="#F79E1B" />
      <path
        d="M12 3.5 a6 6 0 0 0 0 9 a6 6 0 0 0 0-9z"
        fill="#FF5F00"
      />
    </svg>
  );
}

function BitcoinMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="#F7931A" />
      <text
        x="10"
        y="14.5"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="900"
        fontSize="12"
        fill="#fff"
      >
        ₿
      </text>
    </svg>
  );
}

function TetherMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="#26A17B" />
      <text
        x="10"
        y="14.5"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="900"
        fontSize="12"
        fill="#fff"
      >
        ₮
      </text>
    </svg>
  );
}

function BybitMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <rect width="20" height="20" rx="4" fill="#0F172A" />
      <text
        x="10"
        y="13.5"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="900"
        fontSize="9"
        fill="#F7A600"
        letterSpacing="-0.3"
      >
        BY
      </text>
    </svg>
  );
}

function BinanceMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
      fill="currentColor"
    >
      {/* Iconic 4-diamond Binance mark, brand colour via className */}
      <path d="M10 2 6.5 5.5 10 9 13.5 5.5z" />
      <path d="M2 10 5.5 6.5 9 10 5.5 13.5z" />
      <path d="M18 10 14.5 6.5 11 10 14.5 13.5z" />
      <path d="M10 11 6.5 14.5 10 18 13.5 14.5z" />
      <rect x="8.5" y="8.5" width="3" height="3" />
    </svg>
  );
}

function BankMark({ className = "" }) {
  return <Landmark className={`w-4 h-4 ${className}`} aria-hidden="true" />;
}
