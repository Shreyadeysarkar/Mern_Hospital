import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          

At ZeeCare Medical Institute, we are a dedicated team of healthcare professionals committed to delivering exceptional medical care and compassionate service to our community. Established in 2012, our hospital has grown into a leading healthcare institution known for its state-of-the-art facilities and comprehensive range of services. Our multidisciplinary team includes board-certified physicians, skilled nurses, and supportive staff who work together to provide personalized and effective treatment for each patient.

We pride ourselves on our commitment to innovation, continuously integrating the latest medical technologies and practices to ensure the best outcomes. Our mission is to offer patient-centered care across various specialties, including emergency services, surgery, maternity care, pediatrics, cardiology, oncology, and orthopedics. At ZeeCare Medical Institute, we believe in not only treating illnesses but also promoting overall health and well-being through preventive care, education, and community outreach programs.

With a foundation built on excellence, empathy, and integrity, ZeeCare Medical Institute stands as a trusted healthcare partner dedicated to improving the lives of our patients and enhancing the quality of life within our community.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;
