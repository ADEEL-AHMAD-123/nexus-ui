import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ContactButton.scss';

const ContactButton = () => (
  <Link to="/contact" className="contact-btn">
    Get in Touch <ArrowUpRight size={16} />
  </Link>
);

export default ContactButton;
