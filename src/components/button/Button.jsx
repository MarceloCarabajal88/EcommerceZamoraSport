// o export default function Button....
import './button.css';

export default function Button(props){

    return <button className="btn">{props.text}</button>;
  }
  
  export function ButtonChild(props){

    return <button className="btn">{props.children}</button>;
  }