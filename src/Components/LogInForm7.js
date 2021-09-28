import React, { useState } from "react";

function LogInForm7() {
  const [objectState, setValue] = useState({});
  console.log(objectState);

  return (
    <div>
      <input
        type="text"
        name="userName"
        onChange={(e) =>
          setValue({ ...objectState, [e.target.name]: e.target.value })
        }
      />
      <input
        type="text"
        name="email"
        onChange={(e) =>
          setValue({ ...objectState, [e.target.name]: e.target.value })
        }
      />
      <h1>{objectState.userName}</h1>
      <h1>{objectState.email}</h1>
      
    </div>
  );
}

export default LogInForm7;
