function TestimonialGenerator(props) {
  const arr = props.data;
  return arr.map((element) => {
    return (
      <div
        className={
          element.name
            ? "Testimonial-card"
            : "Testimonial-card Anonymous-feedback"
        }
      >
        <div className="Feedback">
          <p>"{element.feedback}"</p>
        </div>
        <div className="User-card">
          <div className="User-details">
            {element.img && <img src={element.img} alt="User-pic" />}
            <div className="User-details-text">
              {element.name && <p>{element.name}</p>}
              {element.from && <p>{element.from}</p>}
            </div>
          </div>
          {element.social && (
            <div className="User-socials">
              <img src={element.social} alt="Social-pic" />
            </div>
          )}
        </div>
      </div>
    );
  });
}

export default TestimonialGenerator;
