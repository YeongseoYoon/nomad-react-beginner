const extractDateFromISOString = (dateString = "") => {
  const dateParts = dateString.split("T");
  return dateParts[0];
};

export default extractDateFromISOString;
