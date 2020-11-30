import React from "react"

const Form = () => (
  <section>
    <div className="container px-3">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="field">
            <label for="name" class="label">
              Username
              <div class="control has-icons-left has-icons-right mt-2">
                <input
                  class="input"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </label>
          </div>

          <div className="field">
            <label for="email" className="label">
              Email
              <div className="control has-icons-left has-icons-right mt-2">
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Your email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </label>
          </div>

          <div className="field">
            <label for="message" className="label">
              Message
              <div className="control mt-2">
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="Type your message here"
                ></textarea>
              </div>
            </label>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Form
