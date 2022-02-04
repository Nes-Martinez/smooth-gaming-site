import React, { useEffect } from "react";
import styled from "styled-components";
import Gamehero from "./gamehero";

import Image from "../images/aboutbanner.jpg";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutContainer>
      <Gamehero image={Image} name="About Indie Switch" />
      <AboutWrapper id="main">
        <Header>ACERCA DE</Header>
        <SubHeading>Porque Nintendo Switch</SubHeading>
        <AboutText>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </AboutText>
        <AboutText>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </AboutText>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutPage;

const AboutContainer = styled.div`
  background: #fff;
  margin-top: 80px;
  position: relative;
`;

const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 36px 24px;
  justify-content: left;
`;

const AboutText = styled.p`
  font-size: 20px;
  padding-top: 25px;
`;

const Header = styled.p`
  color: #0b2838;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const SubHeading = styled.h1`
  color: #0b2838;
  margin-bottom: 12px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
