import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate('/dash');

  const goHomeButton =
    pathname !== '/dash' ? (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    ) : null;

  const content = (
    <footer className="dash-footer">
      {goHomeButton}
      <p>Current User:</p>
      <p>Status:</p>
    </footer>
  );
  return content;
};
export default DashFooter;
