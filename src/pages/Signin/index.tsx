import React, {FC} from "react"
import { Link } from "react-router-dom"
import styles from "@pages/Signup/styles.module.scss";
import {Button, Input} from "@components";
import useSignIn from "./_services/useSignIn";

 const Signin:FC = () => {
    // TODO make sign in page with small validations dont used <form> element, and when have error any fields when blured error trigged, when typeing in the field remove error
    // signed when press enter button and mouse clicking signin button

     const {handleSignIn,errors,handleChange,form} = useSignIn()
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>Sign In </h3>
                <figure className={styles.input}>
                    <Input
                        label="Email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        error={errors.email}
                        onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
                    />
                </figure>
                <figure className={styles.input}>
                    <Input
                        label="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        error={errors.password}
                        onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
                    />
                </figure>

                <div className={styles.btn}>
                    <Button onClick={handleSignIn} >Sign in</Button>
                </div>
                <div className={styles.info}>
                    <p>Don't have an account yet?</p>
                    <Link className={styles.link} to={"/signup"}>Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin