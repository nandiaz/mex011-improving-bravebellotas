import { Button } from '@material-ui/core';
import { useNavigate } from "react-router";
import React, { useState } from "react";

import { signOut } from "@firebase/auth";
import { auth } from "../../../Firebase/firebase-config"

export const BttnLogout = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");


    const handlesignOut = async () => {
        try {
            await signOut(auth);
            console.log("i'm out");
            navigate("/login");
        } catch (error) {
            setError("Error");
        }
    };

    return (
        <div>
            <Button variant="contained" className="bttn-logout" color="secondary" onClick={handlesignOut}>Sign out</Button>
            <div className="error">{error}</div>
        </div>


    );
};
