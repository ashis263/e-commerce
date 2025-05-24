const Rating = ({rating}) => {
  //making an array of rating to dynamically render yello star
  const ratingArr = [];
  for (let i = 0; i < rating; i++) {
    ratingArr.push({ id: i + 1, isRated: true });
  }
  for (let i = 0; i < 5 - rating; i++) {
    ratingArr.push({ id: ratingArr.length + 1, isRated: false });
  }
  return (
    <div className="flex items-center my-1">
      <div className="flex text-yellow-400">
        {ratingArr.map((r) => (
          <span key={r.id} className={`${r.isRated ? "" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
      <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
    </div>
  );
};

export default Rating;
