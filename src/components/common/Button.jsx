import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ to = '/contact', label = 'Get in Touch' }) => {
  return (
    <Link to={to} className="contact-btn">
      {label} <ArrowUpRight size={16} />
    </Link>
  );
};

export default Button;
