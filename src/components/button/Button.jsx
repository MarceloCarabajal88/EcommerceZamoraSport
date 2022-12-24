// o export default function Button....
import './button.css';

export default function Button(props){

    return <button className="btn1">{props.text}</button>;
  }
  
  export function ButtonChild(props){

    return <button className="btn btn-primary btn-sm">{props.children}</button>;
  }