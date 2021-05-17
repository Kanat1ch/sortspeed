import React from 'react'
import './Start.scss'
import upload from '../../img/upload.png'

const Main = () => {
  return (
    <div className="Start">
      <div className="Start__container _container">
        <h1 className="Start__title">Check the code execution time for different sorts</h1>
        <p className="Start__subtitle">Special for the best teacher <a href="https://vk.com/anton.zhuplev" rel="noreferrer" target="_blank">Anton Zhuplev</a></p>

        <div className="Start__input-form">
          <label className="Start__btn btn" for="file">Choose files</label>
          <p>Or drag'n'drop the files here</p>
          <input type="file" name="file" id="file" multiple style={{display: 'none'}} />
        </div>
        <img src={upload} alt="upload" className="Start__on-drop" />
      </div>
    </div>  
  )
}

export default Main