import { FaPaw } from "react-icons/fa";

export default function Medical() {
  return (
    <div className="vetclinic">
      <h3>Medical Care</h3>
      <p>
        The PawFriends Veterinary Clinic is a not-for-profit vet clinic. We
        provide quality veterinary care at low costs to anyone in need of such
        services, whether you’re an animal rescuer, pet owner or simply a good
        samaritan who helps animals! Both pets and strays are welcome at our
        clinic.
      </p>
      <div className="medicalcare">
        <ul>
          <div className="colum1">
            <li>
              <FaPaw /> General check-ups
            </li>
            <li>
              {" "}
              <FaPaw /> Vaccinations
            </li>
            <li>
              {" "}
              <FaPaw />
              Parasite prevention
            </li>
            <li>
              {" "}
              <FaPaw /> Wound dressing and maggot removal
            </li>
          </div>
          <div className="colum1">
            <li>
              <FaPaw />
              Viral infections{" "}
            </li>
            <li>
              <FaPaw />
              Allergies{" "}
            </li>
            <li>
              <FaPaw />
              Spay/neuter and other surgeries with post-operative care
            </li>
            <li>
              {" "}
              <FaPaw />
              Inpatient admission for cats
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
