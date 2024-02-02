interface Props {
  className?: string;
  href?: string;
  newTab?: boolean;
  children?: React.ReactNode;
  orange?: boolean;
}

const LinkButton: React.FC<Props> = ({
  className,
  href,
  newTab,
  children,
  orange,
}: Props) => {
  return (
    <a
      href={href}
      className={`flex font-inter font-semibold w-fit gap-2 py-6 px-5 items-center text-base ${
        orange ? "bg-orange hover:bg-orange/75" : "bg-white hover:bg-white/75"
      } ${className || ""}`}
      {...(newTab ? { target: "_blank" } : {})}
    >
      {children}
    </a>
  );
};

export default LinkButton;
