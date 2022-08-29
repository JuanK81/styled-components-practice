import React from 'react';

import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Company Your Fans Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a
              choice, but so does yours adience. Create connections with your
              users as you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>Get Started For free</Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
};
