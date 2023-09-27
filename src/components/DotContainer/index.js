import { useState } from "react";
import './DotContainer.scss'
import Dot from '../Dot/index.js';

function DotContainer() {

  return (
    <div className="dot_container">
        <Dot />
    </div>
  )
}

export default DotContainer