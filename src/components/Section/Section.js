import PropTypes from 'prop-types';
import './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
