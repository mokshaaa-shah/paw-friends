import { Link } from "react-router-dom";
import img2 from "./images/output-onlinepngtools (1).png";
import Card from "../components/card/Card";
export default function Home() {
  const data = [
    {
      img: "https://thumbs.dreamstime.com/b/providing-medical-care-to-wounded-dog-veterinarian-imposes-bandage-dog-s-leg-providing-medical-care-to-wounded-135121030.jpg",
      title: "Help Brownie",
      description:
        "Brownie was in an accident where she hurt her leg very badly. She is in terrible pain and is receiving treatment for her injury. Please donate to help us give her the best care",
    },
    {
      img: "https://assets3.thrillist.com/v1/image/2771432/381x254/crop;webp=auto;jpeg_quality=60.jpg",
      title: "Help Simba",
      description:
        "Simba has a terrible maggot wound in and around his eye. He needs to be treated immediately so that his injury does not worsen. Please donate towards his treatment.",
    },
    {
      img: "/assets/kalu.jpg",
      title: "Help Kalu",
      description:
        "Rowdy is paralyzed and faces the danger of permanent paralysis. While he is currently in hospital and receiving treatment, he is in dire need of your support. Please donate to help us give Rowdy the best possible care.",
    },
    {
      img: "https://previews.123rf.com/images/malaha3/malaha32006/malaha3200600125/149894609-red-cat-with-a-damaged-eye-in-a-fight-red-blood-pets-street-cat-kitty-animal-world-predatory.jpg",
      title: "Help Abbi",
      description:
        "Daaku has an eye issue that requires urgent attention. This 4-month-old needs your support so that she can get the best treatment possible. Please donate towards her treatment",
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
