import styled from '@emotion/styled';
import { useTheme } from '@transpiled/ui';
import ToggleSwitch from '../components/ToggleSwitch';

const FooterSection = styled.div`
  height: 400px;
  background-color: ${({ theme }) => theme.altBackground};
  color: ${({ theme }) => theme.text};
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
