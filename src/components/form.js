import React, { useState } from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Dont't fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div class="field">
          <label for="name" class="label">
            Username
            <div class="control has-icons-left has-icons-right mt-2">
              <input
                class="input"
                name="name"
                type="text"
                placeholder="Your name"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              ></textarea>
            </div>
          </label>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-ghost">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form
