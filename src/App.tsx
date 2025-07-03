import { useState } from 'react';
import testShirt from '/test_shirt.jpg';
import testShirt2 from '/test_shirt2.jpg';
import testShirt3 from '/test_shirt3.jpg';

import './App.css';

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  let imageList: string[] = [testShirt, testShirt2, testShirt3];

  return (
    <>
      <div>
        <img src={testShirt} className="clothes-im rotate" alt="test image" />
      </div>
      <div className="card">
        <button onClick={() => setImageIndex((count) => {
          if (count - 1 > 0) { return count - 1; }
          else { return imageList.length-1; }
        })}>
          &lt;
        </button>
        <img src={imageList[imageIndex]} className="clothes-im" alt = "selected shirt"/>
        <button onClick={() => setImageIndex(count => {
          if (count+1<imageList.length){return count + 1;}
          else{return 0}
        })}>
          <div className='arrow-right'></div>
        </button>
        <p>
          <code>src/App.tsx</code> and save to test HMRdfg
        </p>
      </div>
    </>
  )
}

export default App
