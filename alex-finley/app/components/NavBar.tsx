"use client";
import Link from "next/link";
import styled from "styled-components";

const Tagline = styled.span`
  color: #5299D3;
  font-family: "Source Sans Pro", sans-serif;
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
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Projects",
  },
  "/guestbook": {
    name: "Guestbook",
  },
};

export function NavBar() {
  return (
    <aside>
      <nav>
        <div className="h-screen flex flex-col justify-center items-center pb-40">
          <div className="w-9/12">
            <img src="img/me.png" className="object-contain" />
          </div>
          <div className="flex flex-col items-center pb-2">
            <Tagline>Alex Finley</Tagline>
            <Tagline style={{ color: "#70A288", fontStyle: "italic" }}>
              Pixel Picasso
            </Tagline>
          </div>

          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <StyledLink key={path} href={path}>
                {name}
              </StyledLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
