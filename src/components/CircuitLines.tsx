type CircuitLinesProps = {
  className?: string;
};

/**
 * Trilhas de circuito abstratas — elemento gráfico tecnológico da marca.
 * Puramente decorativo (aria-hidden).
 */
export function CircuitLines({ className = "" }: CircuitLinesProps) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <path d="M0 120h120l40-40h110" />
        <path d="M0 200h80l60 60h140l50-50h90" />
        <path d="M0 420h150l60-60h120" />
        <path d="M600 80h-90l-50 50h-90" />
        <path d="M600 300h-70l-60-60h-80" />
        <path d="M600 470h-130l-40 40h-90" />
        <path d="M170 0v70l50 50v60" />
        <path d="M420 600v-90l-50-50v-70" />
        <path d="M520 600v-60l40-40v-80" />
      </g>

      <g fill="currentColor">
        {[
          [270, 80],
          [330, 210],
          [330, 360],
          [460, 130],
          [390, 240],
          [440, 510],
          [220, 180],
          [370, 390],
          [560, 330],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" opacity="0.7" />
        ))}
      </g>

      <path
        d="M0 320h180l40-40h80l40 40h160"
        stroke="#3b82f6"
        strokeWidth="1.6"
        strokeDasharray="6 10"
        className="animate-dash"
        opacity="0.8"
      />
    </svg>
  );
}
