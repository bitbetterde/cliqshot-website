interface Props {
  stroke?: number;
  className?: string;
}

export const StarDecoration: React.FC<Props> = ({ stroke = 2, className }) => {
  return (
    <svg
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M75 0V50"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M75 150V100"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M0 75H50"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M150 75H100"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
