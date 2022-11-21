const Layout = ({ children, className }) => {
  return (
    <div
      className={
        "relative max-w-screen-sm bg-green-600 h-screen mx-auto " + className
      }
    >
      {children}
    </div>
  )
}

export default Layout
