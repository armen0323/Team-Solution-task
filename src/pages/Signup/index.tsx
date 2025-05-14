import React, {FC} from "react";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss"
import {Button,Input} from "@components";
import useSignUp from "./_services/useSignUp";



 const Signup: FC = () => {
    // TODO make sign up page with small validations, don't use <form> element,
    //  and when there is an error in any field when unfocus, the error is triggered, when typing in the field , remove the  error
    // registered when pressing the enter button and clicking sign-in button
    // sign in after registration with Promise.allWithMode , for example Promise.allWithMode([singupcall(), signincall()])

    const {handleSignup,errors,handleChange,form} = useSignUp()
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>Sign up </h3>
                <figure className={styles.input}>
                    <Input
                        label="Email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        error={errors.email}
                        onKeyDown={(e) => e.key === 'Enter' && handleSignup()}
                    />
                </figure>
                <figure className={styles.input}>
                    <Input
                        label="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        error={errors.password}
                        onKeyDown={(e) => e.key === 'Enter' && handleSignup()}
                    />
                </figure>

                <div className={styles.btn}>
                    <Button onClick={handleSignup}>Sign up</Button>
                </div>
                <div className={styles.info}>
                    <p>Already have an account?</p>
                    <Link className={styles.link} to={"/signin"}>Sign in</Link>
                </div>
            </div>
        </div>
    )
}
export default Signup