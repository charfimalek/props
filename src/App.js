import React from 'react';
import Profile from "./profile/Profile";
import tShirt from "./tShirt.jpg";
const App = () =>{
  const AlertName = name => alert(name)
return (
<Profile AlertName={AlertName} Name={5} profession='Gestionnaire de stock' >{tShirt}</Profile>
)
}
export default App;
