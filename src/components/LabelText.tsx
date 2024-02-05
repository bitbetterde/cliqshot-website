interface Props {
  children?: React.ReactNode;
}

const LabelText: React.FC<Props> = ({ children }) => (
  <span className="text-gray-500 text-sm">{children}</span>
);

export default LabelText;
