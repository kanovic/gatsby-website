import React from "react"

const Tab = ({ tabs, selected, setSelected }) => {
  return (
    <div className="container px-3">
      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <div id="tabs-with-content">
            <div className="tabs is-centered">
              <ul>
                {tabs.map(tab => {
                  const active = tab.tabLink === selected ? "is-active" : ""
                  return (
                    <li
                      className={active}
                      key={tab.tabLink}
                      onClick={() => setSelected(tab.tabLink)}
                    >
                      <a>{tab.tabLink}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            {tabs.map(tab => {
              const active =
                tab.tabLink === selected
                  ? "tab-content is-active"
                  : "tab-content"
              return (
                <div className={active} key={tab.tabLink}>
                  <p>{tab.tabContent}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab
