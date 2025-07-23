import { useState } from 'react';
import testShirt from '/test_shirt.jpg';
import testShirt2 from '/test_shirt2.jpg';
import testShirt3 from '/test_shirt3.jpg';

import './App.css';

function App() {

  let imageList: string[] = [testShirt, testShirt2, testShirt3];

  interface idxData {
    prev: number,
    curr: number,
    next: number
  }
  const [imageIndex, setImageIndex] = useState<idxData>({
    prev: imageList.length - 1,
    curr: 0,
    next: 1
  });

  const updateIdx = function (direction: string, currIdx: number, maxIdx: number): number {
    if (direction == "+") {
      if (currIdx + 1 < maxIdx) { return currIdx + 1; }
      else { return 0; }
    }
    else if (direction == "-") {
      if (currIdx - 1 >= 0) { return currIdx - 1; }
      else { return maxIdx - 1; }
    }
    else return 0;
  }

  const updateImIdx = (direction: string) => {
    setImageIndex(imageIndex => ({
      prev: updateIdx(direction, imageIndex.prev, imageList.length),
      curr: updateIdx(direction, imageIndex.curr, imageList.length),
      next: updateIdx(direction, imageIndex.next, imageList.length)
    }));
  };
//  TODO: rotate edge images
// TODO: handle cases with fewer than 3 images in imageList
  

  return (
    <>
      <div>
        <img src={testShirt} className="clothes-im rotate" alt="test image" />
      </div>
      <div className="card">
        <button onClick={() => updateImIdx("-")}>
          &lt;
        </button>
        <img src={imageList[imageIndex.prev]} className="clothes-im" alt="selected shirt" />
        <img src={imageList[imageIndex.curr]} className="clothes-im" alt="selected shirt" />
        <img src={imageList[imageIndex.next]} className="clothes-im" alt="selected shirt" />

        <button onClick={() => updateImIdx("+")}>
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
