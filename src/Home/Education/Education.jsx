import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const Education = () => {
  return (
    <div>
      <SectionTitle heading="Education"></SectionTitle>
      <div className="my-4">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li data-aos="fade-up">
            <div className="timeline-middle">
              <svg
                // xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  // fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023-2027</time>
              <h2 className="text-lg font-black">United International University</h2>
              <p>Bsc. in <span className="font-bold">Data Science</span></p>
            </div>
            <hr />
          </li>
          <li data-aos="fade-up">
            <hr />
            <div className="timeline-middle">
            <svg
                // xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  // fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
            <time className="font-mono italic">2020-2022</time>
              <h2 className="text-lg font-bold">BAF Shaheen College Dhaka</h2>
              <p><span className="">HSC</span></p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
