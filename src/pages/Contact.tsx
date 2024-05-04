

export default function Contact() {
  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2 style={{
            fontSize: "32px",
            fontWeight: "600"
          }}>Contact Us</h2>
          <p style={{
            fontSize: "18px"
          }}>Feel Free To Connect</p>
        </div>
        <div className="form">
          <form
            role="form"
            name="contact-form"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="Name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="Subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="Message"
                rows={5}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="text-center pt-3">
              <button type="submit" className="btn btn-success">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
