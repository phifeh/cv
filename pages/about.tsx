import styled from "@emotion/styled";
import Layout from "../components/layout";
const Image = styled('img')`
  border-radius:50%;
  border: 0.0125rem solid var(--colors-primary-text);
box-shadow: 0.0125rem 0.025rem #45454545;
align-self:center ;
`


export default function About() {
  return (
      <>
      <Image src="/images/profile.jpg"></Image>
      <h2>About me</h2>
      <article>
        <p>I am a creative full stack javascript developer with a varied skill set. I have always had a can-do attitude and strong problem solving skills. This, combined with a passion for technology and design has driven me into the realm of web developmen</p>
        <h3>I love a challenge</h3>
        <p>I love figuring out how things work and trying out new things. </p>
      </article>
</>
  );
}
