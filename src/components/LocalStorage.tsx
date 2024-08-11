import { useState } from "react";
interface ObjectInterface {
  name: string;
  location: string;
  pincode: number;
}
const LocalStorage = () => {
  const myData = {
    name: "avdhes",
    location: "indore",
    pincode: "231208",
  };
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState<string | null>(null);
  const [objectData, setObjectData] = useState<ObjectInterface>();
  function handleSetTheItems() {
    window.localStorage.setItem("User", `${inputText}`);

    console.log("set successfully");
    setInputText("");
  }
  function handleGetTheItems() {
    const result = window.localStorage.getItem("object");
    setData(result);
    console.log("get " + result);
  }
  function handleRemoveTheItems() {
    const result = window.localStorage.clear();
    console.log("remove" + result);
  }
  function handleLength() {
    const length = window.localStorage.length;
    console.log("legnth " + length);
  }

  return (
    <div>
      <h1>Learning Local Storage methods!</h1>
      <ul>
        <li>1. get the Items from local storage :{data}</li>
        <li>
          2. get the items length from local storage :
          {window.localStorage.length}
        </li>
        <li className="m-2 p-2">
          3. set the items to local storage !
          <input
            type="text"
            className="bg-gray-600"
            placeholder="set the items ..."
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            style={{
              paddingLeft: "20px",
            }}
          />
          <p>{inputText}</p>
        </li>
      </ul>
      <button
        onClick={handleSetTheItems}
        className="bg-blue-500 p-2 m-2 cursor-pointer"
      >
        set the item to localstorage
      </button>
      <button
        onClick={handleGetTheItems}
        className="bg-blue-500 p-2 m-2 cursor-pointer"
      >
        get the item from localstorage
      </button>
      <button
        onClick={handleRemoveTheItems}
        className="bg-blue-500 p-2 m-2 cursor-pointer"
      >
        remove the item from localstorage
      </button>{" "}
      <button
        onClick={handleLength}
        className="bg-blue-500 p-2 m-2 cursor-pointer"
      >
        get the length
      </button>
    </div>
  );
};
export default LocalStorage;
