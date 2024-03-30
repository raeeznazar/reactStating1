// function CoreConcept(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title}></img>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>      
//     </li>
//   )
// }

//We can use js object destructuring
export default function CoreConcept({image,title, description}){
    return (
      <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>      
      </li>
    )
  }