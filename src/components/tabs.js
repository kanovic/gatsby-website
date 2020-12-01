import React from "react"

const Tab = ({ tabs, selected, setSelected }) => {
  return (
    <div id="tabs-with-content">
      <div className="tabs is-right">
        <ul>
          {tabs.map(tab => {
            const active = tab.tabLink === selected ? "is-active" : ""
            return (
              <li
                className={active}
                key={tab.tabLink}
                onClick={() => setSelected(tab.tabLink)}
                onKeyDown={() => setSelected(tab.tabLink)}
                role="presentation"
              >
                <a href="#">{tab.tabLink}</a>
              </li>
            )
          })}
        </ul>
      </div>
      {tabs.map(tab => {
        const style =
          tab.tabLink === selected ? { display: "block" } : { display: "none" }
        return (
          <div key={tab.tabLink} style={style}>
            <p>{tab.tabContent}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Tab
