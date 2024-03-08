'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Tagline = styled.span`
  color: #5299d3;
  font-family: 'Source Sans Pro', sans-serif;
  /* &:hover {
    background-color: #443850;
  } */
`;

const StyledLink = styled(Link)`
  &:hover {
    color: #e05263;
  }
`;

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/guestbook': {
    name: 'Guestbook',
  },
};

export function NavBar() {
  return (
    <nav className="row">
      {/* Column 1 */}
      <div className="column">
        <div className="self-center">
          <img src="img/me.png" className="size-16 object-contain" />
        </div>
      </div>

      {/* Column 2 (Short Bio) */}
      <div className="column justify-center">
        <div className="row justify-center">
          <div className="tag-line">Alex Finley</div>
        </div>
        <div className="row justify-center">
          <div className="sub-tag-line"> Pixel Picasso</div>
        </div>
      </div>

      {/* Colum 3 (Hamburger Menu) */}
      <div className="column">
        <div className="self-end">
          <img
            src="img/hamburger_icon.svg"
            className="size-16 object-contain"
          />
        </div>
      </div>

      {/* <div className="flex flex-col items-center pb-2">
            <Tagline>Alex Finley</Tagline>
            <Tagline style={{ color: "#70A288", fontStyle: "italic" }}>
              Pixel Picasso
            </Tagline>
          </div> */}
      {/* {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <StyledLink key={path} href={path}>
                {name}
              </StyledLink>
            );
          })} */}
    </nav>
  );
}
