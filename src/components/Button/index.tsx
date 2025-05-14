import React, {ButtonHTMLAttributes} from 'react';
import styles from './styles.module.scss';
import {cn} from "@utils/cn";


// TODO needed ButtonProps type interface to inherit from default html button attributes
// for example pass onClick method, disabled, etc 
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: Size;
    variant?: Variant
}


const Button: React.FC<ButtonProps> = ({
                                           children,
                                           size = "middle",
                                           variant = "primary",
                                           className,
                                           ...btnProps
                                       }) => {

    // TODO write styles for coresponding props color and size, when pass props color: gray button color is gray, when pass size large button is large width and height
    // use global css variables declare and use for example --blue: #1478a1, use in the styles color: var(--blue)
    const cs = cn({
        [styles.button]: true,
        [styles[size]]: true,
        [styles[variant]]: true,
        [className ?? '']: !!className,
    });

    return (
        <button
            className={cs}
            {...btnProps}
        >
            {children}
        </button>
    );
};

export default Button;