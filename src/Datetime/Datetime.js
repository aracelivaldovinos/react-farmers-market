const Datetime = () => {
  const showDate = new Date();
  const currentTime = showDate.toDateString();
  return(
    <div className="date display-5">
      {currentTime}
    </div>
  );
}
 
export default Datetime;