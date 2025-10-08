export function BookmarkIcon({
  className,
  fill = "none",
  stroke = "currentColor",
}: {
  className?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4.75A2.75 2.75 0 0 1 8.75 2h6.5A2.75 2.75 0 0 1 18 4.75V21l-6-3-6 3V4.75Z" />
    </svg>
  );
}
