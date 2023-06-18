import { FaPaw } from "react-icons/fa";

export default function Sterile() {
  return (
    <div className="steralization">
      <div className="sterile">
        <h1>steralization</h1>
        <p>
          We have sterilised and vaccinated 9,200+ animals
          <br /> till date.
        </p>
      </div>
      <div className="wrap">
        <h1> why should we spay or neuter </h1>
      </div>
      <div className="reasons">
        <p>
          <FaPaw />
          Reduces Aggression
        </p>
        <p>
          <FaPaw /> decrese overpopulation
        </p>
        <p>
          <FaPaw /> lower risk of cancer
        </p>
      </div>
      <div className="reasons2">
        <p>
          <FaPaw /> Reduce roaming
        </p>
        <p>
          <FaPaw /> increases lifespan over 3-5yrs
        </p>
      </div>
      <div className="sterilepara">
        Sterilisation prevents suffering, extends life for females, and reduces
        fighting and subsequent injury in males. Combined with rabies
        innoculation, sterilisation is internationally recognised as the most
        effective and human way to control population and spread of diseases.
      </div>
    </div>
  );
}
