import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import colors from "../../../colors.json"

function ColorsList(){
    useEffect(() => {
        fetchColors()
      }, [])


const [colors, setColors] = useState([]);

const fetchColors = async () => {
  const response = await fetch('colors.json');
  const colors = await response.json()
  setColors(colors.data)
}

return(
  <div>
      <h1>Color Page</h1>
      <div id="colors">
        {colors.map((el) => (
          <p key={el.id}>
            <Link to ={`/colors/${el.id}`}>{el.name}</Link>
          </p>
        ))}
      </div>
    </div>

)
}

export default ColorsList