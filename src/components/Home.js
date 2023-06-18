import { Link } from "react-router-dom";
import img2 from "./images/output-onlinepngtools (1).png";
import Card from "../components/card/Card";
export default function Home() {
  const data = [
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "Help kalu",
      description:
        "Spaying female dogs and cats eliminates the possibility of uterine or ovarian cancer and greatly reduces the incidence of breast cancer. Neutering male dogs and cats reduces the incidence of prostate cancer. Neutered animals are less likely to roam and fight.",
    },
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "Help obi",
      description:
        "Spaying female dogs and cats eliminates the possibility of uterine or ovarian cancer and greatly reduces the incidence of breast cancer. Neutering male dogs and cats reduces the incidence of prostate cancer. Neutered animals are less likely to roam and fight.",
    },
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "Help rambo",
      description: "HJKhjkhjkhjkhjkhjkh",
    },
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "Help rambo",
      description: "HJKhjkhjkhjkhjkhjkh",
    },
  ];
  const change = [
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "donation",
      description: "HJKhjkhjkhjkhjkhjkh",
    },
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "volunteer",
      description: "HJKhjkhjkhjkhjkhjkh",
    },
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "adoption",
      description: "HJKhjkhjkhjkhjkhjkh",
    },
    {
      img: "/assets/mariana-montes-de-oca-TDUpwlnUA5U-unsplash.jpg",
      title: "adoption",
      description: "HJKhjkhjkhjkhjkhjkh",
    },
  ];
  return (
    <>
      <div class="home">
        <div class="content">
          <h1>sponsor an animal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            ducimus harum corrupti perspiciatis corporis fugiat nesciunt quaerat
            esse, magni quod debitis consequuntur exercitationem quae quo
            deserunt iusto rem velit soluta.
          </p>
          <Link to="/signin" class="btn1">
            DONATE
          </Link>
        </div>
      </div>
      <div className="animalcare">
        <h1> Animals in Care </h1>

        <div id="care">
          {data.map((cardData) => (
            <Card data={cardData} />
          ))}
        </div>
      </div>
      <div className="adopt">
        <h1>Adopt</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          laudantium cupiditate, possimus aperiam suscipit animi magnam quos
          commodi vitae officia aut quis saepe optio minima praesentium, dolor
          molestiae voluptates consequuntur!
        </p>
        <Link to="/getinvolved" className="btn2">
          ADOPT
        </Link>
      </div>
      <div className="about">
        <h1> who are we </h1>
        <img src={img2} />

        <p>
          Pawfriends is a medically-based rescue organisation for stray dogs and
          cats. In  Mumbai, we operate a shelter/hospital and provide adoption,
          animal shelter, medical care, sterilisation, and animal rescue
          services
          {/*  VISION Our goal is to create a compassionate world for all
          animals. After tens of thousands of animals, we continue to put in a
          lot of effort to guarantee that every dog, cat receives the same level
          of love, care, and respect. */}
        </p>
        <Link to="/whoarewe" class="btn3">
          KNOW MORE
        </Link>
      </div>
      <div className="animalcare">
        <h1> How we Bring a Change </h1>

        <div id="change">
          {change.map((cardData) => (
            <Card data={cardData} />
          ))}
        </div>
      </div>
    </>
  );
}
