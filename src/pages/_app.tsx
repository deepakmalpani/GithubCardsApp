import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import ReactDOM from 'react-dom'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return <Component title = "Github cards app" />
}

// class App extends React.Component<{title : string}, {}>{

//   render() {
//     return <div className='header'>{this.props.title}</div>
//   }
// }

// // export default App;
// ReactDOM.render(
//   <App title = "The Github Cards App" />,
//   app,
// );