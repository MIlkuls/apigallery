// import usePhotoGallery from "../../services/photoServices";
// import Aside from "../aside/Aside";
// import Gallery from "../gallery/Gallery";
// import About from "../about/About";
// import "./app.scss";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//   const { photos } = usePhotoGallery();
//   const [filterText, setFilterPhoto] = useState("");

//   const handleInputChange = inputValue => {
//     setFilterPhoto(inputValue);
//   };

//   return (
//     <Router>
//       <div>
//         <main>
//           <Aside onInputChange={handleInputChange} />
//           <Routes>
//             <Route
//               path="/"
//               element={<Gallery data={photos} filterText={filterText} />}
//             />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;

import usePhotoGallery from "../../services/photoServices";
import Aside from "../aside/Aside";
import Gallery from "../gallery/Gallery";
import About from "../about/About";
import "./app.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = () => {
  const { photos } = usePhotoGallery();
  const [filterText, setFilterPhoto] = useState("");

  const handleInputChange = inputValue => {
    setFilterPhoto(inputValue);
  };

  return (
    <Router>
      <div>
        <main>
          <Aside onInputChange={handleInputChange} />
            <CSSTransition classNames="fade" timeout={300}>
              <Routes>
                <Route
                  path="/"
                  element={<Gallery data={photos} filterText={filterText} />}
                />
                <Route path="/about" element={<About />} />
              </Routes>
            </CSSTransition>
        </main>
      </div>
    </Router>
  );
};

export default App;
