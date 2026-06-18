const CloudinaryHeroImage = ({ alt = "Hero image" }) => {
  const baseUrl =
    "https://res.cloudinary.com/dvut2bhks/image/upload/v1781621785/nairobi_graded_v3_ez3tmy.jpg";

  return (
    <img
      src={
        "https://res.cloudinary.com/dvut2bhks/image/upload/v1781684365/view-metro-city-buildings-citysc_mp1xzi.jpg"
      }
      sizes="100vw"
      fetchPriority="high"
      loading="eager"
      className="hero-img"
    />
  );
};

export default CloudinaryHeroImage;

// "https://res.cloudinary.com/dvut2bhks/image/upload/v1781685530/bangkok_blue_v1_il54vj.jpg"
//  "https://res.cloudinary.com/dvut2bhks/image/upload/v1781684365/view-metro-city-buildings-citysc_mp1xzi.jpg"
