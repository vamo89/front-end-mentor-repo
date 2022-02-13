import Image from "next/image";
import styled from "styled-components";

const QrComponentStyled = styled.div`
  width: 320px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
  padding: 16px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const QrCodeContainer = styled.div`
  width: 288px;
  height: 288px;
  background: center / contain no-repeat url("/image-qr-code.png");
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: hsl(218, 44%, 22%);
  text-align: center;
  font-family: "Outfit", sans-serif;
`;

const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: hsl(220, 15%, 55%);
  text-align: center;
  font-family: "Outfit", sans-serif;
  padding: 0 12px;
`;

export const QrComponent = () => (
  <QrComponentStyled>
    <QrCodeContainer />
    <Title>Improve your front-end skills by building projects</Title>
    <Subtitle>
      Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level
    </Subtitle>
  </QrComponentStyled>
);
