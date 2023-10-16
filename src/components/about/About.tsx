import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <>
      <section className="w-full mt-20 py-8 shadow-lg">
        <h2 className="flex justify-center items-center mb-4 text-4xl font-bold">
          About Me
        </h2>
        <div className="flex justify-center">
          <div>
            <img
              src={profile}
              alt="profileImage"
              className="w-64"
            />
          </div>
          <ul className="ml-4 flex flex-col justify-center">
            <li>조성주 Cho-Seong-Ju</li>
            <li>tjdwn9753@gmail.com</li>
            <li>github</li>
            <li>blog</li>
            <li>서원대학교 ( 정보보안학과 )</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
