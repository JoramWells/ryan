import styled from 'styled-components';

const index = () => {
  return (
    <>
      <div>
        <TopBar className="border-b-2">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '19%',
            }}
          >
            <div>+966 562 519 626</div>
            <div>|</div>
            <div>+966 562 519 626</div>
          </div>
        </TopBar>
        <Navbar className="shadow-md">
          <LeftNav>
            <Logo className="font-bold">Logo</Logo>
          </LeftNav>
          <RightNav>login</RightNav>
        </Navbar>
      </div>
    </>
  );
};

export default index;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px;
  font-size: 14px;
`;

const Navbar = styled.nav`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;
const Logo = styled.div``;
const LeftNav = styled.div``;
const RightNav = styled.div`
  text-transform: uppercase;
`;
