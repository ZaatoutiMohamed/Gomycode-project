import Rating from "@mui/material/Rating";

const Rate = ({ rating }) => {
  return (
    <div className="Rating">
      <Rating name="half-rating-read" precision={0.5} value={rating} readOnly />
    </div>
  );
};
export default Rate;
