const getLogoByName = ({ logos, logoName }) => {
  const logo = logos.find((logo) => logo.name === logoName);
  return logo ? logo.logo : logos.find((logo) => logo.name === "default").icon;
};

export default getLogoByName;
