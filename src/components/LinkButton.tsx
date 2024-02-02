interface Props {
  className?: string;
  href?: string;
  newTab?: boolean;
  children?: React.ReactNode;
}

const LinkButton: React.FC<Props> = ({
  className,
  href,
  newTab,
  children,
}: Props) => {
  return (
    <a
      href={href}
      className={`flex font-inter font-semibold w-fit gap-2 py-6 px-5 bg-white items-center text-base hover:bg-white/75 ${
        className || ""
      }`}
      {...(newTab ? { target: "_blank" } : {})}
    >
      {children}
    </a>
  );
};

export default LinkButton;
