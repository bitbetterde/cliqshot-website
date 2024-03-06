import EyeIcon from "../assets/icons/eye.svg?react";
import LightIcon from "../assets/icons/light.svg?react";
import SatelliteIcon from "../assets/icons/satellite.svg?react";
import SmartphoneIcon from "../assets/icons/smartphone.svg?react";

const iconClasses = "w-20 h-20";

const IconMapping: Record<string, React.ReactNode> = {
  eye: <EyeIcon className={iconClasses} />,
  light: <LightIcon className={iconClasses} />,
  satellite: <SatelliteIcon className={iconClasses} />,
  smartphone: <SmartphoneIcon className={iconClasses} />,
};

interface Props {
  className?: string;
  title?: string;
  icon?: string;
  children?: React.ReactNode;
}

const FeatureItem: React.FC<Props> = ({
  className,
  title,
  children,
  icon,
}: Props) => {
  return (
    <div className={`p-4 md:p-12 flex flex-col items-center gap-8 ${className || ""}`}>
      {icon && IconMapping[icon]}
      {title && <h3 className="text-2xl font-bold text-center">{title}</h3>}
      {children && <p className="text-center">{children}</p>}
    </div>
  );
};

export default FeatureItem;
