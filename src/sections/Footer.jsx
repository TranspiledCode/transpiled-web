import styled from '@emotion/styled';
import { useTheme } from '@transpiled/ui';
import ToggleSwitch from '../components/ToggleSwitch';

const FooterSection = styled.div`
  height: 400px;
  background-color: #5c6d88;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Footer = () => {
  const { toggleTheme } = useTheme();

  return (
    <FooterSection id='footer'>
      <div>
        <ToggleSwitch rotation='0' onToggle={toggleTheme} />
      </div>
    </FooterSection>
  );
};

export default Footer;
