import React from 'react'
import Router from 'next/router'

export default class MyLink extends React.Component {
  componentDidMount() {
    Router.prefetch('/dynamic')
  }
  
  render() {
    return (
       <div>
        <a onClick={() => setTimeout(() => url.pushTo('/dynamic'), 100)}>
          A route transition will happen after 100ms
        </a>
      </div>   
    )
  }
}