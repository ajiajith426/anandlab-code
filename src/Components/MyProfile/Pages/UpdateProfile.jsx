export default function UpdateProfile() {
  return (
    <div className="col-9">
      <div className="Products-factory-functions">
        <div className="row">
          <div className="col-12">
            <div className="accnt-heads">
              <h4>Profile</h4>
            </div>
            <div className="update-profile">
              <form
                name="contactform"
                method="post"
                action="#"
                id="contactform"
              >
                <div className="formdata">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    className="form-control jsrequired "
                  />
                </div>
                <div className="formdata">
                  {" "}
                  <input
                    type="email"
                    placeholder="Date of Birth"
                    name="email"
                    id="email"
                    className="form-control jsrequired "
                  />
                </div>
                <div className="formdata">
                  {" "}
                  <input
                    type="email"
                    placeholder="Email Id"
                    name="email"
                    id="email"
                    className="form-control jsrequired "
                  />
                </div>
                <div className="formdata">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="mobile"
                    id="mobile"
                    className="form-control jsrequired "
                  />
                </div>
                <div className="formdata">
                  {" "}
                  <input
                    type="button"
                    name="submit"
                    value="Update"
                    onClick="submit_contact();"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
