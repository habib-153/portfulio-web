const ContactBadge = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="badge-base LI-profile-badge hidden md:block"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="habiburrahman153"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://bd.linkedin.com/in/habiburrahman153?trk=profile-badge"
        ></a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="badge-base LI-profile-badge md:hidden"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="habiburrahman153"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://bd.linkedin.com/in/habiburrahman153?trk=profile-badge"
        ></a>
      </div>
    </>
  );
};

export default ContactBadge;
