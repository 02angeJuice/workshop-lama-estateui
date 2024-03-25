import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            culpa quis, quaerat at illum adipisci consectetur et, voluptate
            deleniti ab exercitationem sed deserunt. Excepturi cum quos minima
            sunt accusantium odio.
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Year of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Avard Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
