import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="setion">
      <div className="container">
        <div className="titleWrapper">
          <h2 className="title">Військові про курс</h2>
          <p className="subcription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="reviewContainer">
          <Image src="" alt="" />

          <div className="reviewWrapper">
            <p className="review">
              &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, acaliquet odio
              mattis.&rdquo;
            </p>

            <p className="authorName">Name Example</p>
            <p className="uthorProfession">Profession example</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
