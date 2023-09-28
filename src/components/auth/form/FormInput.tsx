
import { useEffect, useState } from "react";


interface InputProps {
  field: string;
  name: string;
  placeholder: string;
  errorMessage: string;
  style?: string;
  setForm : React.Dispatch<React.SetStateAction< any >>;
}

interface RegisterForm {
  name: string;
  email: string;
  password: string; 
}

interface LoginForm {
  email: string;
  password: string;
}



function CharactersCounter({ word }: { word: string }) {
  const [currentCharacters, setCurrentCharacters] = useState<number>(0);

  useEffect(() => {
    if (word.length > 50) return;
    setCurrentCharacters(word.length);
  }, [word.length]);

  return (
    <div className="flex flex-row justify-between">
      <span className="text-gray-500 font-light text-xs">
        {currentCharacters} / 50
      </span>
    </div>
  );
}

export const  FormInput = ({
  field,
  name,
  placeholder,
  errorMessage,
  style,
  setForm,
}: InputProps)  => {
  return (
    <div className="flex flex-col">
      <input
        className={`bg-transparent border-[1px] border-gray-500  ${style ? style : '2xl:w-[430px]'} rounded-md  px-4 h-16 text-gray-500 text-md font-light focus:outline-none focus:border-twitter transition-colors duration-300 ease-in-out
              ${field.length > 0 ? "border-gray-300" : "border-red-500"}
            }`}
        placeholder={placeholder}
        name={name}
        type={name === "email" ? "email" : "text"}
        value={field}
        maxLength={50}
        onChange={(e) =>
          setForm((prev: RegisterForm | LoginForm) => ({
            ...prev,
            [name]: e.target.value,
          }))
        }
        
      />

      <div className="flex justify-end 2xl:absolute 2xl:mr-2 mt-2">
        <CharactersCounter word={field} />
      </div>
      {field.length == 0 && (
        <span className="2xl:absolute 2xl:mt-10 lg:-mt-5  text-xs font-extralight text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
