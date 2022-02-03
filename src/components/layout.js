import * as React from 'react';

const Layout = ({pageTitle, children}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <h1>Header goes here</h1>
      <main>
        {children}
      </main>
      <h1>Footer goes here</h1>
    </div>
  )
}

export default Layout;