import { TbBrandInstagram, TbBrandXFilled, TbMailFilled } from "react-icons/tb"
import Header from "../layout/header"

const email = "fotografieunit@gmail.com"

const About = () => {
  return (
    <>
      <Header pageTitle="about me" />
      <div className="flex justify-between">
        <figure className="border">
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
        <div>
          <p></p>
          <div className="flex justify-around">
            <a target="blank" href="https://www.instagram.com/shutterunit/">
              <TbBrandInstagram />
            </a>
            <a target="blank" href="https://www.x.com/shutterunit/">
              <TbBrandXFilled />
            </a>
            <a target="blank" href={`mailto:${email}`}>
              <TbMailFilled />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
