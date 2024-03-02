import './App.css';
import { useState } from 'react';

function App() {


  const feelings = [
    "I'm feeling lucky",
    "I'm feeling trendy",
    "I'm feeling hungry",
    "I'm feeling doodley",
    "I'm feeling artistic",
    "I'm feeling adventurous"
  ]

  const [feelingBtn, setFeelingBtn] = useState(0)

  console.log("setFeelingBtn", feelingBtn)

  const handlingmousehover = () => {
    setFeelingBtn((prevIndex) => (prevIndex + 1) % feelings.length)
  }

  return (

    <div class="container">
      <div class="appbar">
        <nav>
          <ul class="left-appbar">
            <li><div>About</div></li>
            <li><div>Store</div></li>
          </ul>
        </nav>
        <nav>
          <ul class="right-appbar">
            <li><div>Gmail</div></li>
            <li><div>Images</div></li>
            <li><img src="icons/google-apps.png" alt="Apps Icon" class=" apps" /></li>
            <li><button>Sign in</button></li>
          </ul>
        </nav>
      </div>

      <div class="mainContent">
        <div>
          <img src="icons/google.png" alt="Google Icon" class=" google" />
        </div>
        <div class="search">
          <input type="text" />
          <img src="icons/search.png" alt="Search Icon" class=" searchbtn" />
          <img src="icons/google-voice.png" alt="Google Voice Icon" class=" googlevoicebtn" />
          <img src="icons/google-image.png" alt="Google Image Icon" class=" googleimagebtn" />
        </div>
        <div class="button">
          <button>Google Search</button>
          <button onMouseOver={handlingmousehover}>{feelings[feelingBtn]}
          </button>
        </div>
      </div>

      <div class="footer">
        <nav>
          <ul class="left-footer">
            <li><div>Advertising</div></li>
            <li><div>Business</div></li>
            <li><div>About</div></li>
          </ul>
        </nav>
        <nav>
          <ul class="right-footer">
            <li><div>Privacy</div></li>
            <li><div>Terms</div></li>
            <li><div>Settings</div></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
