import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../styles/components/PrimaryButton.scss';

const  PrimaryButton = ({ className = '' }) => (
  <Link to="/contact" className={`primary-btn ${className}`}>
    Get in Touch <ArrowUpRight size={16} />
  </Link>
);


export default PrimaryButton;
