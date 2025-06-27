import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../styles/components/PrimaryButton.scss';

const PrimaryButton = ({
  to = "/contact",
  children = "Get in Touch",
  className = "",
  textColor,
  bgColor,
  hoverTextColor,
  hoverBgColor,
}) => {
  const style = {
    '--text-color': textColor,
    '--bg-color': bgColor,
    '--hover-text-color': hoverTextColor,
    '--hover-bg-color': hoverBgColor,
  };

  return (
    <Link to={to} className={`primary-btn ${className}`} style={style}>
      {children} <ArrowUpRight size={16} />
    </Link>
  );
};

export default PrimaryButton;
