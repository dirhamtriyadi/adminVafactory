import React from "react";
import SelectSearch from "react-select-search";
import Select from "react-select";

export const ReanderTextArea = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  autoFocus,
  ref,
  customeCss,
  defaultValue,
  stylelabel,
  maxLength,
  nouperCase,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className={stylelabel ? 'text-white' : 'text-black'}>
      { label || <> &nbsp; </>}  
    </label>
    <textarea
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      
      tabIndex={tabIndex}
      ref={ref}
      autoComplete="off"
      type={type}
      id={id}
      // style={{textTransform: !nouperCase ? "uppercase" : "none"}}
      className={"form-control " + customeCss}
      readOnly={readOnly}
      // defaultValue={defaultValue}
      maxLength={maxLength}
      placeholder={placeholder}
    />
    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);

export const HiidenFiled = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  value,
  id,
  tabIndex,
  meta: { touched, error, warning },
}) => (
  <>
    <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      tabIndex={tabIndex}
      autoComplete="off"
      type={type}
      id={id}
      className="form-control"
      readOnly={readOnly}
      defaultValue={value}
      placeholder={placeholder}
    />
  </>
);

export const ReanderField = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  autoFocus,
  ref,
  customeCss,
  defaultValue,
  stylelabel,
  maxLength,
  nouperCase,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    {label && 
    <label htmlFor="" className={stylelabel ? "text-white" : "text-black"}>
      {label || <> &nbsp; </>}
    </label>
    }
    <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      tabIndex={tabIndex}
      ref={ref}
      autoComplete="off"
      type={type}
      id={id}
      // style={{textTransform: !nouperCase ? "uppercase" : "none"}}
      className={"form-control " + customeCss}
      readOnly={readOnly}
      // defaultValue={defaultValue}
      maxLength={maxLength}
      placeholder={placeholder}
    />
    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);
export const InputGroup = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  prefix,
  ref,
  customeCss,
  defaultValue,
  stylelabel,
  maxLength,
  nouperCase,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    {label}

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          {prefix}
        </span>
      </div>

      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault(); //<===== This stops the form from being submitted
          } else {
          }
        }}
        {...input}
        tabIndex={tabIndex}
        ref={ref}
        autoComplete="off"
        type={type}
        id={id}
        // style={{textTransform: !nouperCase ? "uppercase" : "none"}}
        className={"form-control " + customeCss}
        readOnly={readOnly}
        // defaultValue={defaultValue}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {touched &&
        ((error && (
          <ul className="parsley-errors-list filled">
            <li className="parsley-required"> {error}.</li>
          </ul>
        )) ||
          (warning && <p>{warning}</p>))}
    </div>
  </div>
);

export const ReanderSelect = ({
  input,
  label,
  readOnly,
  placeholder,
  options,
  value,
  id,
  disabled,
  tabIndex,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className="text-black">
      {label}
    </label>
    <SelectSearch
      autoComplete="off"
      onInputKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      id={id}
      readOnly={readOnly}
      search
      tabIndex={tabIndex}
      disabled={disabled}
      placeholder={placeholder}
      options={options}
    />
    {/* <Select
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        options={options}
     
      /> */}

    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);

export const ReanderMultiSelect = ({
  input,
  label,
  readOnly,
  placeholder,
  options,
  id,
  disabled,
  tabIndex,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor="" className="text-black">
      {label}
    </label>
    <Select
      {...input}
      isMulti
      onChange={value => input.onChange(value)}
      onBlur={() => input.onBlur(input.value)}
      autoComplete="off"
      onInputKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      id={id}
      readOnly={readOnly}
      search
      tabIndex={tabIndex}
      disabled={disabled}
      placeholder={placeholder}
      options={options}
    />

    {touched &&
      ((error && (
        <ul className="parsley-errors-list filled">
          <li className="parsley-required"> {error}.</li>
        </ul>
      )) ||
        (warning && <p>{warning}</p>))}
  </div>
);