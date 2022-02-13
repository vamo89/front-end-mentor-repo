import Head from "next/head";
import styled from "styled-components";
import { QrComponent } from "../components/qr-component";

const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;

  min-width: 320px;
  min-height: 540px;

  background-color: hsl(212, 45%, 89%);
`;

const Home = () => (
  <StyledHome>
    <Head>
      <title>Frontend Mentor | QR code component</title>
    </Head>
    <QrComponent />
  </StyledHome>
);

export default Home;
