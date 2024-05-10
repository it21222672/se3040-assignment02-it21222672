import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from './firebaseConfig'; // Assuming you have configured Firebase

const Login = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, pass);
            const user = userCredential.user;
            if (user) {
                alert("Login successful");
                // Redirect to nasaphoto page after successful login 
                navigate("/homemain");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container-fluid" style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP._oe0Fgwanuk5J2AoRYfJzgHaEH?w=308&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card-header bg-primary text-white">
                            <h2 className="text-center mb-0">Sign in</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <input type='text' className="form-control" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type='password' className="form-control" value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                                </div>
                                <p className="mb-3">Don't have an account? <Link to="/signup">Create account</Link></p>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    {/* This is where the background image will be */}
                </div>
            </div>
        </div>
    );
};

export default Login;
