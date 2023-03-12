import {useState} from 'react';

const useForm = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    value,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setValue(initialValue);
      }
      return setValue({...value, [formType]: formValue});
    },
  ];
};

export default useForm;
