export const Berat = (value, previousValue) => {
    if (value) {
      return value.replace(/[^0-9.]+/g, "");
    } else {
      return value;
    }
  };

  
  export const NumberOnly = (value, previousValue) => {
    if (value) {
      return value.replace(/[^\d]/g, "");
    } else {
      return value;
    }
  };
  