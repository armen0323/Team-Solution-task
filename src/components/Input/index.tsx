import styles from "./styles.module.scss"
import {FC, InputHTMLAttributes, ReactNode} from "react";
import {cn} from "@utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactNode;
    inputSize?: Size;
    error?: string | ReactNode;
    prefixIcon?: ReactNode;
    prefixPosition?: "start" | "end";
    onClickPrefix?: (arg: any) => any;
    prefixIconStyle?: object;
}

 const Input: FC<InputProps> = ({
                                          label,
                                          inputSize = "middle",
                                          error,
                                          className,
                                          prefixIcon,
                                          prefixPosition = "start",
                                          onClickPrefix,
                                          ...restProps
                                      }) => {

    const rootClass = cn({
        [styles.Input]: true,
        [styles[inputSize]]: !!inputSize,
        [styles.Disabled]: !!restProps.disabled,
        [styles.Error]: !!error,
        [styles[`prefix-${prefixPosition}`]]: !!prefixIcon,
    });

    const inputClass = cn({
        [styles.inputElement]: true,
        [styles.inputSuccess]: !error && !!restProps.value,
        [styles.inputError]: !!error,
        [className ?? ""]: !!className,
    });

    return (
        <label className={rootClass}>
            {label && <span className={styles.Label}>{label}</span>}
            <span className={styles.InputWrapper}>
                <input
                    className={inputClass}
                    {...restProps}
                />
                {prefixIcon && <span className={styles.IconPrefix} onClick={onClickPrefix}>{prefixIcon}</span>}
            </span>
            {error && <span className={styles.inputErrorMessage}>{error}</span>}
        </label>
    );
};

export default Input;