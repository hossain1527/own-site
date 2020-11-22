import React, { useState } from "react";

import img22 from "./images/contact_img.jpg";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(
      `My full name is: ${data.fullname}. My contact number: ${data.phone}. Here is my email address: ${data.email}. and I would like to say ${data.msg}`
    );
  };

  return (
    <React.Fragment>
      {/**********Top portion***********/}

      <div className="my-5">
        <h1 className="text-center" data-aos="flip-left">
          Find me Here
        </h1>
      </div>

      <section className="d-flex align-items-center bg" id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-4 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <img
                    src={img22}
                    style={{ width: "400px", height: "500px" }}
                    className="img-fluid animated"
                    alt="contactImg"
                    MyHomeImg
                  />
                </div>

                <div className="col-lg-6 order-2 order-lg-1 header-img">
                  <h1 id="main-caption" style={{ color: "#400303" }}>
                    <strong className="contact-name">
                      I'll Be Right Here Waiting For You...
                    </strong>
                  </h1>

                  <h3 className="font-weight-bold">My Contact</h3>
                  <h2 className="font-weight-bold">
                    WhatsApp: +351 920 555 211
                  </h2>
                  <h2 className="font-weight-bold">
                    Email: hossain.sci2015@gmail.com
                  </h2>
                  <h2 className="font-weight-bold">
                    Reboleira, Lisbon, Portugal
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**********Form Starts***********/}

      <h2 className="text-center" data-aos="zoom-in">
        Have any question? Write me 👇
      </h2>
      <div className="container contact_box">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitForm}>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Please enter your name"
                  data-aos=""
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Your mobile"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="Your email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Your email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div class="form-group mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
