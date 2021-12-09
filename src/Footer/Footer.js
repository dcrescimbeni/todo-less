import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer_() {
  return (
    <FooterBar>
      <AppTitle>todo-less</AppTitle>
      <SocialMediaWrapper>
        <SocialMediaIcon href="https://twitter.com/dinocres1" target="_blank">
          <FaTwitter />
        </SocialMediaIcon>
        <SocialMediaIcon
          href="https://github.com/dcrescimbeni/todo-less"
          target="_blank"
        >
          <FaGithub />
        </SocialMediaIcon>
        <SocialMediaIcon href="mailto:crescimbenidino@gmail.com">
          <FaEnvelope />
        </SocialMediaIcon>
      </SocialMediaWrapper>
    </FooterBar>
  );
}

const FooterBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  padding: 20px;
  font-size: 1.35rem;
  background-color: #ededed;
`;

const AppTitle = styled.p`
  margin: 0px;
  font-family: 'Lobster', cursive;
  color: #212529;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
`;

const SocialMediaIcon = styled.a`
  margin: 0px;
  padding: 0px 5px;
  color: #212529;
`;
