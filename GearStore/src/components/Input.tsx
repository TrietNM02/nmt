import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactElement,
  TextareaHTMLAttributes,
} from "react";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

interface Props extends DetailedHTMLProps<InputAttributes, HTMLInputElement> {
  id: string;
  label: string;
  inputRef?: any;
  labelSize?: number;
  rows?: number;
}

const Input: FC<Props> = ({
  id,
  label,
  inputRef,
  labelSize = 3,
  rows = 1,
  className,
  placeholder,
  ...other
}): ReactElement => {
  const labelClass = `${labelSize} form-label`;
  const inputClass = `form-control ${className ? className : ""}`;
  return (
    <div className="form-group">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="col-sm">
        {rows > 1 ? (
          <textarea
            ref={inputRef}
            id={id}
            rows={rows}
            {...(other as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className={inputClass}
          ></textarea>
        ) : (
          <input ref={inputRef} className={inputClass} id={id} {...other} placeholder={placeholder}/>
        )}
      </div>
    </div>
  );
};

export default Input;
